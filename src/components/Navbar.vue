<script>
import { ref, onMounted } from "vue";
import router from "@/router";
export default {
  name: "Navbar",
  setup() {
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    let scrollState = ref(false);

    function handleScroll() {
      if (window.scrollY > 0) {
        scrollState.value = true;
      } else {
        scrollState.value = false;
      }
    }

    function setScroll(block) {
      if (window.location.hash.includes("recruit")) {
        router.push({ path: "/", hash: `#${block}` });
      } else {
        let element = document.querySelector(`#${block}`);
        window.scrollTo(0, element.offsetTop - 70);
      }
    }

    function setLang(lang) {
      console.log("reload");
      console.log("lang", lang);
      localStorage.setItem("language", lang);
      window.location.reload();
    }

    return {
      scrollState,
      setLang,
      setScroll,
    };
  },
};
</script>

<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark px-3 position-fixed"
    :class="scrollState ? 'navbar-bg' : ''"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <h1>Shoulders 秀德教育基金會</h1>
        <!-- <img src="../assets/logo-text.png" alt="" class="logo-img"> -->
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
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link"
              href="javascript:;"
              @click="setScroll('center-block')"
              >我們的宗旨</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="javascript:;"
              @click="setScroll('team-block')"
              >我們的團隊</a
            >
          </li>

          <!-- <li class="nav-item">
            <router-link to="/recruit" class="nav-link">成為志工</router-link>
          </li> -->

          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              {{ $t("navbar.language") }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#" @click="setLang('en-US')">English</a></li>
              <li><a class="dropdown-item" href="#" @click="setLang('zh-TW')">繁體中文</a></li>
            </ul>
          </li> -->
        </ul>
        <!-- <router-link to="/support" class="dark-btn ms-0 ms-lg-3"
          >捐款支持</router-link
        > -->
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 0.3s;
  background-image: linear-gradient(to bottom, #656565, transparent 100%);

  h1 {
    margin: 0;
    width: 180px;
    height: 45px;
    text-indent: 101%;
    white-space: nowrap;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(../assets/logo-text.png);
  }

  .nav-link {
    position: relative;
    margin: 0 10px;
    color: #fff !important;

    &::before {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background-color: #fff;
      position: absolute;
      right: 0;
      bottom: 2px;
      transition: 0.4s;
    }

    &:hover::before {
      width: 100%;
      left: 0;
    }

    .navbar-toggler:focus {
      box-shadow: none !important;
    }
  }

  .dropdown-menu {
    min-width: 10px;
    margin: 10px !important;

    .dropdown-item.active,
    .dropdown-item:active {
      color: #fff;
      text-decoration: none;
      background-color: var(--main-color);
    }
  }

  .logo-img {
    width: 210px;

    @media (max-width: 575px) {
      width: 180px;
      top: 12px;
      left: 20px;
    }
  }
}

// scrollY > 0
.navbar-bg {
  background-image: none;
  background-color: var(--bg-color);
  box-shadow: 0px 0px 10px 0px #00000080;

  // .nav-link {
  //   color: var(--main-color) !important;

  //   &::after {
  //     background-color: var(--main-color);
  //   }
  // }

  // .navbar-toggler-icon {
  //   filter: invert(20%) sepia(150%) saturate(500%) hue-rotate(140deg) brightness(60%) contrast(75%);
  // }

  // .dark-btn {
  //   color: #1f718c;
  //   font-weight: bold;
  //   background: var(--sub-color);
  //   border: 2px solid transparent;

  //   &:hover {
  //     color: #1f718c;
  //     background: #DBAD5B;
  //     border: 2px solid #DBAD5B;
  //   }
  // }
}

.dark-btn {
  color: #1f718c;
  font-weight: bold;
  background: var(--sub-color);
  border: 2px solid transparent;

  &:hover {
    color: #1f718c;
    background: #dbad5b;
    border: 2px solid #dbad5b;
  }
}

.dark-btn,
.light-btn {
  padding: 7px 70px;
  display: inline-block;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s;
}

// .dark-btn {
//   color: #fff;
//   font-weight: bold;
//   background: var(--main-color);
//   border: 2px solid transparent;

//   &:hover {
//     color: #fff;
//     background: #1f718c;
//     border: 2px solid #1f718c;
//   }
// }

.light-btn {
  color: #fff;
  background: transparent;
  border: 2px solid #fff;

  &:hover {
    color: var(--main-color);
    background: transparent;
    border: 2px solid var(--main-color);
  }
}
</style>
