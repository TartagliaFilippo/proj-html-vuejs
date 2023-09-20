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
.card-tutoring {
  width: 28%;
  margin-top: 50px;

  h3 {
    color: #3f3a64;
    margin: 30px 0;
  }

  p {
    color: #9b99af;
  }

  a {
    text-decoration: none;
    color: #9b99af;
    font-weight: bold;
  }
}
</style>
