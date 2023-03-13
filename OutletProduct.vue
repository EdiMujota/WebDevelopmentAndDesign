<template>
  <div class="background"></div>
  <div class="d-flex align-items-center title">
    <div>
      <h1>Outlet</h1>
    </div>
  </div>
  <section class="row section" style="background-color: #eee">
    <div class="container py-5 w-100 cont">
      <div class="row wrapper box card-deck justify-content">
        <div
          class="col-md-8 col-lg-6 col-xl-4"
          v-for="outlet in Outlets"
          :key="outlet._id"
        >
          <div class="card text-black testing">
            <p class="text-muted mb-4 pt-3">{{ outlet.name }}</p>
            <img
              :src="outlet.image"
              class="card-img-top"
              alt="Apple Computer"
            />
            <div class="card-body">
              <div class="text-center">
                <p class="text-muted card-title">Believing is seeing</p>
                <h5 class="mb-4">{{ outlet.description }}</h5>
              </div>
              <div>
                <div class="d-flex justify-content-between">
                  <span>Actual Price</span
                  ><span
                    ><s>${{ outlet.price }}</s></span
                  >
                </div>
                <div class="d-flex justify-content-between">
                  <span>Discount Price</span><span>${{ outlet.discount }}</span>
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
      Outlets: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4001/api/createoutlet";
    axios
      .get(apiURL)
      .then((res) => {
        this.Outlets = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteOutlet(id) {
      let apiURL = `http://localhost:4001/api/delete-outlet/${id}`;
      let indexOfArrayItem = this.Outlets.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Outlets.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
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
s {
  color: red;
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
  background-image: url("https://4kwallpapers.com/images/wallpapers/apple-pro-display-xdr-stock-5k-4480x2520-2303.jpg");
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
</style>
