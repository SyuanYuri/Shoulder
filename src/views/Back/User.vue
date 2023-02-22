<script>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios';
import moment from 'moment';
axios.defaults.baseURL = 'http://localhost:8080/';
export default ({
  name: 'User',
  setup() {

    onMounted(() => {
      getUserData();
    })

    let loadingState = ref(true);
    let userList = reactive([]);
    let token = localStorage.getItem('token');
    // let modifier = localStorage.getItem('modifier');

    axios.defaults.headers.common.Authorization = token;

    /* 取得使用者 */
    function getUserData() {
      loadingState.value = true;
      axios({
        method: 'get',
        url: 'https://shouldersfoundationtw.org/framework/api/admin',
        responseType: 'json',
        headers: {
          Authorization: token
        }
      })
        .then((res) => {
          // 清空陣列後新增
          userList.splice(0);
          userList.push(res.data.response);
          loadingState.value = false;
        })
        .catch((error) => console.log(error));
    }

    let errMessage = ref("");
    let alertStatus = ref(false);
    let alertMessage = ref("");
    let userForm = reactive({
      usAccount: "",
      usPassword: "",
      modifier: ""
    });

    /* 新增使用者 */
    function addUser() {
      console.log('userForm',userForm);

      axios({
        method: 'post',
        url: 'https://shouldersfoundationtw.org/framework/api/admin',
        responseType: 'json',
        data: {
          usAccount: userForm.usAccount,
          usPassword: userForm.usPassword,
          modifier: userForm.modifier
        },
        headers: {
          Authorization: token
        }
      })
        .then((res) => {
          console.log('addUser', res);

          if (res.data.status) {
            alertStatus.value = true;
            alertMessage.value = "新增成功";
            errMessage.value = "";
            // 關閉新增視窗
            document.getElementById("modalHide").click();
            getUserData();
            setTimeout(() => {
              alertStatus.value = false;
            }, 5000)
          } else {
            errMessage.value = res.data.message;
          }
        })
        .catch((error) => {
          console.log('新增失敗', error);
        });
    }

    let editForm = reactive({
      usAccount: "",
      usPassword: "",
      modifier: ""
    });

    let pasteId = ref(0);

    function pasteData(params) {
      pasteId.value = params;
      let assign = userList[0].filter((e) => e.usId === params);
      editForm.modifier = assign[0].modifier;
      editForm.usAccount = assign[0].usAccount;
      editForm.usPassword = assign[0].usPassword;
    }

    /* 編輯使用者 */
    function editUser() {
      // axios.put(`https://shouldersfoundationtw.org/framework/api/admin/${pasteId.value}`, editForm)
      axios({
        method: 'put',
        url: `https://shouldersfoundationtw.org/framework/api/admin/${pasteId.value}`,
        responseType: 'json',
        data: editForm,
        headers: {
          Authorization: token
        }
      }).then((res) => {
        if (res.data.status) {
          alertStatus.value = true;
          alertMessage.value = "編輯成功";
          errMessage.value = "";
          // 關閉編輯視窗
          document.getElementById("editModalHide").click();
          getUserData();
          setTimeout(() => {
            alertStatus.value = false;
          }, 5000)
        } else {
          errMessage.value = res.data.message;
        }
      })
        .catch((error) => {
          console.log('編輯失敗', error);
        });
    }

    let deleteId = ref(0);

    function getDeleteId(params) {
      deleteId.value = params;
      console.log('deleteId.value = params;', deleteId.value);
    }

    /* 刪除使用者 */
    function deleteUser() {
      // axios.delete(`https://shouldersfoundationtw.org/framework/api/admin/${deleteId.value}`)
      axios({
        method: 'delete',
        url: `https://shouldersfoundationtw.org/framework/api/admin/${deleteId.value}`,
        responseType: 'json',
        headers: {
          Authorization: token
        }
      }).then((res) => {
        if (res.data.status) {
          alertStatus.value = true;
          alertMessage.value = "刪除成功";
          errMessage.value = "";
          // 關閉刪除視窗
          document.getElementById("deleteModalHide").click();
          getUserData();
          setTimeout(() => {
            alertStatus.value = false;
          }, 5000)
        } else {
          errMessage.value = res.data.message;
        }
      })
        .catch((error) => {
          console.log('刪除失敗', error);
        });
    }

    let eyeState = ref(true);

    // 密碼顯示切換
    function toggleEye() {
      eyeState.value = !eyeState.value;
      if (eyeState.value) {
        document.getElementById('editPassword').type = 'password';
        document.getElementById('inputPassword').type = 'password';
      } else {
        document.getElementById('editPassword').type = 'text';
        document.getElementById('inputPassword').type = 'text';
      }
    }

    function removeData(params) {
      console.log('params', params);
      userForm.usAccount = "";
      userForm.usPassword = "";
      userForm.modifier = "";
    }

    return {
      moment,
      userList,
      userForm,
      addUser,
      editUser,
      deleteUser,
      editForm,
      toggleEye,
      eyeState,
      alertStatus,
      alertMessage,
      pasteData,
      removeData,
      errMessage,
      loadingState,
      getDeleteId
    }
  },
})
</script>

