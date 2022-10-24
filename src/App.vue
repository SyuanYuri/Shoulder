<template>
  <Navbar />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <!-- <router-view></router-view> -->
  <Home />
  <Footer />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Navbar,
    Footer,
    Home
  }
}
</script>

<style lang="scss">
:root {
  --main-color: #248bae;
  --sub-color: #f4c166;
  --bg-color: #4E7380;
}

#app {
  overflow: hidden;
  letter-spacing: 1px;
  font-family: 'Noto Sans TC', sans-serif;
}

.banner {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: bottom;
  position: relative;
  z-index: -1;
  animation: scale 2.5s ease-in-out;

  @media (max-width: 991px) {
    height: 70vw;
  }
}

@keyframes scale {
  0% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}


/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
