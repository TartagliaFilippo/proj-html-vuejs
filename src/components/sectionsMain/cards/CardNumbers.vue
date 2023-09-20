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
.card-container {
  width: 25%;
  background-color: white;

  text-align: center;
  border: 1px solid #f5f7fa;
  padding: 60px 40px;

  h3 {
    text-align: center;
  }

  h1 {
    color: #20ad96;
    font-size: 60px;
    font-weight: bolder;
    margin: 40px 0;
  }

  h4 {
    color: #958ea3;
  }
}
</style>
