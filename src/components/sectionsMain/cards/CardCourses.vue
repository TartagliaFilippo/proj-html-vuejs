<script>
export default {
  props: { data: Object },
};
</script>

<template>
  <div class="card-courses">
    <img
      :src="'../../../../public/img/simulated to learn/' + data.image"
      alt=""
    />
    <div class="text-container">
      <h4>{{ data.price }}</h4>
      <h3>{{ data.title }}</h3>
      <span
        ><font-awesome-icon :icon="['far', 'file-lines']" />
        {{ data.lessons }}</span
      >
      <span
        ><font-awesome-icon :icon="['far', 'user']" /> {{ data.students }}</span
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-courses {
  width: 50%;

  display: flex;
  align-items: center;
  gap: 20px;

  margin-top: 50px;

  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
  }

  .text-container {
    width: 420px;
    text-align: left;

    h4 {
      color: #20ad96;
    }

    h3 {
      color: #3f3a64;
      font-size: 25px;
    }

    span {
      color: #9b99af;
      margin-right: 30px;
    }
  }
}
</style>
