<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <ul class="navbar-nav d-flex justify-content-around">
      <li class="nav-item">
        <router-link to="/" class="nav-link text-light">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/aboutus" class="nav-link text-light"
          >About us</router-link
        >
      </li>
      <li class="nav-item">
        <router-link to="/contactus" class="nav-link text-light"
          >Contact us</router-link
        >
      </li>

      <li class="nav-item dropdown">
        <router-link
          to=""
          class="nav-link dropdown-toggle text-light"
          id="navbardrop"
          data-toggle="dropdown"
        >
          Products
        </router-link>
        <div class="dropdown-menu">
          <router-link to="" class="dropdown-item">Computer</router-link>
          <router-link to="" class="dropdown-item">Laptop</router-link>
          <router-link to="" class="dropdown-item">Phone</router-link>
          <router-link to="" class="dropdown-item">TV</router-link>
        </div>
      </li>
      <li class="nav-item">
        <router-link to="" class="nav-link text-danger">Outlet</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data: function () {
    return {};
  },
};
</script>
<style scoped>
ul {
  margin-left: 24rem;
  display: flex;
  flex: space-between;
}
li {
  margin-left: 30px;
}
</style>
