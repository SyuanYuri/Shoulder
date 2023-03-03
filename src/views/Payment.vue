<script setup>
import { ref, reactive, watch, onMounted } from "vue";
import { useStore } from "@/stores/index";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import router from "@/router";

const store = useStore();
let costVal = store.data.cost;
let costErr = ref(false);
let assignCost = ref(0);

function setCost(val, e) {
  store.data.cost = val;
  assignCost.value = val;
  let btn = document.querySelector(".active-btn");
  if (btn) {
    btn.classList.remove("active-btn");
  }
  e.target.classList.add("active-btn");
  store.data.cost = val;
}

function checkCost() {
  let input = document.querySelector("#donation-cost");
  let numbers = /^[0-9]*$/; // 任意數字
  let value = `${costVal}`;

  if (
    store.data.cost === 0 ||
    store.data.cost === "" ||
    value.match(numbers).input === ""
  ) {
    costErr.value = true;
  } else {
    costErr.value = false;
    router.push("/payment/info");
  }

  if (input.value === "" || input.value === 0 || input.value === "0") {
    costErr.value = true;
  } else if (input.value !== 0 || input.value !== "0") {
    costErr.value = false;
    router.push("/payment/info");
  }
}

watch(
  store.data,
  (state) => {
    console.log("state", state);
    costErr.value = false;

    let arr = [600, 1500, 3000, 5000];
    if (store.data.cost != assignCost.value) {
      let btn = document.querySelector(".active-btn");
      if (btn) {
        btn.classList.remove("active-btn");
      }
    }

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (store.data.cost == element) {
        let btn = document.getElementById(`${element}`);
        btn.classList.add("active-btn");
      }
    }
  },
  { deep: true }
);

onMounted(() => {
  console.log("onMounted", store.data.cost);
  let btn = document.getElementById(`${store.data.cost}`);
  if (btn) {
    btn.classList.add("active-btn");
  }
});
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

  <div class="container" id="period-block">
    <h3 class="title">{{ store.paymentMode }}</h3>

    <span class="line"></span>

    <div class="form-card">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/support"> 選擇捐款方式 </router-link>
          </li>
          <li class="breadcrumb-item active">選擇捐款金額</li>
        </ol>
      </nav>

      <h2 class="mt-4">
        選擇捐款金額
        {{
          store.data.cost !== "" && store.data.cost !== 0
            ? `NT$ ${store.data.cost}`
            : ""
        }}
      </h2>
      <hr class="my-4" />
      <div class="row chosen-btn">
        <div class="col-12 col-sm-6">
          <button @click="setCost(600, $event)" id="600">NT$600</button>
        </div>
        <div class="col-12 col-sm-6">
          <button @click="setCost(1500, $event)" id="1500">NT$1,500</button>
        </div>
        <div class="col-12 col-sm-6">
          <button @click="setCost(3000, $event)" id="3000">NT$3,000</button>
        </div>
        <div class="col-12 col-sm-6">
          <button @click="setCost(5000, $event)" id="5000">NT$5,000</button>
        </div>
      </div>

      <label for="donation-cost" class="form-label mt-4"
        >自行輸入捐款金額</label
      >
      <div class="input-group mb-1">
        <input
          type="number"
          class="form-control"
          id="donation-cost"
          v-model="store.data.cost"
          placeholder="請輸入台幣金額"
        />
      </div>
      <small v-show="costErr" class="text-danger">請輸入正確捐款金額</small>

      <!-- <p class="mt-3">
        定期定額捐款將於每個月的 25
        日進行扣款，若適逢例假日或國定假日，將順延至下個工作日扣款。
      </p> -->

      <div class="router-link mt-5">
        <a @click="$router.go(-1)">上一步</a>
        <a @click="checkCost()">下一步</a>
      </div>
    </div>
  </div>

  <router-view></router-view>

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

#period-block {
  max-width: 1050px;
  padding: 150px 30px;
  .title {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
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
    .breadcrumb {
      font-size: 14px;
      a {
        color: var(--bg-color);
      }
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
        padding: 8px 30px;
        border-radius: 5px;
        font-size: 1.3rem;
        font-weight: bold;
        text-decoration: none;
        transition: all 0.3s;
        cursor: pointer;
        &:first-child {
          color: var(--bg-color);
        }
        &:last-child {
          color: #fff;
          background-color: var(--bg-color);
        }
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
