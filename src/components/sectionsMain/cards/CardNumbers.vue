<script>
export default {
  props: { data: Object },
};
</script>

<template>
  <div class="card-container">
    <h3>{{ data.title }}</h3>
    <h1>{{ data.value }}</h1>
    <h4>{{ data.detail }}</h4>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../style/partials/variables.scss" as *;
.card-container {
  width: 25%;
  background-color: $bgWhite;

  text-align: center;
  border: 2px solid $bgColor;
  padding: 60px 40px;

  h3 {
    text-align: center;
  }

  h1 {
    color: $buttonColor;
    font-size: 60px;
    font-weight: bolder;
    margin: 40px 0;
  }

  h4 {
    color: $textColor;
  }
}
</style>
