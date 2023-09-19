<script>
import HeaderApp from "./components/HeaderApp.vue";
import MainApp from "./components/MainApp.vue";
import FooterApp from "./components/FooterApp.vue";

export default {
  components: { HeaderApp, MainApp, FooterApp },
};
</script>

<template>
  <h1>inizio progetto</h1>
  <HeaderApp />
  <MainApp />
  <FooterApp />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
