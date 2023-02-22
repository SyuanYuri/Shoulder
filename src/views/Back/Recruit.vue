<script>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import moment from "moment";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Recruit",
  components: {
    Navbar,
    Footer,
  },

  setup() {
    // onMounted(() => {
    //     getRecord();
    // })

    let isSuccess = ref(false);
    let confirmEmail = ref("");
    let errorMsg = ref("");
    let rdField = reactive({
      list: [],
    });

    let loadingState = ref(true);
    // let recordList = reactive([]); 暫時隱藏
    let token = localStorage.getItem("token");

    /* 取得履歷 */
    // function getRecord() { 暫時隱藏
    //     loadingState.value = true;
    //     axios({
    //         method: 'get',
    //         url: 'https://shouldersfoundationtw.org/framework/api/record',
    //         responseType: 'json',
    //         headers: {
    //             Authorization: token
    //         }
    //     })
    //         .then(function (res) {
    //             console.log(res.data.response);
    //             recordList.splice(0);
    //             recordList.push(res.data.response);
    //             loadingState.value = false;
    //         })
    //         .catch(function (error) {
    //             console.log('錯誤', error);
    //         });
    // }

    let recordList = reactive([
      {
        rdId: 1,
        rdName: "ChenSyuanYu",
        rdCitizenship: "台灣",
        rdAge: "30",
        rdCellPhone: "0912345678",
        rdEmail: "rurumidog@gmail.com",
        rdAcademic: "大學",
        rdDepartment: "應用日文系",
        rdExperience: "25年的經歷",
        rdField: "2,4",
        rdJoinUs: "因為",
        rdPwd: "-",
        rdAgree: "Y",
        opened: "0",
        modifier: "-",
        created_at: "2023-01-04T10:25:33.000000Z",
        updated_at: "2023-01-04T10:25:33.000000Z",
      },
      {
        rdId: 2,
        rdName: "炭大吉",
        rdCitizenship: "台灣",
        rdAge: "15",
        rdCellPhone: "0912345678",
        rdEmail: "rurumidog@gmail.com",
        rdAcademic: "高中/職(含)以下",
        rdDepartment: "應用日文系",
        rdExperience: "15年經歷",
        rdField: "3",
        rdJoinUs: "因為",
        rdPwd: "-",
        rdAgree: "Y",
        opened: "0",
        modifier: "-",
        created_at: "2023-01-07T15:05:31.000000Z",
        updated_at: "2023-01-07T15:05:31.000000Z",
      },
      {
        rdId: 3,
        rdName: "小不點",
        rdCitizenship: "台灣",
        rdAge: "15",
        rdCellPhone: "0912345678",
        rdEmail: "rurumidog@gmail.com",
        rdAcademic: "高中/職(含)以下",
        rdDepartment: "應用日文系",
        rdExperience: "15年經歷",
        rdField: "3",
        rdJoinUs: "因為",
        rdPwd: "-",
        rdAgree: "Y",
        opened: "0",
        modifier: "-",
        created_at: "2023-01-07T15:05:31.000000Z",
        updated_at: "2023-01-07T15:05:31.000000Z",
      },
    ]);

    // console.log(JSON.parse(recordList));
    console.log("recordList", recordList);

    recordList.map((e) => {
      console.log("e", e);
      e.rdField = e.rdField.split(",");
      console.log("e.rdField", e.rdField);
    });

    let editForm = reactive([]);

    let pasteId = ref(0);

    function pasteData(params) {
      editForm.splice(0, 1);
      pasteId.value = params;
      let assign = recordList.filter((e) => e.rdId === params);
      console.log("assign", assign);
      editForm.push([...assign]);
    }

    return {
      moment,
      editForm,
      pasteData,
      recordList,
      loadingState,
    };
  },
};
</script>

<template>
  <div class="recruit-content">
    <!-- 讀取動畫 -->
    <!-- <div class="spinner-border text-secondary loading" role="status" v-if="loadingState">
            <span class="visually-hidden">Loading...</span>
        </div> 暫時隱藏 -->

    <table class="table main-table">
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
        <!-- <tr v-for="(item, index) in recordList[0]" :key="index"> 暫時隱藏 -->
        <tr v-for="(item, index) in recordList" :key="index">
          <!-- <td scope="row" valign="middle">{{ index + 1 }}</td> -->
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
              v-if="item.opened === '0'"
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

    <!-- 編輯使用者 Modal -->
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
          <!-- <div class="modal-footer justify-content-between">
            錯誤提示
            <div v-if="errMessage !== ''" class="text-danger">
              {{ errMessage }}
            </div>
            <div class="ms-auto">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal"
                id="editModalHide">取消</button>
              <button type="button" class="btn add-btn ms-2" @click="editUser()">確認</button>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.recruit-content {
  .main-table {
    tr {
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
}
</style>