<template>
  <div class="user-content">
    <!-- 讀取動畫 -->
    <div class="spinner-border text-secondary loading" role="status" v-if="loadingState">
      <span class="visually-hidden">Loading...</span>
    </div>

    <button id="addUser" class="ms-auto" data-bs-toggle="modal" data-bs-target="#addModal"
      @click="removeData('add')">新增使用者</button>
    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">名稱</th>
          <th scope="col">帳號</th>
          <th scope="col">新建日期</th>
          <th scope="col">最後更新</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in userList[0]" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.modifier }}</td>
          <td>{{ item.usAccount }}</td>
          <td>{{ moment(item.created_at).format("YYYY-MM-DD") }}</td>
          <td>{{ moment(item.updated_at).format("YYYY-MM-DD") }}</td>
          <td class="d-flex btn-box">
            <button id="editUser" class="ms-auto" data-bs-toggle="modal" data-bs-target="#editModal"
              @click="pasteData(item.usId)">編輯</button>
            <!-- <button>編輯</button> -->
            <button id="deleteUser" data-bs-toggle="modal" data-bs-target="#deleteModal"
              @click="getDeleteId(item.usId)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 新增使用者 Modal -->
    <div class="modal fade" id="addModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="addModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addModalLabel">新增使用者</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form class="row g-3">
              <div class="col-12">
                <label for="modifier" class="form-label">名稱</label>
                <input v-model="userForm.modifier" type="text" class="form-control" id="modifier">
              </div>
              <div class="col-6">
                <label for="inputEmai" class="form-label">帳號</label>
                <input v-model="userForm.usAccount" type="email" class="form-control" id="inputEmai">
              </div>
              <div class="col-6">
                <label for="inputPassword" class="form-label">密碼</label>
                <div class="position-relative">
                  <input v-model="userForm.usPassword" type="password" class="form-control" id="inputPassword">
                  <i class="fa-solid fa-eye eye" v-if="eyeState" @click="toggleEye"></i>
                  <i class="fa-solid fa-eye-slash eye" v-else @click="toggleEye"></i>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer justify-content-between">
            <!-- 錯誤提示 -->
            <div v-if="errMessage !== ''" class="text-danger">
              {{ errMessage }}
            </div>
            <div class="ms-auto">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" id="modalHide">取消</button>
              <button type="button" class="btn add-btn ms-2" @click="addUser()">新增</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 編輯使用者 Modal -->
    <div class="modal fade" id="editModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="editModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editModalLabel">編輯使用者</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form class="row g-3">
              <div class="col-12">
                <label for="modifier" class="form-label">名稱</label>
                <input v-model="editForm.modifier" type="text" class="form-control" id="modifier">
              </div>
              <div class="col-6">
                <label for="inputEmai" class="form-label">帳號</label>
                <input v-model="editForm.usAccount" type="email" class="form-control" id="inputEmai">
              </div>
              <div class="col-6">
                <label for="editPassword" class="form-label">密碼</label>
                <div class="position-relative">
                  <input v-model="editForm.usPassword" type="password" class="form-control" id="editPassword">
                  <i class="fa-solid fa-eye eye" v-if="eyeState" @click="toggleEye"></i>
                  <i class="fa-solid fa-eye-slash eye" v-else @click="toggleEye"></i>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer justify-content-between">
            <!-- 錯誤提示 -->
            <div v-if="errMessage !== ''" class="text-danger">
              {{ errMessage }}
            </div>
            <div class="ms-auto">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal"
                id="editModalHide">取消</button>
              <button type="button" class="btn add-btn ms-2" @click="editUser()">確認</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 刪除使用者 Modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            刪除後即無法復原，確定要刪除嗎？
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal"
              id="deleteModalHide">取消</button>
            <button type="button" class="btn btn-danger" @click="deleteUser()">刪除</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Alert -->
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
      </symbol>
    </svg>
    <div v-if="alertStatus" class="alert alert-success d-flex align-items-center" role="alert">
      <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
        <use xlink:href="#check-circle-fill" />
      </svg>
      <div>
        {{ alertMessage }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.user-content {
  display: flex;
  flex-direction: column;
  letter-spacing: 1px;

  th,
  td {
    padding-top: 13px;
  }

  #addUser {
    padding: 5px 20px;
    color: #fff;
    background-color: var(--bg-color);
    border: 2px solid transparent;
    border-radius: 5px;
    transition: all .3s;

    &:hover {
      color: var(--bg-color);
      background-color: #fff;
      border: 2px solid var(--bg-color);
    }
  }

  .eye {
    position: absolute;
    top: 50%;
    right: 15px;
    font-size: 13px;
    transform: translate(0, -50%);
    cursor: pointer;
  }

  .loading {
    position: absolute;
    top: 50%;
    left: 56%;
  }

  .add-btn {
    color: #fff;
    border: 1px solid var(--bg-color);
    background-color: var(--bg-color);
    transition: all .3s;

    &:hover {
      opacity: .8;
    }
  }

  .alert {
    position: fixed;
    right: 25px;
    bottom: 10px;
  }

  #editUser,
  #deleteUser {
    opacity: 1;
    transition: all .3s;

    &:hover {
      opacity: .7;
    }
  }
}
</style>