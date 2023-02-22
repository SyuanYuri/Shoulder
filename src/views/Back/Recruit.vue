<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import moment from "moment";

// axios.defaults.baseURL = "http://127.0.0.1:8000/api"; // 測試
axios.defaults.baseURL = "https://shouldersfoundationtw.org/framework/api";

onMounted(() => {
  getRecord();
});

let alertStatus = ref(false);
let alertMessage = ref("");
let loadingState = ref(true);
let recordList = reactive([]);
let token = localStorage.getItem("token");

/* 取得履歷 */
function getRecord() {
  loadingState.value = true;
  axios({
    method: "get",
    url: "/record",
    responseType: "json",
    headers: {
      Authorization: token,
    },
  })
    .then(function (res) {
      console.log(res.data.response);
      recordList.splice(0);
      recordList.push(res.data.response);
      recordList.map((e) => {
        for (let index = 0; index < e.length; index++) {
          const item = e[index];
          item.rdField = item.rdField.split(",");
        }
      });
      loadingState.value = false;
    })
    .catch(function (error) {
      console.log("錯誤", error);
    });
}

let editForm = reactive([]);
let pasteId = ref(0);

function pasteData(params) {
  editForm.splice(0, 1);
  pasteId.value = params;
  let assign = recordList[0].filter((e) => e.rdId === params);
  editForm.push([...assign]);
  if (assign[0].opened === 0) {
    axios({
      method: "put",
      url: `/record/${params}`,
      responseType: "json",
      headers: {
        Authorization: token,
      },
      data: {
        opened: 1,
      },
    })
      .then(() => {
        getRecord();
      })
      .catch((error) => {
        console.log("刪除失敗", error);
      });
  }
}

let deleteId = ref(0);

function getDeleteId(params) {
  deleteId.value = params;
}

/* 刪除 */
function deleteRecord() {
  axios({
    method: "delete",
    url: `/record/${deleteId.value}`,
    responseType: "json",
    headers: {
      Authorization: token,
    },
  })
    .then((res) => {
      console.log("res", res);
      if (res.data.status) {
        alertStatus.value = true;
        alertMessage.value = "刪除成功";
        // 關閉刪除視窗
        document.getElementById("deleteModalHide").click();
        getRecord();
        setTimeout(() => {
          alertStatus.value = false;
        }, 5000);
      }
    })
    .catch((error) => {
      console.log("刪除失敗", error);
    });
}
</script>

<template>
  <div class="recruit-content">
    <!-- 讀取動畫 -->
    <div
      class="spinner-border text-secondary loading"
      role="status"
      v-if="loadingState"
    >
      <span class="visually-hidden">Loading...</span>
    </div>

    <div class="main-table">
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">姓名</th>
            <th scope="col">投入領域</th>
            <th scope="col">申請日期</th>
            <th scope="col">狀態</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in recordList[0]" :key="index">
            <td scope="row" valign="middle">{{ index + 1 }}</td>
            <td valign="middle">{{ item.rdName }}</td>
            <td valign="middle">
              <ul>
                <li v-for="i in item.rdField" :key="i">
                  <span v-if="i === '1'">課業輔導組</span>
                  <span v-else-if="i === '2'">關懷陪伴組</span>
                  <span v-else-if="i === '3'">英文口說組</span>
                  <span v-else>內部行政組</span>
                </li>
              </ul>
            </td>
            <!-- <td>{{ moment(item.created_at).format("YYYY-MM-DD") }}</td> -->
            <td valign="middle">
              {{ moment(item.created_at).format("YYYY-MM-DD") }}
            </td>
            <td valign="middle">
              <span
                v-if="item.opened === 0"
                class="badge text-dark"
                style="background: #f4c166"
                >未開啟</span
              >
              <span v-else class="badge bg-secondary">已開啟</span>
              <!-- {{ item.opened === "1" ? "已開啟" : "未開啟" }} -->
            </td>
            <td class="btn-box" valign="middle">
              <button
                id="editUser"
                data-bs-toggle="modal"
                data-bs-target="#editModal"
                @click="pasteData(item.rdId)"
              >
                開啟
              </button>
              <button
                id="deleteUser"
                data-bs-toggle="modal"
                data-bs-target="#deleteModal"
                @click="getDeleteId(item.rdId)"
              >
                <!-- <i class="bi bi-trash-fill"></i> -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 編輯 Modal -->
    <div
      class="modal fade"
      id="editModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="editModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body pt-0">
            <table class="table table-bordered m-0">
              <tbody v-for="item in editForm[0]">
                <tr>
                  <th valign="middle">姓名</th>
                  <td valign="middle">
                    {{ item.rdName }}
                  </td>
                  <th valign="middle">電話</th>
                  <td valign="middle">
                    {{ item.rdCellPhone }}
                  </td>
                </tr>
                <tr>
                  <th valign="middle">國籍</th>
                  <td valign="middle">
                    {{ item.rdCitizenship }}
                  </td>
                  <th valign="middle">年齡</th>
                  <td valign="middle">
                    {{ item.rdAge }}
                  </td>
                </tr>
                <tr>
                  <th valign="middle">學歷</th>
                  <td valign="middle">
                    {{ item.rdAcademic }}
                  </td>
                  <th valign="middle">科系</th>
                  <td valign="middle">
                    {{ item.rdDepartment }}
                  </td>
                </tr>
                <tr>
                  <th valign="middle">電子郵件</th>
                  <td valign="middle" colspan="3">
                    {{ item.rdEmail }}
                  </td>
                </tr>
                <tr>
                  <th valign="middle">經歷</th>
                  <td valign="middle" colspan="3">
                    {{ item.rdExperience }}
                  </td>
                </tr>
                <tr>
                  <th valign="middle">投入領域</th>
                  <td valign="middle" colspan="3">
                    <ul>
                      <li v-for="i in item.rdField" :key="i">
                        <span v-if="i === '1'">課業輔導組</span>
                        <span v-else-if="i === '2'">關懷陪伴組</span>
                        <span v-else-if="i === '3'">英文口說組</span>
                        <span v-else>內部行政組</span>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th valign="middle">加入原因</th>
                  <td valign="middle" colspan="3">
                    {{ item.rdJoinUs }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- 刪除 Modal -->
    <div
      class="modal fade"
      id="deleteModal"
      tabindex="-1"
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">刪除後即無法復原，確定要刪除嗎？</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-bs-dismiss="modal"
              id="deleteModalHide"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteRecord()"
            >
              刪除
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Alert -->
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
        />
      </symbol>
    </svg>
    <div
      v-if="alertStatus"
      class="alert alert-success d-flex align-items-center"
      role="alert"
    >
      <svg
        class="bi flex-shrink-0 me-2"
        width="24"
        height="24"
        role="img"
        aria-label="Success:"
      >
        <use xlink:href="#check-circle-fill" />
      </svg>
      <div>
        {{ alertMessage }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.recruit-content {
  .main-table {
    width: 100%;
    overflow-x: auto;
    tr {
      white-space: nowrap;
      &:hover {
        background-color: #f4f4f4;
      }
    }
  }

  #editModal {
    .modal-header {
      border: none;
    }

    th {
      text-align: center;
      background-color: #f4f4f4;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .badge {
    font-size: 14px;
  }

  .alert {
    position: fixed;
    right: 25px;
    bottom: 10px;
  }

  .loading {
    position: absolute;
    top: 50%;
    left: 56%;
    @media (max-width: 991px) {
      left: 50%;
    }
  }
}
</style>
