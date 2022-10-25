<script>
import { ref, onMounted } from 'vue'
export default ({
  name: 'Navbar',
  setup() {
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    })

    let scrollState = ref(false);

    function handleScroll() {
      if (window.scrollY > 0) {
        scrollState.value = true;
      } else {
        scrollState.value = false;
      }
    }

    function setScroll(block) {
      let element = document.querySelector(`#${block}`);
      window.scrollTo(0, element.offsetTop - 70);
    }

    return {
      scrollState,
      setScroll
    }
  },
})
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark px-3 py-3 position-fixed" :class="scrollState ? 'navbar-bg' : ''">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo.png" alt="" class="logo-img">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" style="color: #000;"></span>
      </button>
      <div class="collapse navbar-collapse pt-3 py-lg-0" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="javascript:;" @click="setScroll('center-block')">我們的宗旨</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:;" @click="setScroll('team-block')">我們的團隊</a>
          </li>

          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              語言
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">English</a></li>
              <li><a class="dropdown-item" href="#">繁體中文</a></li>
            </ul>
          </li> -->
          
          <!-- <li class="nav-item">
            <router-link to="/recruit" class="nav-link">成為志工</router-link>
          </li> -->
        </ul>
        <a href="#" class="dark-btn ms-0 ms-lg-3">
          捐款支持 v1.0
        </a>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  left: 0;
  right: 0;
  z-index: 100;
  transition: all .3s;
  background-image: linear-gradient(to bottom, #656565, transparent 100%);

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
      transition: .4s;
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
    width: 75px;
    position: absolute;
    top: 3px;
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

  .dark-btn {
    color: #1f718c;
    background: var(--sub-color);
    border: 2px solid transparent;

    &:hover {
      color: #1f718c;
      background: #DBAD5B;
      border: 2px solid #DBAD5B;
    }
  }
}

.dark-btn,
.light-btn {
  padding: 7px 70px;
  display: inline-block;
  text-decoration: none;
  border-radius: 100px;
  transition: all .3s;
}

.dark-btn {
  color: #fff;
  background: var(--main-color);
  border: 2px solid transparent;

  &:hover {
    color: #fff;
    background: #1f718c;
    border: 2px solid #1f718c;
  }
}

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