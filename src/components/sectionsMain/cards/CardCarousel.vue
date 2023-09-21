<script>
export default {
  props: { data: Object },
};
</script>

<template>
  <div class="card-learners">
    <h5>{{ data.title }}</h5>
    <p>{{ data.overview }}</p>
    <div class="container-user">
      <img :src="'../../../../public/img/testimonials/' + data.image" alt="" />
      <div class="container-text">
        <h4>{{ data.name }}</h4>
        <p>/ {{ data.task }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../style/partials/variables.scss" as *;
.card-learners {
  width: 29%;
  height: 100%;
  background-color: $bgWhite;
  text-align: left;
  border-radius: 5px;
  margin: 40px 20px;
  padding: 3%;

  h5 {
    color: $titleColor;
  }

  p {
    color: $textColor;
  }

  .container-user {
    display: flex;
    gap: 30px;
    margin: 30px 0 10px;

    img {
      height: 80px;
      width: 80px;
      border-radius: 50%;
    }

    .container-text {
      display: flex;
      flex-direction: column;
      justify-content: center;

      h4 {
        color: $titleColor;
        font-size: 16px;
      }
    }
  }
}
</style>
