<template>
  <div class="sidebar">
    <ul>
      <li class="mb-4">
        <router-link to="/backstage/recruit">
          <i class="fa-solid fa-rectangle-list me-2"></i>
          志工履歷
        </router-link>
      </li>
      <li>
        <router-link to="/backstage/user">
          <i class="fa-solid fa-user"></i>
          使用者管理
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.sidebar {
  width: 200px;
  position: fixed;
  top: 0;
  bottom: 0;
  color: #8a8a8a;
  background-color: #fff;
  padding: 100px 40px 0;
  border-radius: 0 0 20px 0;

  ul {
    padding: 0;
    list-style: none;

    a {
      color: #8a8a8a;
      text-decoration: none;
      transition: all .3s;

      &:hover {
        color: var(--main-color);
      }
    }

    .fa-user {
      margin-left: 2px;
      margin-right: 9px;
    }
  }
}
</style>