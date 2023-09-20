<script>
import CardCourses from "./cards/CardCourses.vue";

export default {
  data() {
    return {
      listCards: [
        {
          image: "course-02-480x298.jpg",
          price: "$40.00",
          title: "Learning to Write as a Professional Author",
          lessons: "20 Lessons",
          students: "50 Students",
        },
        {
          image: "stock-full-hd-03-480x298.jpg",
          price: "Free",
          title: "Customer-centric Info-Tech Strategies",
          lessons: "24 Lessons",
          students: "769 Students",
        },
        {
          image: "stock-full-hd-04-480x298.jpg",
          price: "$19.00",
          title: "Open Programming Courses for Everyone: Python",
          lessons: "17 Lessons",
          students: "62 Students",
        },
        {
          image: "stock-full-hd-06-480x298.jpg",
          price: "$26.00",
          title: "Academic Listening and Note-taking",
          lessons: "14 Lessons",
          students: "67 Students",
        },
        {
          image: "course-featured-image-01-480x298.jpg",
          price: "$39.00",
          title: "Master jQuery in a Short Period of Time",
          lessons: "6 Lessons",
          students: "51 Students",
        },
        {
          image: "stock-full-hd-05-480x298.jpg",
          price: "$59.00",
          title: "Introduction to Javascript for Beginners",
          lessons: "14 Lessons",
          students: "76 Students",
        },
      ],
    };
  },

  components: { CardCourses },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h4>SIMULATED TO LEARN?</h4>
      <h2>Featured online Courses</h2>
      <div class="container-courses">
        <CardCourses
          v-for="(detail, index) in listCards"
          :key="listCards[index]"
          :data="detail"
        />
      </div>
      <button>
        View all courses
        <font-awesome-icon
          class="arrow-fa-right"
          :icon="['fas', 'arrow-right']"
        />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: #f5f7fa;
  .container {
    text-align: center;
    padding-top: 100px;

    h4 {
      color: #9b99af;
      font-size: 18px;
    }

    h2 {
      color: #3f3a64;
      margin-bottom: 70px;
    }
    .container-courses {
      display: flex;
      flex-wrap: wrap;
    }

    button {
      background-color: #20ad96;
      color: white;
      padding: 15px 50px;
      border: none;
      border-radius: 5px;
      margin: 70px auto 120px;

      .arrow-fa-right {
        margin-left: 15px;
      }
    }
  }
}
</style>
