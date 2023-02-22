<script>
import { ref, reactive } from 'vue'
import axios from 'axios';
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default ({
  name: 'Recruit',
  components: {
    Navbar,
    Footer
  },

  setup() {
    let fullName = reactive({
      lastName: "",
      firstName: ""
    })

    let isSuccess = ref(false);
    let confirmEmail = ref("");
    let errorMsg = ref("");
    let rdField = reactive({
      list: []
    });

    let recordForm = reactive({
      rdName: "",
      rdCitizenship: "",
      rdAge: 0,
      rdCellPhone: "",
      rdEmail: "",
      rdAcademic: "",
      rdDepartment: "",
      rdExperience: "",
      rdField: [],
      rdJoinUs: "",
      rdPwd: "-",
      rdAgree: "",
      modifier: "-",
      opened: 0 // 是否開啟履歷
    });

    function postForm() {
      recordForm.rdAgree ? recordForm.rdAgree = "Y" : recordForm.rdAgree = "N";
      recordForm.rdName = fullName.lastName + fullName.firstName;
      recordForm.rdField = recordForm.rdField.toString();

      if (confirmEmail.value !== recordForm.rdEmail) {
        errorMsg.value = "電子郵件欄位輸入不一致，請再次確認。"
      } else {
        errorMsg.value = "";

        axios.post('https://shouldersfoundationtw.org/framework/api/record', recordForm)
          .then((res) => {
            console.log('申請成功', res);
            isSuccess.value = true;

            setTimeout(() => {
              isSuccess.value = false;
            }, 3000)
          })
          .catch((error) => {
            console.log('申請失敗', error);
          });
      }
    }

    return {
      fullName,
      recordForm,
      confirmEmail,
      errorMsg,
      rdField,
      isSuccess,
      postForm
    }
  },
})
</script>

