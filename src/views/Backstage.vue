<script>
import Sidebar from "@/components/Sidebar.vue";
import BackNavbar from "@/components/BackNavbar.vue";

export default {
  name: "Backstage",
  components: {
    Sidebar,
    BackNavbar,
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <div>
    <BackNavbar />
    <div class="d-none d-lg-block">
      <Sidebar />
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
html {
  background-color: #f4f4f4;
}
.content {
  padding: 40px;
  margin-left: 200px;
  background: #f4f4f4;
  @media (max-width: 991px) {
    padding: 0;
    margin-left: 0;
  }
}
.user-content,
.recruit-content {
  padding: 50px;
  display: flex;
  justify-content: center;
  background: #fff;
  border-radius: 5px;
}
</style>
