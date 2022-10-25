<script></script>

<template>
  <footer class="container-fluid p-0">
    <div class="row">
      <div class="col-6">

      </div>
      <div class="col-4">
        <span>Contact</span>
        <ul>
          <li class="d-flex">
            <i class="fa-solid fa-house"></i>
            <p class="m-0">22063 新北市板橋區四川路一段23號9樓之1</p>
          </li>
          <li class="d-flex mt-2">
            <i class="fa-solid fa-envelope mt-1"></i>
            <p class="m-0">&nbsp;jamiesung@shouldersfoundationtw.org</p>
          </li>
        </ul>
      </div>
      <div class="col-2">
        <span>Follow Us</span>
        <ul class="d-flex media">
          <li>
            <a href="https://www.facebook.com/shouldersfoundationtw">
              <i class="fa-brands fa-square-facebook"></i>
            </a>
          </li>
          <li>
            <a href="line://ti/p/@122szlzg">
              <i class="fa-brands fa-line"></i>
            </a>
          </li>
        </ul>
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

    }

    .media {
      i {
        margin-right: 15px;
        font-size: 40px;
        color: var(--sub-color);

        &:hover {
          opacity: .8;
        }
      }
    }

    span {
      display: block;
      font-size: 33px;
      font-weight: 100;
      margin-bottom: 20px;
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
  }
}
</style>