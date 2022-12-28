<script></script>

<template>
  <footer class="container-fluid p-0">
    <div class="row justify-content-center align-items-center px-4">
      <div class="col-md-12 col-lg-4 col-xl-5 d-flex justify-content-center mb-5 mb-lg-0">
        <img src="../assets/logo-text.png" alt="" class="logo">
      </div>
      <div class="col-md-7 col-lg-6 col-xl-5 info">
        <span>Contact</span>
        <ul>
          <li class="d-flex">
            <i class="fa-solid fa-house"></i>
            <p class="m-0">22063 新北市板橋區四川路一段23號9樓之1</p>
          </li>
          <li class="d-flex mt-2">
            <i class="fa-solid fa-envelope mt-1"></i>
            <a href="mailto:sef@shouldersfoundationtw.org">sef@shouldersfoundationtw.org</a>
          </li>
        </ul>
      </div>
      <div class="col-md-3 col-lg-2">
        <span>Follow Us</span>
        <ul class="d-flex media">
          <li>
            <a href="https://www.facebook.com/shouldersfoundationtw" target="_blank">
              <i class="fa-brands fa-square-facebook"></i>
            </a>
          </li>
          <li>
            <a href="line://ti/p/@122szlzg" target="_blank">
              <i class="fa-brands fa-line"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/shouldersfoundationtw?igshid=YmMyMTA2M2Y=" target="_blank">
              <i class="fa-brands fa-square-instagram"></i>
            </a>
          </li>
        </ul>
        <p class="sub-title">新北教社字第 1112012298</p>
      </div>
    </div>
    <h5 class="copyright">
      Copyright © 2022 Shoulders Foundation. All rights reserved
    </h5>
  </footer>
</template>

<style lang="scss">
footer {
  color: #fff;
  letter-spacing: 2px;
  background-color: var(--bg-color);

  .logo {
    width: 60%;

    @media (max-width: 1200px) {
      width: 90%;
    }

    @media (max-width: 991px) {
      width: 50%;
    }

    @media (max-width: 575px) {
      width: 70%;
    }
  }

  .row {
    padding: 70px 0;

    ul {
      padding: 0;
      list-style: none;

      i {
        margin-right: 10px;
        font-size: 20px;
        color: #fff;
      }

      a {
        color: #fff;
        text-decoration: none;
        transition: all .3s;
        @media (max-width: 414px) {
          font-size: 14px;
        }
        &:hover {
          opacity: .8;
        }
      }

      p {
        @media (max-width: 414px) {
          font-size: 14px;
        }
      }

    }

    .media {
      @media (max-width: 767px) {
        justify-content: center;
      }

      i {
        margin-right: 15px;
        font-size: 40px;
        color: var(--sub-color);

        &:hover {
          opacity: .8;
        }

      }
    }

    .info {
      @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
      }
    }

    span {
      display: block;
      font-size: 33px;
      font-weight: 100;
      margin-bottom: 20px;

      @media (max-width: 767px) {
        text-align: center;
      }
    }
  }

  .sub-title {
    @media (max-width: 767px) {
      text-align: center;
    }
  }

  .copyright {
    margin: 0;
    padding: 10px;
    text-align: center;
    font-size: 16px;
    color: var(--bg-color);
    background-color: var(--sub-color);
    letter-spacing: 1px;

    @media (max-width: 414px) {
      font-size: 14px;
    }
  }
}
</style>