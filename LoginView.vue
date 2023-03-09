<script>
import facebook from "@/assets/facebook.png";
import github from "@/assets/github.png";
import google from "@/assets/google.png";
import logo from "@/assets/logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  data: function () {
    return {
      logo: logo,
      facebook: facebook,
      google: google,
      github: github,
      email: "",
      password: "",
    };
  },
  methods: {
    async handleLoginUser() {
      this.$store.dispatch("loginUser", {
        email: this.email,
        password: this.password,
      });
      this.$router.push("/");
    },
  },
};
</script>
<template>
  <section class="vh-100 bg-dark">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img :src="logo" class="img-fluid" alt="Sample image" />
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form @submit.prevent="handleLoginUser" class="login-form">
            <div
              class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"
            >
              <p class="text-light lead fw-normal mb-0 me-3">Sign in with</p>
              <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fab fa-facebook-f">
                  <img :src="facebook" alt="" class="social" />
                </i>
              </button>

              <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fab fa-google">
                  <img :src="google" alt="" class="social" />
                </i>
              </button>

              <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fab fa-github">
                  <img :src="github" alt="" class="social" />
                </i>
              </button>
            </div>

            <div class="divider d-flex align-items-center my-4">
              <p class="text-center text-light fw-bold mx-3 mb-0">Or</p>
            </div>

            <!-- Email input -->
            {{ this.user && this.user.email }}
            <div class="form-outline mb-4">
              <input
                type="email"
                id="email"
                class="form-control form-control-lg"
                placeholder="Enter a valid email address"
                required
                v-model="email"
              />
            </div>

            <!-- Password input -->
            <div class="form-outline mb-3">
              <input
                type="password"
                id="password"
                class="form-control form-control-lg"
                placeholder="Enter password"
                required
                v-model="password"
              />
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <!-- Checkbox -->
              <div class="form-check mb-0">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                />
                <label class="text-light form-check-label" for="form2Example3">
                  Remember me
                </label>
              </div>
              <a href="#!" class="text-light">Forgot password?</a>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button
                class="btn btn-primary btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem"
              >
                Login
              </button>
              <p class="text-light small fw-bold mt-2 pt-1 mb-0">
                Don't have an account?
                <router-link to="register" class="link-danger"
                  >Register</router-link
                >
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
.social {
  height: 1.7rem;
  width: 1.7rem;
}
</style>
