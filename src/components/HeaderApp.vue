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
  <img :src="logoPath" alt="" />
  <Dropdown />
  <Searchbar />
</template>

<style lang="scss" scoped></style>
