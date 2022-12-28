
<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
:root {
  --main-color: #248bae;
  --sub-color: #f4c166;
  --bg-color: #4E7380;
  /* popper style */
  --popper-theme-background-color: #4E7380;
  --popper-theme-background-color-hover: #4E7380;
  --popper-theme-text-color: #ffffff;
  --popper-theme-border-width: 0px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 12px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}


#app {
  overflow: hidden;
  letter-spacing: 1px;
  font-family: 'Lato', sans-serif;
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

.underline {
  width: 100px;
  height: 3px;
  display: block;
  margin: 30px 0;
  background: linear-gradient(to left, var(--main-color) 50%, var(--sub-color) 50%);
}
</style>
