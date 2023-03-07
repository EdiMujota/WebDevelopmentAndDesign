<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <div class="container-fluid">
      <router-link to="/dashboard" class="link-light text-decoration-none"
        ><h3>Administrator</h3></router-link
      >
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarCenteredExample"
      >
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              to="/createcomputers"
              class="nav-link active text-light"
              aria-current="page"
              >Computers</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/createllaptops"
              class="nav-link active text-light"
              aria-current="page"
              >Laptops</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/createphones"
              class="nav-link active text-light"
              aria-current="page"
              >Phones
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="createtvs"
              class="nav-link active text-light"
              aria-current="page"
              >TVs</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="createoutlets"
              class="nav-link active text-light"
              style=""
              aria-current="page"
              >Outlets</router-link
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
