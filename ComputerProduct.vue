<template>
  <div class="background"></div>
  <div class="d-flex align-items-center title">
    <div><h1>Computers</h1></div>
  </div>
  <section class="row section" style="background-color: #eee">
    <div class="py-5 w-100 cont">
      <div class="row wrapper box card-deck justify-content">
        <div
          class="col-md-8 col-lg-6 col-xl-4"
          v-for="computer in Computers"
          :key="computer._id"
        >
          <div class="card text-black testing">
            <p class="text-muted mb-4 pt-3">{{ computer.name }}</p>
            <span class="material-symbols-outlined iconpc"> computer </span>
            <img
              :src="computer.image"
              class="card-img-top"
              alt="Apple Computer"
            />
            <div class="card-body">
              <div class="text-center">
                <h5 class="text-muted card-title">Believing is seeing</h5>
                <p class="mb-4">{{ computer.description }}</p>
              </div>
              <div>
                <div class="d-flex justify-content-between">
                  <span>Price</span><span>${{ computer.price }}</span>
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
      Computers: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4001/api/createcomputer";
    axios
      .get(apiURL)
      .then((res) => {
        this.Computers = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteComputer(id) {
      let apiURL = `http://localhost:4001/api/delete-computer/${id}`;
      let indexOfArrayItem = this.Computers.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Computers.splice(indexOfArrayItem, 1);
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
  margin-left: 5rem;
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
  background-image: url("https://wallpaperset.com/w/full/a/f/a/372257.jpg");
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
