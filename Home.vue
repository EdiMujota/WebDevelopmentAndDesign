<template>
  <h3>World Wide Shipping</h3>
  <video autoplay muted loop>
    <h3>hello</h3>
    <source class="video-bg" :src="main.bgVideo" type="video/mp4" />
    <h3>World</h3>
  </video>
  <div class="containers">
    <img :src="image" class="picc" />
    <router-link to="#" class="link"
      ><h2><strong>bNE Clothes</strong></h2></router-link
    >
  </div>
  <main>
    <h2 class="text-dark">Some famous brands we conatins</h2>
    <div
      class="brands-cont d-flex flex-row justify-content-center d-flex justify-content-around align-items-center"
    >
      <img v-for="image in images" :key="image" :src="image.img" class="img" />
    </div>
  </main>
  <footer class="text-center text-lg-start bg-white text-muted">
    <section
      class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
    >
      <div class="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        <a href="" class="me-4 link-secondary">
          <i class="fab fa-facebook-f">
            <img :src="facebook" alt="" class="social" />
          </i>
        </a>
        <a href="" class="me-4 link-secondary">
          <i class="fab fa-twitter"
            ><img :src="twitter" alt="" class="social"
          /></i>
        </a>
        <a href="" class="me-4 link-secondary">
          <i class="fab fa-google"
            ><img :src="google" alt="" class="social"
          /></i>
        </a>
        <a href="" class="me-4 link-secondary">
          <i class="fab fa-instagram"
            ><img :src="instagram" alt="" class="social"
          /></i>
        </a>
        <a href="" class="me-4 link-secondary">
          <i class="fab fa-linkedin"
            ><img :src="linkedin" alt="" class="social"
          /></i>
        </a>
        <a href="" class="me-4 link-secondary">
          <i class="fab fa-github"
            ><img :src="github" alt="" class="social"
          /></i>
        </a>
      </div>
    </section>

    <section class="">
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#!" class="text-reset">Computers</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Llaptops</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Phones</a>
            </p>
            <p>
              <a href="#!" class="text-reset">TVs</a>
            </p>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="#!" class="text-reset">Pricing</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Settings</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Orders</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Help</a>
            </p>
          </div>

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i class="fas fa-home me-3 text-secondary"></i> Pristina, PR 1001,
              KS
            </p>
            <p>
              <i class="fas fa-envelope me-3 text-secondary"></i>
              eCommerce@gmail.com
            </p>
            <p>
              <i class="fas fa-phone me-3 text-secondary"></i>+383 XX XXX XXX
            </p>
            <p>
              <i class="fas fa-print me-3 text-secondary"></i>+383 XX XXX XXX
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.025)">
      © 2023 Copyright:
      <a class="text-reset fw-bold" href="#">Bad News Eagle</a>
    </div>
  </footer>
</template>
<script>
import black from "@/assets/blackshirt.png";
import green from "@/assets/greenshirt.png";
import red from "@/assets/redshirt.png";
import white from "@/assets/whiteshirt.png";

const images = [black, white, red, green];

import apple from "@/assets/brands/apple.jpg";
import lenovo from "@/assets/brands/lenovo.png";
import msi from "@/assets/brands/msi.png";
import samsung from "@/assets/brands/samsung.png";
import steelseries from "@/assets/brands/steelseries.png";
import zowie from "@/assets/brands/zowie.png";

import facebook from "@/assets/facebook.png";
import github from "@/assets/github.png";
import google from "@/assets/google.png";
import instagram from "@/assets/instagram.png";
import linkedin from "@/assets/linkedin.png";
import twitter from "@/assets/twitter.png";

export default {
  name: "App",
  data: function () {
    return {
      index: 0,
      image: images[0],
      main: {
        bgVideo: require("@/assets/videos/videos.mp4"),
      },
      images: [
        {
          img: [apple],
        },
        {
          img: [samsung],
        },
        {
          img: [msi],
        },
        {
          img: [steelseries],
        },
        {
          img: [lenovo],
        },
        {
          img: [zowie],
        },
      ],
      twitter: twitter,
      facebook: facebook,
      google: google,
      linkedin: linkedin,
      github: github,
      instagram: instagram,
      autoChangeSlide() {
        setInterval(() => {
          this.next();
        }, 3000);
      },
    };
  },

  beforeMount() {
    this.autoChangeSlide();
  },
};
</script>
<style scoped>
.size {
  height: 100%;
  width: 100%;
}
video {
  height: 80vh;
  width: 100%;
}
h3 {
  margin-top: 3rem;
}
.containers {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-image: linear-gradient(white, rgb(225, 225, 225));
}
.picc {
  max-height: 25rem;
  max-width: 26rem;
}
.link {
  text-decoration: none;
  color: black;
}
.brands-cont {
  height: 25vh;
  background-color: rgb(235, 235, 235);
}
.img {
  width: 128px;
  height: 45px;
}
.social {
  height: 1.7rem;
  width: 1.7rem;
}
p {
  color: black;
}
a {
  text-decoration: none;
  font-size: 1.1rem;
  color: blue;
}
</style>
