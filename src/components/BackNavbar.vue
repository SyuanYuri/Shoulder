<script>
import { ref, reactive, onMounted } from "vue";
export default {
  name: "BackNavbar",
  setup() {
    let userName = localStorage.getItem("modifier");
    console.log("userName", userName);
    return {
      userName,
    };
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="../assets/logo-text.png" alt="" class="logo-img" />
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
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link d-flex name-item"
              aria-current="page"
              href="javascript:;"
            >
              <i class="fa-solid fa-circle-user me-2"></i>
              {{ userName }}，您好！
            </a>
          </li>
          <li class="nav-item d-block d-lg-none">
            <router-link to="/backstage/recruit" class="nav-link">
              志工履歷
            </router-link>
          </li>
          <li class="nav-item d-block d-lg-none">
            <router-link to="/backstage/user" class="nav-link">
              使用者管理
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link logout-btn" href="#">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  z-index: 100;
  background-color: #fff;
  background-image: none;

  .collapse {
    flex-grow: initial;
  }

  .logo-img {
    width: 210px;
  }

  .fa-circle-user {
    margin-top: -2px;
    font-size: 25px;
  }

  .name-item {
    cursor: default;
    &:hover {
      opacity: 1 !important;
    }
  }

  .nav-link {
    color: #333 !important;
  }

  .nav-link,
  .logout-btn {
    transition: all 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
