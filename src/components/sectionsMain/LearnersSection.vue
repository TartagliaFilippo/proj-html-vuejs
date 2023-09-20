<script>
import CardCarousel from "./cards/CardCarousel.vue";

export default {
  data() {
    return {
      listCards: [
        {
          title: "High level of efficiency and scientific teaching methods",
          overview:
            "I am fre to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.",
          image: "testimonial-avata-02.jpg",
          name: "MINA HOLLACE",
          task: "Freelancer",
        },
        {
          title: "It's a choice of quality for people with spacial needs",
          overview:
            "I'm a very strict person so I require averything to be organized and neat. Then, I'll be able to mack things right and shine. MaxCoach guys just got me.",
          image: "testimonial-avata-03.jpg",
          name: "FLORENCE THEMES",
          task: "Multimedia Admin",
        },
        {
          title:
            "Professional team of specialists and passionate mentors at reach",
          overview:
            "I nedd to get a certification for English proficiency and MaxCoach is my best chioce. Their tutors are smart and professional when dealing with students.",
          image: "testimonial-avata-04.jpg",
          name: "MADLEY PONDOR",
          task: "IT Specialist",
        },
      ],
    };
  },

  components: { CardCarousel },
};
</script>

<template>
  <div class="wrapper">
    <div class="title-container">
      <h4>GREAT WORDS ABOUT MAXCOACH</h4>
      <h2>Our <span>top learners'</span> verbatim</h2>
    </div>
    <div class="carousel-container">
      <CardCarousel
        v-for="(card, index) in listCards"
        :key="listCards[index]"
        :data="card"
      />
    </div>
    <div class="certifications-container">
      <h3>Start today for getting <span>Online Certification</span></h3>
      <h2>You can be your own guiding star with our help!</h2>
      <button>Get started now</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: #f5f7fa;
  text-align: center;

  .title-container {
    h4 {
      color: #9b99af;
      font-size: 18px;
    }

    h2 {
      color: #3f3a64;
      margin-bottom: 70px;

      span {
        color: #20ad96;
      }
    }
  }

  .carousel-container {
    display: flex;
    justify-content: space-around;
  }

  .certifications-container {
    color: #3f3a64;
    margin-top: 100px;

    h3 {
      span {
        color: #20ad96;
      }
    }

    button {
      background-color: #20ad96;
      color: white;
      padding: 15px 50px;
      border: none;
      border-radius: 5px;
      margin: 30px auto 120px;
    }
  }
}
</style>
