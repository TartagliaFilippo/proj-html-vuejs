<script>
import CardTutoring from "./cards/CardTutoring.vue";
import CircleComp from "../graphicComponents/CircleComp.vue";

export default {
  data() {
    return {
      listCards: [
        {
          image: "home-2-image-box-01.png",
          title: "Customize Preferences",
          overview:
            "Learners are given the right to arrange and customize their study schedule and timetable based on preferences.",
          link: "Start here",
        },
        {
          image: "about-us-02-image-box-02.png",
          title: "Cloud Storage",
          overview:
            "You can store online lessons via online cloud or download to your device and revise lessons on the way.",
          link: "Get Free Quote",
        },
        {
          image: "home-2-image-box-03.png",
          title: "Multimedia Channels",
          overview:
            "We provide study materials with various formats: video, audio, slides, doc, prints, books and applications.",
          link: "Start now",
        },
      ],
    };
  },

  components: { CardTutoring, CircleComp },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h4>MAXCOACH AVAILABLE COURSES</h4>
      <h2>
        Access <span class="title-green">Smart Tutoring</span> Program For
        Benefits.
      </h2>
      <div class="container-cards">
        <CardTutoring
          v-for="(item, index) in listCards"
          :key="listCards[index]"
          :data="item"
        />
      </div>
      <div class="container-tutoring-jumbo">
        <div class="container-image">
          <img
            class="image-poster"
            src="../../../public/img/courses/home-2-popup-video-poster.jpg"
            alt=""
          />
          <img
            class="yt-logo"
            src="../../../public/img/icon-youtube-play.png"
            alt=""
          />
          <img
            class="svg-bg-1"
            src="../../../public/img/svg/cloud.svg"
            alt=""
          />
          <img
            class="svg-bg-2"
            src="../../../public/img/shapes/maxcoach-shape-07.png"
            alt=""
          />
          <img
            class="svg-bg-3"
            src="../../../public/img/shapes/maxcoach-shape-05.png"
            alt=""
          />
          <CircleComp class="circle" />
        </div>
        <div class="container-text">
          <h4>GET STARTED <span>EFFORTLESSLY</span></h4>
          <h1>Enjoy Our <span class="title-green">Companionship</span></h1>
          <p>
            Sneek peek into what has in store for you on our online teaching and
            mentoring portal. Seek for some hidden hints of early-bird rewards
            as well.
          </p>
          <a href="#"
            >Download free guidebook
            <font-awesome-icon :icon="['fas', 'arrow-right']"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variables.scss" as *;
.wrapper {
  margin-bottom: 160px;
  .container {
    text-align: center;
    margin-top: 100px;

    h4 {
      color: $subTitleColor;
      font-size: 18px;
    }

    h2 {
      color: $titleColor;
    }

    .container-cards {
      text-align: left;
      display: flex;
      justify-content: space-between;
    }

    .container-tutoring-jumbo {
      display: flex;
      justify-content: space-evenly;

      margin-top: 150px;

      .container-image {
        width: 670px;
        height: 450px;
        position: relative;

        .image-poster {
          overflow: hidden;
          border-radius: 7px;
          z-index: 2;
        }

        .yt-logo {
          position: absolute;
          bottom: 50%;
          left: 35%;
          transform: translate(50%, 50%);
        }

        .svg-bg-1 {
          height: 170px;
          position: absolute;
          top: -100px;
          left: -67px;
          z-index: -1;
        }

        .svg-bg-2 {
          position: absolute;
          bottom: -120px;
          right: -17px;
          z-index: -1;
        }

        .svg-bg-3 {
          position: absolute;
          bottom: 210px;
          left: -105px;
          z-index: -1;
        }

        .circle {
          position: absolute;
          top: -30px;
          right: -120px;
          border: 10px solid #ecc5ab;
        }
      }

      .container-text {
        width: 30%;
        text-align: left;
        margin-top: 60px;

        h4 {
          span {
            color: $titleColor;
            font-weight: bold;
          }
        }

        h1 {
          color: $titleColor;
        }

        p {
          color: $subTitleColor;
          margin-bottom: 70px;
        }

        a {
          text-decoration: none;
          color: $buttonColor;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
