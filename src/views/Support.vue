<script setup>
import { ref, reactive } from "vue";
import { useStore } from "@/stores/index";
import axios from "axios";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

const store = useStore();

function setPayment(name) {
  console.log("name", name);
  store.cost = 3000;
  store.payment_name = name;
}
</script>

<template>
  <Navbar />

  <div class="container" id="support-block">
    <h3 class="title">捐款支持</h3>
    <hr class="my-4" />
    <span class="line"></span>

    <section class="mt-1">
      <p class="fw-bold" style="color: #595757; font-size: 20px">
        邀請您，⼀同陪伴青少年運動選手走⼀哩路
      </p>
      <span class="underline"></span>
      <p>
        教育改變體育，改變從基礎教育與英文開始。我們深信青少年運動選手在培訓運動專長的同時應兼顧基本學科發展、品德教育與⼼理關懷。因此秀德教育基⾦會致⼒於幫助及改變青少年運動選手身心靈全面平衡發展。
      </p>
    </section>

    <div class="d-flex flex-column card-item">
      <router-link to="/period" @click="setPayment('定期定額捐款')">
        <section>
          <h2>定期定額捐款</h2>
          <small>捐款方式：信用卡</small>
          <p>
            改變需要時間，因此穩定可預測的收入是秀德教育基⾦會長期發展的關鍵基礎，邀請您透過每個月定期信用卡扣款，成為改變不平等的價值投資人。
          </p>
        </section>
        <i class="fa-regular fa-circle-right"></i>
      </router-link>

      <!-- <router-link to="/period" class="mt-4">
        <section>
          <h2>單筆支持捐款</h2>
          <small>捐款方式：信用卡 / LINE Pay / 超商繳款 / ATM 轉帳</small>
          <p>
            在教育現場，每個與孩子互動的瞬間都很重要。同樣的，不論金額，每一筆的支持對我們而言都是縮短我們與優質教育距離的助力。
          </p>
        </section>
        <i class="fa-regular fa-circle-right"></i>
      </router-link> -->
    </div>

    <div class="accordion mt-5" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            臺幣轉帳
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              請依下列資訊進行轉帳，完成後請填寫<a
                href="https://forms.gle/p5dqhrX55hGth1DLA"
                target="_blank"
                >捐款收據表單</a
              >，將會有專人與您聯繫。
            </p>

            <ul>
              <li><strong>戶名</strong>｜財團法人新北市秀德教育基金會</li>
              <li><strong>匯款銀行</strong>｜國泰世華銀行新樹分行 (013)</li>
              <li><strong>匯款帳戶</strong>｜104-03-5566767</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            非臺幣轉帳 <i class="fa-solid fa-hands-holding-dollar"></i>
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>請用以下資訊進行轉帳：</p>
            <ul>
              <li>
                <strong>Beneficiary’s Name</strong>｜Shoulders Education
                Foundation
              </li>
              <li>
                <strong>A/C with Bank</strong>｜CATHAY UNITED BANK, TAIPEI,
                TAIWAN（國泰世華商業銀行）
              </li>
              <li>
                <strong>A/C with Bank Address</strong>｜1F., NO. 7, SONGREN
                ROAD, TAIPEI CITY, 11073, TAIWAN （110 台北市信義區松仁路7號）
              </li>
              <li><strong>Account No.</strong>｜104-03-5566767</li>
              <li><strong>Swift Code</strong>｜UWCBTWTP</li>
              <li>
                <strong>Beneficiary’s Telephone No.</strong>｜+886-987-689-628,
                +886-972-285-177
              </li>
              <li>
                <strong>Email Address</strong
                >｜jamiesung@shouldersfoundationtw.org
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            郵政劃撥
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
            plugin adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div> -->
    </div>

    <!-- <div class="sef-item my-5 p-4 px-5">
      <section>
        <h5>瀏覽 SEF 「捐款名冊」</h5>
        <p class="m-0">查詢捐款紀錄（定期每個月 15 日更新）</p>
      </section>

      <a :href="`${publicPath}pdf-file/donateList.pdf`" download>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
          class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
        </svg>
      </a>
    </div> -->

    <p class="mt-4">
      若您為代表企業的夥伴，歡迎您來信至「<a
        href="mailto:jamiesung@shouldersfoundationtw.org"
        >jamiesung@shouldersfoundationtw.org</a
      >」，相關夥伴將與您接洽。
    </p>
  </div>

  <Footer />
</template>

<style lang="scss" scoped>
.navbar {
  background-image: none;
  background-color: var(--bg-color);
  box-shadow: 0px 0px 10px 0px #00000080;
}

#support-block {
  max-width: 1050px;
  padding: 150px 30px;

  .title {
    font-size: 24px;
    font-weight: bold;
  }

  .card-item {
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px 50px;
      background-color: var(--bg-color);
      transition: all 0.3s;
      border-radius: 5px;
      &:hover {
        opacity: 0.9;
        border-bottom: 1px solid transparent;
      }
      &:first-child {
        color: #fff;
        background-color: var(--bg-color);
      }
      &:last-child {
        color: var(--bg-color);
        background-color: var(--sub-color);
      }
    }
    section {
      h2 {
        font-size: 1.8rem;
        font-weight: bold;
      }
      p {
        margin: 0;
        max-width: 700px;
        font-weight: 400;
      }
      small {
        display: block;
        margin: 15px 0;
      }
    }
    i {
      font-size: 3rem;
    }
    i:first-child {
      color: #fff;
    }
  }
  .accordion-item {
    border: none !important;

    &,
    .accordion-button {
      background-color: #efefef;
    }

    .accordion-button::after {
      display: none;
    }

    .accordion-button::before {
      flex-shrink: 0;
      width: var(--bs-accordion-btn-icon-width);
      height: var(--bs-accordion-btn-icon-width);
      margin-right: 15px;
      content: "";
      background-image: var(--bs-accordion-btn-icon) !important;
      background-repeat: no-repeat;
      background-size: var(--bs-accordion-btn-icon-width);
      transition: var(--bs-accordion-btn-icon-transition);
    }

    .accordion-button:not(.collapsed) {
      color: #000 !important;

      &::before {
        background-image: var(--bs-accordion-btn-active-icon);
        transform: var(--bs-accordion-btn-icon-transform);
      }
    }

    .accordion-button:focus {
      box-shadow: none !important;
    }
  }

  a {
    font-weight: bold;
    color: var(--main-color);
    text-decoration: none;
    transition: border-color 0.3s ease;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid var(--main-color);
    }
  }

  ul {
    padding: 20px 50px;
    background: #fff;

    li {
      margin: 10px 0;
      font-size: 20px;
      font-weight: bold;
      word-break: break-word;

      @media (max-width: 767px) {
        font-size: 16px;
      }
    }
  }

  // .sef-item {
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   color: var(--bg-color);
  //   background-color: var(--sub-color);

  //   h5 {
  //     font-size: 22px;
  //     font-weight: bold;
  //   }

  //   p {
  //     font-weight: bold;
  //   }

  //   a {
  //     color: var(--bg-color);
  //     transition: all .3s;
  //     border: none;

  //     &:hover {
  //       opacity: .7;
  //       border: none;
  //     }

  //     svg {
  //       font-size: 50px;
  //     }
  //   }
  // }
}
</style>
