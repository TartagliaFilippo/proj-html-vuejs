<script>
export default {
  props: { data: Object },
};
</script>

<template>
  <div class="card-container">
    <img :src="'../../../../public/img/blogs/' + data.image" alt="" />
    <div class="text-container">
      <h5>{{ data.task }}</h5>
      <h4>{{ data.title }}</h4>
      <p>
        <span>
          <font-awesome-icon :icon="['far', 'calendar']" /> {{ data.date }}
        </span>
        <span>
          <font-awesome-icon :icon="['far', 'eye']" /> {{ data.viewers }} views
        </span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  width: 40%;
  background-color: white;
  border-radius: 10px;

  img {
    width: 100%;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
  }

  .text-container {
    padding: 0 20px;

    h5 {
      color: #9390a8;
      margin-top: 40px;
    }

    h4 {
      color: #3f3a64;
    }

    p {
      color: #9390a8;
      margin-top: 20px;

      span {
        margin-right: 40px;
      }
    }
  }
}
</style>
