<script>
import Dropdown from "./navbar/Dropdown.vue";
import UserDetail from "./navbar/UserDetail.vue";
import Searchbar from "./navbar/Searchbar.vue";

export default {
  data() {
    return {
      logoPath: "../../public/img/logos/dark-logo.png",
      navItems: [
        {
          title: "Home",
          content: [
            "Welcome to MaxCoach",
            "Theme Requiredments",
            "WordPress Knowledge Base",
            "What's included",
          ],
        },
        {
          title: "Pages",
          content: [
            "Create a New Page",
            "Use Elementor to Build Page",
            "How to Change Page Title",
            "Page Options",
            "How to Setup Maintenance Page",
            "How to Setup a One-page Site",
            "How to Create a One Page Scroll",
          ],
        },
        {
          title: "Courses",
          content: [
            "How to Create a New Course",
            "How to Create a New Quizzes",
          ],
        },
        {
          title: "Features",
          content: [
            "Theme Installation",
            "Plugin Installation",
            "Plugin Configuration",
            "Demo Installation",
          ],
        },
        {
          title: "Blog",
          content: [
            "How to Create a New Post",
            "How to Create a Category",
            "How Create a Blog Archive",
          ],
        },
        {
          title: "Shop",
          content: ["Set up an Online Store", "How to Customize your Store"],
        },
      ],

      userItems: [
        "My Profile",
        "Repositories",
        "My project",
        "Settings",
        "Info Acoount",
      ],
    };
  },

  methods: {
    emitsCall(inputSearch) {
      this.$emit("input-call", inputSearch);
    },
  },

  emits: ["input-call"],

  components: { Dropdown, UserDetail, Searchbar },
};
</script>

<template>
  <div id="header" class="wrapper">
    <div class="container">
      <img :src="logoPath" class="logo-header" alt="" />
      <Dropdown
        v-for="(item, index) in navItems"
        :key="item[index]"
        :dataClass="item"
      />
      <UserDetail :dataUser="userItems" />
      <Searchbar @input-call="emitsCall" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100px;
  width: 100%;
  box-shadow: 0 1px 6px 0 grey;

  .container {
    height: 100%;
    display: flex;
    align-items: center;

    .logo-header {
      margin-right: auto;
    }
  }
}
</style>
