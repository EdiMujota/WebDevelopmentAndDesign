<template>
  <section class="vh-100 bg-dark">
    <LoadingIndicator v-if="loading" />
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img :src="logo" class="img-fluid" alt="Sample image" />
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form @submit.prevent="handleRegisterUser">
            <div class="form-row form-group"></div>
            <!-- Email input -->
            <div class="form-outline mb-4">
              <input
                type="text"
                id="name"
                class="form-control form-control-lg"
                placeholder="Name"
                v-model="name"
              />
            </div>

            <!-- Password input -->
            <div class="form-outline mb-3">
              <input
                type="email"
                id="email"
                class="form-control form-control-lg"
                placeholder="Email"
                v-model="email"
              />
            </div>
            <div class="form-outline mb-3">
              <input
                type="password"
                id="passowrd"
                class="form-control form-control-lg"
                placeholder="Password"
                v-model="password"
              />
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button
                class="btn btn-primary btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem"
              >
                Register
              </button>
              <p class="text-light small fw-bold mt-2 pt-1 mb-0">
                Already have an account?
                <router-link to="login" class="link-danger">Login</router-link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div
      class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary"
    >
      <!-- Copyright -->
      <div class="text-white mb-3 mb-md-0">
        Copyright © 2020. All rights reserved.
      </div>
      <!-- Copyright -->

      <!-- Right -->
      <div>
        <a href="#!" class="text-white me-4">
          <i class="fab fa-facebook-f">Facebook</i>
        </a>
        <a href="#!" class="text-white me-4">
          <i class="fab fa-twitter">Twitter</i>
        </a>
        <a href="#!" class="text-white me-4">
          <i class="fab fa-google">Google</i>
        </a>
        <a href="#!" class="text-white">
          <i class="fab fa-linkedin-in">Linkedin</i>
        </a>
      </div>
      <!-- Right -->
    </div>
  </section>
</template>

<script>
import logo from "@/assets/logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  data() {
    return {
      logo,
      name: "",
      email: "",
      password: "",
      loading: false,
    };
  },
  methods: {
    async handleRegisterUser() {
      this.$store.dispatch("registerUser", {
        name: this.name,
        email: this.email,
        password: this.password,
      });

      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
/* .divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
} */
.h-custom {
  height: calc(100% - 73px);
}
/* @media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
} */
.img-fluid {
  height: 25rem;
  width: 20rem;
}
a {
  text-decoration: none;
}
.btn:focus,
.btn:active:focus,
.btn.active:focus,
input:focus,
input:active:focus,
input.active:focus {
  outline: 0 !important;
  box-shadow: none !important;
}

/* .btn {
  background-color: rgb(111, 0, 0);
  border-color: rgb(111, 0, 0);
} */
.bg {
  background-color: rgb(111, 0, 0);
}
input {
  background-color: lightgray;
}
</style>
