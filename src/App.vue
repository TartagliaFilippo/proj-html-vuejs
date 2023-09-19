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

  components: { HeaderApp, MainApp, FooterApp },
};
</script>

<template>
  <div class="container">
    <h1>{{ store.titleReactive }}</h1>
  </div>
  <HeaderApp />
  <MainApp />
  <FooterApp />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
