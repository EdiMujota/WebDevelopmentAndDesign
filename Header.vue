<script>
import logo from "@/assets/logo.jpg";
import { getAuth, signOut } from "firebase/auth";
import { mapGetters, mapState } from "vuex";

export default {
  data: function () {
    return {
      logo: logo,
    };
  },
  methods: {
    async handleLogout() {
      const auth = getAuth();
      await signOut(auth);
    },
  },
  computed: {
    // user: this.$store.state.user,
    ...mapState(["user"]),
    // username: this.state.getters.username,
    ...mapGetters(["username"]),
  },
};
</script>
<template>
  <div class="title-container bg-dark loginview">
    <h3 class="title">Welcome to Bad News Eagles Shop</h3>
    <div v-if="user" class="controls">
      <a href="#" @click.prevent="handleLogout" class="btn btn-outline-danger"
        >Logout</a
      >
    </div>
    <div v-else class="user controlls">
      <router-link to="/login" class="btn btn-outline-primary"
        >Login</router-link
      >
      <router-link to="/register" class="btn btn-outline-light"
        >Register</router-link
      >
    </div>
    <router-link to="/dashboard" class="btn btn-outline-danger admin"
      >Admin</router-link
    >
  </div>
  <div class="nav-container">
    <div class="first">
      <img :src="logo" class="logo" />
      <h3 class="name"><strong>ALLEz </strong></h3>
    </div>
    <div class="second">
      <input type="text" class="search bg-dark" placeholder="Search" />
    </div>

    <div class="dropdown third">
      <button
        class="btn-secondary dropdown-toggle button btn buttonuser"
        type="button"
        id="dropdownMenu2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        User Name
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button class="dropdown-item" type="button">User Details</button>
        <button class="dropdown-item" type="button">Purchases</button>
        <button class="dropdown-item" type="button">Reback Products</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title-container {
  height: 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
}
.user {
  display: flex;
  gap: 0.3rem;
}
.logo {
  height: 60px;
  width: 50px;
  margin-left: 30px;
}
.nav-container {
  display: flex;
  background-color: rgb(15, 15, 15);
  height: 5rem;
  border: 1px solid black;
  justify-content: space-between;
}

.search {
  border-style: none;
  padding-left: 10px;
  height: 3rem;
  border-radius: 0.3rem;
  font-size: 1.2rem;
  color: rgb(180, 180, 180);
  margin-top: 15px;
  width: 30rem;
}
.search:focus {
  outline: none;
}
.search::placeholder {
  color: rgb(180, 180, 180);
}
.button {
  background-color: rgb(15, 15, 15);
  color: white;
  border: 0px;
  height: 100%;
  margin-right: 100px;
  outline: none;
  border-radius: 0.2rem;
}

.first {
  display: flex;
  justify-content: center;
  align-items: center;
}
.name {
  margin-top: 1rem;
  margin-left: 0.5rem;
  font-size: 2rem;
  color: darkred;
}
.btn:focus,
.btn:active:focus,
.btn.active:focus {
  outline: 0 !important;
  box-shadow: none !important;
  background-color: rgb(15, 15, 15) !important;
}
.buttonuser:hover {
  background-color: rgb(15, 15, 15);
}
</style>
