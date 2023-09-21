<script>
import { store } from "./data/store";

import HeaderApp from "./components/HeaderApp.vue";
import MainApp from "./components/MainApp.vue";
import FooterApp from "./components/FooterApp.vue";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    handleInput(inputSearch) {
      console.log(inputSearch);
    },
  },

  components: { HeaderApp, MainApp, FooterApp },
};
</script>

<template>
  <div class="wrapper">
    <HeaderApp @input-call="handleInput" />
    <MainApp />
    <FooterApp />
    <a class="btn-up" href="#header"
      ><font-awesome-icon :icon="['fas', 'arrow-up']"
    /></a>
  </div>
</template>

<style lang="scss">
@use "./style/general.scss" as *;
.wrapper {
  position: relative;

  .btn-up {
    height: 50px;
    width: 50px;
    background-color: #20ad96;
    color: white;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
    text-decoration: none;

    position: fixed;
    bottom: 50px;
    right: 50px;
  }
}
</style>
