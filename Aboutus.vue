<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  data: function () {
    return {};
  },
};
</script>
<template>
  <Navbar />
  <div class="about-section">
    <h1 class="text-dark">About Us</h1>
    <p class="text-dark">Some text about who we are and what we do.</p>
    <p class="text-dark">
      Resize the browser window to see that this page is responsive by the way.
    </p>
  </div>

  <h2 style="text-align: center">Our Team</h2>

  <div class="containers">
    <div class="column child">
      <div class="card">
        <img src="../assets/team-pictures/eduardM.jpg" alt="Mike" />
        <div class="container">
          <h2>Eduard Mujota</h2>
          <p class="title">Art Director</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>mike@example.com</p>
        </div>
      </div>
    </div>
    <div class="column child">
      <div class="card">
        <img src="../assets/team-pictures/armendD.jpg" alt="Mike" />
        <div class="container">
          <h2>Armend Dullovi</h2>
          <p class="title">Art Director</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>mike@example.com</p>
        </div>
      </div>
    </div>
    <div class="column child">
      <div class="card">
        <img src="../assets/team-pictures/lorikD.jpg" alt="Mike" />
        <div class="container">
          <h2>Lorik Dullovi</h2>
          <p class="title">Art Director</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>mike@example.com</p>
        </div>
      </div>
    </div>
    <div class="column child">
      <div class="card">
        <img src="../assets/team-pictures/leonitR.jpg" alt="Mike" />
        <div class="container">
          <h2>Leonit Reqica</h2>
          <p class="title">Art Director</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>mike@example.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.containers {
  display: flex;
  flex-wrap: wrap;
}

.child {
  flex: 50%;
}
.about-section {
  padding: 70px;
  text-align: center;
  background-color: #474e5d;
  color: white;
  background-image: url("https://thumbs.dreamstime.com/b/abstract-dna-molecules-structure-science-technology-background-illustration-vector-119136443.jpg");
  height: 70%;
}
.column {
  margin-bottom: 20px;
  padding: 0 30px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 10px;
}
.about-section {
  padding: 70px;
  text-align: center;
  background-color: #474e5d;
  color: white;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("https://thumbs.dreamstime.com/b/abstract-dna-molecules-structure-science-technology-background-illustration-vector-119136443.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.title {
  color: grey;
}
@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
img {
  width: 60%;
  margin-left: 19%;
}
</style>
