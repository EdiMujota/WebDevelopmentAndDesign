<script>
import computer from "@/assets/slideshow/computer.png";
import iphone from "@/assets/slideshow/iphone.png";
import laptop from "@/assets/slideshow/laptop.png";
import tv from "@/assets/slideshow/tv.png";

const images = [computer, laptop, iphone, tv];

import apple from "@/assets/brands/apple.jpg";
import lenovo from "@/assets/brands/lenovo.png";
import msi from "@/assets/brands/msi.png";
import samsung from "@/assets/brands/samsung.png";
import steelseries from "@/assets/brands/steelseries.png";
import zowie from "@/assets/brands/zowie.png";

import Footer from "../components/Footer.vue";

export default {
  components: { Footer },
  name: "App",
  data() {
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
    };
  },
  methods: {
    next() {
      this.index = (this.index + 1) % images.length;
      this.image = images[this.index];
    },
    autoChangeSlide() {
      setInterval(() => {
        this.next();
      }, 3000);
    },
  },
  beforeMount() {
    this.autoChangeSlide();
  },
};
</script>

<template>
  <div class="background-pic"></div>
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
  <Footer />
</template>

<style scoped>
.background-pic {
  height: 480px;
  background-image: url("https://www.thewechatagency.com/wp-content/uploads/2021/12/1_SwFB1o_k1LGprN-XRUZQ8w.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
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
  margin-bottom: 4rem;
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
