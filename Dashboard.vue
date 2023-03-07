<template>
  <Sidebar fixed="top" />
  <router-view name="admin" />
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>E-Commerce</title>
      <link rel="stylesheet" href="./css/all.css" />
      <link rel="stylesheet" href="./css/style.css" />
    </head>
    <body>
      <div class="container">
        <header>
          <!-- Carrotsuite navigation -->
          <nav class="carrotsuite-nav">
            <div class="logo">
              <a href="index.html" class="active nav-item">
                <img src="./images/e-commerce.png" alt="Images" />
              </a>
            </div>
            <br />
            <div class="user" id="user">
              <h2>ADMIN</h2>
              <div class="user-img-wrapper">
                <img src="./images/useravatar.png" alt="User 1" />
              </div>
            </div>
          </nav>
          <!-- end of feeds navigation -->
        </header>
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
  </html>
</template>

<script>
import Sidebar from "./Sidebar.vue";

export default {
  components: { Sidebar },
  data: function () {
    return {};
  },
};

const menuLinks = document.querySelectorAll(".sidebar .menu a");

for (const link of menuLinks) {
  link.addEventListener("mouseenter", function () {
    if (window.matchMedia("(max-width: 626px)").matches) {
      const tooltip = this.querySelector("span").textContent;
      this.setAttribute("title", tooltip);
    } else {
      this.removeAttribute("title");
    }
  });
}
</script>

<style scoped></style>
