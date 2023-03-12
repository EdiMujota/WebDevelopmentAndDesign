<template>
  <Sidebar fixed="top" />
  <router-view name="admin" />
  <head>
    <title>E-Commerce</title>
  </head>
  <body>
    <div class="container">
      <header>
        <!-- Carrotsuite navigation -->
        <nav class="carrotsuite-nav">
          <div class="logo">
            <img
              src="../../assets/images/e-commerce.png"
              class="background-img"
            />
          </div>
          <br />
          <div class="user" id="user">
            <h2>ADMIN</h2>
            <div class="user-img-wrapper">
              <img src="../../assets/images/useravatar.png" />
            </div>
          </div>
        </nav>
        <!-- end of feeds navigation -->
      </header>
      <br />
      <main class="main">
        <section class="sidebar">
          <h3>
            This panel created for admin. Here you can modify with the
            application!
          </h3>
        </section>
      </main>
    </div>
  </body>
</template>
<script>
import Sidebar from "@/components/admin/Sidebar.vue";
export default {
  components: { Sidebar },
  data: function () {
    return {};
  },
};
</script>
<style scoped>
.background-img {
  height: 100%;
  width: 100%;
}
</style>
