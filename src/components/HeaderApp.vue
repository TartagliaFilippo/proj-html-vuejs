<script>
import Dropdown from "./navbar/Dropdown.vue";
import Searchbar from "./navbar/Searchbar.vue";

export default {
  data() {
    return {
      logoPath: "../../public/img/logos/dark-logo.png",
      navItems: ["Home", "Pages", "Courses", "Features", "Blog", "Shop"],
    };
  },

  components: { Dropdown, Searchbar },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <img :src="logoPath" class="logo-header" alt="" />
      <Dropdown
        v-for="(item, index) in navItems"
        :key="item[index]"
        :data="item"
      />
      <Searchbar />
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
