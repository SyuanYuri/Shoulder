<script setup>
import { ref, reactive } from "vue";
import axios from "axios";
import router from "@/router";

// axios.defaults.baseURL = "http://127.0.0.1:8000/api"; // 測試
axios.defaults.baseURL = "https://shouldersfoundationtw.org/framework/api";

let loginForm = reactive({
  usAccount: "",
  usPassword: "",
});

let loginStatus = ref(false);
let loginMessage = ref("");

// 登入
function handleLogin() {
  axios
    .post("/login", {
      usAccount: loginForm.usAccount,
      usPassword: loginForm.usPassword,
    })
    .then((res) => {
      if (res.data.status) {
        loginStatus.value = true;
        loginMessage.value = "";

        // token 儲存至 localStorage
        let usToken = res.data.response.usToken;
        let modifier = res.data.response.modifier;
        localStorage.setItem("token", usToken);
        localStorage.setItem("modifier", modifier);

        setTimeout(() => {
          router.push({ path: "/backstage/recruit" });
        }, 500);
      } else {
        loginStatus.value = false;
        loginMessage.value = res.data.message;
      }
    })
    .catch((error) => {
      console.log("登入失敗", error);
    });
}
</script>

<template>
  <div id="login">
    <a href="/">
      <img src="@/assets/logo-text-blue.png" alt="" />
    </a>
    <div class="content">
      <h2 class="my-3">Login</h2>
      <span class="underline"></span>
      <form action="">
        <div class="input-group my-3">
          <span class="input-group-text" id="usAccount">
            <i class="fa-solid fa-user"></i>
          </span>
          <input
            v-model="loginForm.usAccount"
            type="text"
            class="form-control"
            placeholder="account"
            aria-label="usAccount"
            aria-describedby="usAccount"
            required
          />
        </div>
        <div class="input-group">
          <span class="input-group-text" id="usPassword">
            <i class="fa-solid fa-lock"></i>
          </span>
          <input
            v-model="loginForm.usPassword"
            type="password"
            class="form-control"
            placeholder="password"
            aria-label="usPassword"
            aria-describedby="usPassword"
            required
          />
        </div>
        <!-- 錯誤訊息 -->
        <small class="mt-2 text-danger d-block" style="height: 25px">
          {{ loginMessage }}
        </small>
        <button type="submit" @click="handleLogin" class="mt-3">Sign in</button>
      </form>
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
      v-if="loginStatus"
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
      <div>登入成功</div>
    </div>
  </div>
</template>

<style lang="scss">
#login {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: whitesmoke;

  img {
    width: 250px;
    height: auto;
    object-fit: contain;
    margin: 20px auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 350px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 3px 3px 15px #b8b8b8;
    padding: 15px 40px;
    background: linear-gradient(#fff, #fff) padding-box,
      linear-gradient(to left, var(--main-color) 50%, var(--sub-color) 50%)
        border-box;
    border-top: 5px solid transparent;

    h2 {
      text-align: center;
      font-weight: 200;
      font-size: 2em;
      color: var(--main-color);
    }

    button {
      width: 100%;
      margin-bottom: 25px;
      height: 40px;
      border-radius: 5px;
      outline: 0;
    }

    // input[type="text"],
    // input[type="usPassword"] {
    //   border: 1px solid #bbb;
    //   padding: 0 0 0 10px;
    //   font-size: 14px;

    //   &:focus {
    //     border: 1px solid #3498db;
    //   }
    // }

    button {
      background: var(--main-color);
      border: none;
      color: #fff;
      font-size: 18px;
      font-weight: 200;
      cursor: pointer;
      letter-spacing: 1px;
      transition: all 0.3s;

      &:hover {
        color: #fff;
        background: #1f718c;
      }
    }
  }

  .alert {
    position: absolute;
    top: 3%;
    right: 3%;
    z-index: 100;
    transition: all 0.3s;
  }
}
</style>
