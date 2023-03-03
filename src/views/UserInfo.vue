<script setup>
import { ref, reactive, watch } from "vue";
import { useStore } from "@/stores/index";
import { storeToRefs } from "pinia";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import router from "@/router/index";

const store = useStore();
const { alert } = storeToRefs(store);

let date = new Date();
let dataValues = [
  date.getFullYear(),
  date.getMonth() + 1,
  date.getDate(),
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];

let d = new Date();
let n = d.getMilliseconds(); // 毫秒
let timestamp = `${dataValues.join("")}${n}`; // 時間戳

function handleSubmit() {
  store.loadingState = true;
  store.data.user_id = timestamp;
  store.data.order_id = timestamp;
  store.data.echo_0 = store.data.user_email;
  store.data.items[0].cost = store.data.cost;
  store.data.items[0].total = store.data.cost;
  store.payment();
}

function back() {
  // document.getElementById("form").reset();
  router.go(-1);
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark px-3 position-fixed">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <h1>Shoulders 秀德教育基金會</h1>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" style="color: #000"></span>
      </button>
      <div
        class="collapse navbar-collapse pt-3 py-lg-0"
        id="navbarSupportedContent"
      >
        <section class="header-info">
          <h3>捐款支持</h3>
          <p>感謝您願意支持秀德教育基金會</p>
        </section>

        <router-link to="/support" class="dark-btn ms-0 ms-lg-3">
          <i class="fa-solid fa-chevron-left"></i>
          返回捐款頁面
        </router-link>
      </div>
    </div>
  </nav>

  <div class="container" id="payment-block">
    <h3 class="title">{{ store.paymentMode }}</h3>

    <span class="line"></span>

    <div class="form-card">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/support"> 選擇捐款方式 </router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/payment"> 選擇捐款金額 </router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            填寫捐款人資料
          </li>
        </ol>
      </nav>

      <h2 class="mt-4">填寫捐款人資料</h2>
      <hr class="my-4" />
      <div
        class="d-flex justify-content-center loading"
        v-if="store.loadingState"
      >
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div
        class="alert"
        :class="[store.alert.state ? 'alert-success' : 'alert-danger']"
        role="alert"
        v-if="store.alert.show"
      >
        <section class="d-flex align-items">
          <span> {{ store.alert.msg }}</span>
          <button
            type="button"
            class="btn-close btn-sm ms-2"
            @click="store.alert.show = false"
          ></button>
        </section>
      </div>

      <form class="row g-3" id="form" @submit.prevent="handleSubmit()">
        <label for="user_name" class="form-label">聯絡人姓名</label>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            id="user_name"
            v-model="store.data.user_name"
            required
          />
        </div>

        <label for="basic-url" class="form-label mb-0">稱謂</label>
        <div class="form-check ms-2">
          <input
            type="radio"
            class="form-check-input"
            id="man"
            v-model="store.data.echo_1"
            value="先生"
          />
          <label class="form-check-label" for="man">先生</label>
        </div>
        <div class="form-check ms-2 mb-3">
          <input
            type="radio"
            class="form-check-input"
            id="miss"
            v-model="store.data.echo_1"
            value="女士"
          />
          <label class="form-check-label" for="miss">女士</label>
        </div>

        <label for="basic-url" class="form-label mb-0">Email</label>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            v-model="store.data.user_email"
            required
          />
        </div>

        <label for="basic-url" class="form-label">手機號碼</label>
        <div class="input-group mb-3">
          <input
            type="tel"
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            v-model="store.data.user_cellphone"
            required
          />
        </div>
        <p class="m-0">感謝您的捐款支持，專人將會在 48 小時內透過電話與您確認捐款收據資料。</p>

        <div class="router-link mt-5">
          <a @click="back()">上一步</a>
          <button type="submit">下一步</button>
        </div>
      </form>
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
.header-info {
  color: #fff;
  margin: auto;
  h3 {
    font-weight: bold;
    margin: 5px 0;
  }
  p {
    margin-bottom: 0;
  }
}

.alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}

.loading {
  position: fixed;
  left: 50%;
  z-index: 1;
}

.breadcrumb {
  font-size: 14px;
  a {
    color: var(--bg-color);
  }
}

#payment-block {
  max-width: 1050px;
  padding: 150px 30px;
  .title {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }

  .sub-text {
    color: #929292;
  }
  .form-card {
    padding: 30px;
    margin-top: 30px;
    border: 1px solid #f3f3f3;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 14px #e6e6e680;
    h2 {
      font-size: 26px;
      font-weight: bold;
    }
    .chosen-btn {
      button {
        width: 100%;
        color: #fff;
        border: none;
        background-color: #c5c5c5a0;
        border-radius: 5px;
        padding: 10px 20px;
        margin: 10px;
        font-size: 1.5rem;
        font-weight: bold;
        letter-spacing: 2px;
        transition: all 0.3s;
        &:hover {
          color: var(--bg-color);
          background-color: var(--sub-color);
        }
      }
      .active-btn {
        color: var(--bg-color);
        background-color: var(--sub-color);
      }
    }
    .form-label {
      font-size: 1.3rem;
      font-weight: bold;
    }

    .router-link {
      display: flex;
      justify-content: space-between;
      a {
        color: var(--bg-color);
        border: 2px solid var(--bg-color);
      }
      a,
      button {
        padding: 8px 30px;
        border-radius: 5px;
        font-size: 1.3rem;
        font-weight: bold;
        text-decoration: none;
        transition: all 0.3s;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }
      button {
        color: #fff;
        border: none;
        background-color: var(--bg-color);
      }
    }
  }
}
</style>
