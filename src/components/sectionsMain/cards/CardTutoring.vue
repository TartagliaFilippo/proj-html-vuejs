<script>
export default {
  props: { data: Object },
};
</script>

<template>
  <div class="card-tutoring">
    <img :src="'../../../../public/img/courses/' + data.image" alt="" />
    <h3>{{ data.title }}</h3>
    <p>{{ data.overview }}</p>
    <a href="#">
      {{ data.link }} <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../style/partials/variables.scss" as *;
.card-tutoring {
  width: 28%;
  margin-top: 50px;

  h3 {
    color: $titleColor;
    margin: 30px 0;
  }

  p {
    color: $subTitleColor;
  }

  a {
    text-decoration: none;
    color: $subTitleColor;
    font-weight: bold;
  }
}
</style>
