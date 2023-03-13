<template>
  <div class="background"></div>
  <div class="d-flex align-items-center title">
    <div><h1>Laptop</h1></div>
  </div>
  <section class="row section" style="background-color: #eee">
    <div class="container cont py-5 w-100">
      <div class="row wrapper box card-deck justify-content">
        <div
          class="col-md-8 col-lg-6 col-xl-4"
          v-for="laptop in Laptops"
          :key="laptop._id"
        >
          <div class="card text-black testing laptopproduct">
            <p class="text-muted mb-4 pt-3">{{ laptop.name }}</p>
            <span class="material-symbols-outlined iconpc"> computer </span>
            <img
              :src="laptop.image"
              class="card-img-top"
              alt="Apple Computer"
            />
            <div class="card-body">
              <div class="text-center">
                <p class="card-title">Believing is seeing</p>
                <h5 class="text-muted mb-4">{{ laptop.description }}</h5>
              </div>
              <div>
                <div class="d-flex justify-content-between">
                  <span>Price</span><span>${{ laptop.price }}</span>
                </div>
              </div>
              <div class="container">
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
      Laptops: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4001/api/createlaptop";
    axios
      .get(apiURL)
      .then((res) => {
        this.Laptops = res.data;
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
.section {
  width: 99.5vw;
}
.cont {
  width: 100%;
}
.container {
  width: 100%;
}
.col-md-8 {
  width: 30%;
}
.wrapper {
  justify-content: space-evenly;
}

img {
  height: 250px;
  width: 250px;
  margin-left: 3.8rem;
}
.btn-outline-success,
.btn-outline-primary {
  display: flex;
}
.background {
  height: 50vh;
  background-image: url("https://4kwallpapers.com/images/wallpapers/apple-pro-display-xdr-colorful-stock-5k-1920x1080-283.jpg");
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
.border {
  border-color: white;
}
</style>
