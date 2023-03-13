<template>
  <div class="background"></div>
  <div class="d-flex align-items-center title">
    <div><h1>TVs</h1></div>
  </div>
  <section class="row section" style="background-color: #eee">
    <div class="container py-5 w-100 cont">
      <div class="row wrapper box card-deck justify-content">
        <div class="col-md-8 col-lg-6 col-xl-4" v-for="tv in Tvs" :key="tv._id">
          <div class="card text-black testing laptopproduct">
            <p class="text-muted mb-4 pt-3">{{ tv.name }}</p>
            <span class="material-symbols-outlined iconpc"> computer </span>
            <img :src="tv.image" class="card-img-top" alt="Apple Computer" />
            <div class="card-body">
              <div class="text-center">
                <p class="card-title">Believing is seeing</p>
                <h5 class="text-muted mb-4">{{ tv.description }}</h5>
              </div>
              <div>
                <div class="d-flex justify-content-between">
                  <span>Price</span><span>${{ tv.price }}</span>
                </div>
              </div>
              <div class="container-edi">
                <div class="row pt-4">
                  <div class="col-sm">
                    <button type="button" class="btn btn-outline-primary">
                      <span class="material-symbols-outlined">
                        shopping_cart </span
                      >Buy it Now
                    </button>
                  </div>
                  <div class="col-sm">
                    <button type="button" class="btn btn-outline-success">
                      <span class="material-symbols-outlined">
                        shopping_bag </span
                      >Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      Tvs: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4001/api/createtv";
    axios
      .get(apiURL)
      .then((res) => {
        this.Tvs = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style scoped>
/* .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  } */

/* .test {
    width: 90%;
    height: 80%;
    border: 1px solid;
  }
  .buttons {
    display: flex;
    justify-content: start;
    align-items: start;
  } */
.container-edi {
  margin-left: 6rem;
}
.section {
  width: 99.75vw;
}
.cont {
  width: 100%;
}
.container {
  width: 100%;
}
.col-md-8 {
  width: 30%;
  margin-top: 2rem;
}
.wrapper {
  justify-content: space-evenly;
}

img {
  height: 250px;
  width: 250px;
  margin-left: 9.8rem;
  margin-top: 1rem;
}
.btn-outline-success,
.btn-outline-primary {
  display: flex;
}
.background {
  height: 35vh;
  background-image: url("https://i.pinimg.com/originals/fd/75/9c/fd759cfb3d2875978bb004f9a8f3e907.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.title {
  height: 20vh;
  /* align-items: center; */
  margin-left: 5rem;
  color: darkred;
}
.input-group {
  margin-left: 100px;
}
.iconpc {
  font-variation-settings: "FILL" 0, "wght" 700, "GRAD" 0, "opsz" 20;
}
</style>