<template>
  <Navbar />

  <div class="container recruit-content">
    <h3>成為志工</h3>
    <span class="line"></span>
    <h4>讓改變從你我開始</h4>
    <span class="underline"></span>
    <p>成為 SEF 的志⼯將可以直接投入您有熱情的領域，透過直接地參與，希望您可以更加了解青少年體育選⼿的樣貌，也期待您可以在 SEF 深度的探索⾃⼰，創造改變的開始。</p>

    <div class="form-box">
      <div class="row d-flex flex-lg-row flex-column-reverse">
        <div class="col-12 col-lg-6 px-5 py-4">
          <form class="row g-3" @submit="postForm">
            <div class="col-12">
              <label for="lastName" class="form-label">姓氏</label>
              <input v-model="fullName.lastName" type="text" class="form-control" id="lastName" required>
            </div>
            <div class="col-12">
              <label for="firstName" class="form-label">名字</label>
              <input v-model="fullName.firstName" type="text" class="form-control" id="firstName" required>
            </div>
            <div class="col-12">
              <label for="cellPhone" class="form-label">手機號碼</label>
              <input v-model="recordForm.rdCellPhone" type="tel" class="form-control" id="cellPhone" pattern="09\d{8}"
                placeholder="ex. 0912345678" required>
            </div>
            <div class="col-6">
              <label for="country" class="form-label">國籍</label>
              <input v-model="recordForm.rdCitizenship" type="text" class="form-control" id="country" required>
            </div>
            <div class="col-6">
              <label for="age" class="form-label">年齡</label>
              <input v-model="recordForm.rdAge" type="number" class="form-control" id="age" required>
            </div>
            <div class="col-12">
              <label for="email" class="form-label">電子郵件</label>
              <input v-model="recordForm.rdEmail" type="email" class="form-control" id="email" required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
              <small class="d-block mt-2">（請留意，此註冊Email將作為主要溝通方式，請確認填寫正確且可順利收發。）</small>
            </div>
            <div class="col-12">
              <label for="emailConfirm" class="form-label">再次輸入電子郵件</label>
              <input v-model="confirmEmail" type="email" class="form-control" id="emailConfirm" required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
            </div>
            <div class="col-6">
              <label for="academic" class="form-label">最高學歷</label>
              <select v-model="recordForm.rdAcademic" id="academic" class="form-select" required>
                <option selected>請選擇</option>
                <option>高中/職(含)以下</option>
                <option>專科</option>
                <option>大學</option>
                <option>碩士</option>
                <option>博士</option>
              </select>
            </div>
            <div class="col-6">
              <label for="department" class="form-label">最高學歷科系</label>
              <input v-model="recordForm.rdDepartment" type="text" class="form-control" id="department" required>
            </div>
            <div class="col-12">
              <label for="experience" class="form-label">經歷</label>
              <input v-model="recordForm.rdExperience" type="text" class="form-control" id="experience" required>
            </div>
            <div class="col-12">
              <label for="times" class="form-label">希望投入領域 <small>（可多選）</small> </label>
              <!-- <input v-model="recordForm.rdTimes" type="text" class="form-control" id="times" required> -->
              <div class="form-check">
                <input v-model="recordForm.rdField" class="form-check-input" type="checkbox" value="1" id="field-1">
                <label class="form-check-label" for="field-1">
                  課業輔導組
                </label>
              </div>
              <div class="form-check">
                <input v-model="recordForm.rdField" class="form-check-input" type="checkbox" value="2" id="field-2"
                  checked>
                <label class="form-check-label" for="field-2">
                  關懷陪伴組
                </label>
              </div>
              <div class="form-check">
                <input v-model="recordForm.rdField" class="form-check-input" type="checkbox" value="3" id="field-3"
                  checked>
                <label class="form-check-label" for="field-3">
                  英文口說組
                </label>
              </div>
              <div class="form-check">
                <input v-model="recordForm.rdField" class="form-check-input" type="checkbox" value="4" id="field-4"
                  checked>
                <label class="form-check-label" for="field-4">
                  內部行政組
                </label>
              </div>
            </div>
            <div class="col-12">
              <label for="joinUs" class="form-label">為什麼會想要加入我們？
              </label>
              <input v-model="recordForm.rdJoinUs" type="text" class="form-control" id="joinUs" required>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input v-model="recordForm.rdAgree" class="form-check-input" type="checkbox" id="agree">
                <label class="form-check-label" for="agree">
                  是否同意<a href="https://drive.google.com/file/d/1a6JEJaOYatUIe1UfX5HZ-Jtasvw1XCQj/view?usp=sharing" target="_blank">個資蒐集同意書</a>
                </label>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary w-100">送出</button>
              <strong>{{ errorMsg }}</strong>
            </div>
          </form>
        </div>
        <div class="col-12 col-lg-6">
          <img src="../assets/recruit-banner.jpg" alt="" class="img-fluid">
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </symbol>
      </svg>
      <div :class="{ alertShow: isSuccess }" class="alert alert-success d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
          <use xlink:href="#check-circle-fill" />
        </svg>
        <div>
          申請成功！
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<style lang="scss" scoped>
.navbar {
  background-image: none;
  background-color: var(--bg-color);
  box-shadow: 0px 0px 10px 0px #00000080;
}

.recruit-content {
  margin: 150px auto;
  padding: 0 100px;

  @media (max-width: 1200px) {
    padding: 0 20px;
  }

  h3 {
    font-weight: bold;
  }

  h4 {
    font-size: 20px;
    font-weight: bold;
  }

  img {
    height: 100%;
    object-fit: cover;
    border-radius: 0 10px 10px 0;

    @media (max-width: 991px) {
      width: 100%;
      height: 300px;
      border-radius: 10px 10px 0 0;
    }
  }

  .line {
    display: block;
    width: 100%;
    height: 1px;
    margin: 30px 0;
    background: #cacaca;
  }

  small {
    color: #585858;
  }

  .form-box {
    margin: 50px auto;
    border-radius: 10px;
    background-color: #EFEFEF;

    .form-control:focus {
      // color: var(--main-color);
      background-color: #fff;
      border-color: var(--main-color);
      outline: 0;
      box-shadow: none;
    }

    .btn-primary {
      border: none;
      background-color: var(--bg-color);
      transition: all .3s;

      &:hover {
        opacity: .9;
      }
    }

    strong {
      margin-top: 10px;
      display: block;
      color: #ef2828;
    }

    .form-check {
      label {
        margin: 3px 0 5px 5px;
        a {
          color: var(--bg-color);
        }
      }

      .form-check-input {
        width: 20px;
        height: 20px;
        cursor: pointer;

        &:checked {
          background-color: var(--bg-color);
          border-color: var(--bg-color);
        }

        &:focus {
          box-shadow: none;
        }

      }
    }

    .alert {
      opacity: 0;
      transition: all .3s;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .alertShow {
      opacity: 1;
    }
  }
}
</style>
