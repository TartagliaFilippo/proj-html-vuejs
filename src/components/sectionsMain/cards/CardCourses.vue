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
@use "../../../style/partials/variables.scss" as *;
.card-courses {
  width: 50%;

  display: flex;
  align-items: center;
  gap: 20px;

  margin-top: 50px;
  cursor: pointer;

  &:hover {
    background-color: $bgWhite;
  }

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
      color: $buttonColor;
    }

    h3 {
      color: $titleColor;
      font-size: 25px;

      &:hover {
        color: $buttonColor;
      }
    }

    span {
      color: $subTitleColor;
      margin-right: 30px;
    }
  }
}
</style>
