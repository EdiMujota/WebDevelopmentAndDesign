<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <div class="container-fluid">
      <router-link to="/dashboard" class="link-light"
        ><h2>Administrator</h2></router-link
      >
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarCenteredExample"
      >
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              to="/navbaradmin"
              class="nav-link active text-light"
              aria-current="page"
              >Navbar</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/slideshowadmin"
              class="nav-link active text-light"
              aria-current="page"
              >Slide-show</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="#"
              class="nav-link active text-light"
              aria-current="page"
              >Products</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="#"
              class="nav-link active text-light"
              aria-current="page"
              >Outlet</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="#"
              class="nav-link active text-light"
              aria-current="page"
              >bNE</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div></div>
</template>
<script>
export default {
  data: function () {
    return {};
  },
};
</script>

<style scoped>
.nav-link {
  font-size: 1.3rem;
  border-radius: 2rem;
  margin-right: 2rem;
  transition: 0.5s;
}
.nav-link:hover {
  background-color: white;
  color: rgb(97, 97, 97) !important;
  border-radius: 1rem;
}
</style>
