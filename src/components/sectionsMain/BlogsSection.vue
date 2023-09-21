<script>
import CardBlog from "./cards/CardBlog.vue";

export default {
  data() {
    return {
      listItems: [
        "Become a Better Blogger: Content Planning",
        "Promoting Your Online Business on Pinterest",
        "Gamification and Game-Based Learning",
        "Designing an Online Course from Expert's Prospective",
        "Why Online Courses Are the Future of Education",
      ],

      listCardDetail: [
        {
          image: "artist-blog-03-480x352.jpeg",
          task: "ARTIST",
          title: "Brush Strokes Energize Trees in Paintings",
          date: "May 15, 2020",
          viewers: "688",
        },
        {
          image: "artist-blog-01-480x352.jpg",
          task: "ARTIST",
          title: "Pocket-Sized Notebooks Hold Miniature Paintings",
          date: "May 15, 2020",
          viewers: "603",
        },
      ],
    };
  },

  components: { CardBlog },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="text-container">
        <h4>ENJOYABLE INSIGHTS</h4>
        <h2>Most Viewed <span class="title-green">Best Blogs</span></h2>
        <ul>
          <li v-for="(item, index) in listItems" :key="listItems[index]">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="cards-container">
        <CardBlog
          v-for="(card, i) in listCardDetail"
          :key="listCardDetail[i]"
          :data="card"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: #f5f7fa;
  padding: 120px 0;
  .container {
    display: flex;
    .text-container {
      h4 {
        color: #9b99af;
        font-size: 18px;
      }

      h2 {
        color: #3f3a64;
      }
    }

    ul {
      li {
        margin: 25px 0;
        font-weight: bold;
      }
    }

    .cards-container {
      display: flex;
      justify-content: flex-end;
      gap: 60px;
    }
  }
}
</style>
