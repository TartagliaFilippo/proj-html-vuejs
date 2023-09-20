<script>
import CardTutoring from "./cards/CardTutoring.vue";

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

  components: { CardTutoring },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h4>MAXCOACH AVAILABLE COURSES</h4>
      <h2>
        Access <span class="green-text">Smart Tutoring</span> Program For
        Benefits.
      </h2>
      <div class="container-cards">
        <CardTutoring
          v-for="(item, index) in listCards"
          :key="listCards[index]"
          :data="item"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  .container {
    text-align: center;
    margin-top: 100px;

    h4 {
      color: #9b99af;
      font-size: 18px;
    }

    h2 {
      color: #3f3a64;

      .green-text {
        color: #20ad96;
      }
    }

    .container-cards {
      text-align: left;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
