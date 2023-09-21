<script>
export default {
  props: { dataUser: Array },
};
</script>

<template>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <font-awesome-icon :icon="['far', 'user']" />
    </button>
    <ul class="dropdown-menu">
      <li v-for="(item, index) in dataUser" :key="dataUser[index]">
        <a class="dropdown-item" href="#">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variables.scss" as *;
.dropdown {
  .btn {
    height: 20px;
    width: 20px;
    background-color: $bgWhite;
    color: $titleColor;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid $titleColor;
    padding: 0;
    margin: 0 10px;

    &::after {
      display: none;
    }
    font-awesome-icon {
      height: 0;
      width: 0;
    }
  }
}
</style>
