<script>
import CardNumbers from "./cards/CardNumbers.vue";

export default {
  data() {
    return {
      listCards: [
        {
          title: "Successfully trained",
          value: "1790",
          detail: "ENROLLED LEARNERS",
        },
        {
          title: "Produly Received",
          value: "19",
          detail: "COUNTRYWIDE AWARDS",
        },
        {
          title: "Firmly Established",
          value: "24",
          detail: "LOCAL BRANCHES",
        },
        {
          title: "Getting Featured on",
          value: "1090",
          detail: "BLOG POSTS",
        },
      ],
    };
  },

  components: { CardNumbers },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <CardNumbers
        v-for="(item, index) in listCards"
        :key="listCards[index]"
        :data="item"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variables.scss" as *;
.wrapper {
  background-color: $bgWhite;

  .container {
    display: flex;
  }
}
</style>
