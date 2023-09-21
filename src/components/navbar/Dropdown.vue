<script>
export default {
  data() {
    return {};
  },

  props: {
    dataClass: Object,
  },
};
</script>

<template>
  <div class="btn-group">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      data-bs-auto-close="true"
      aria-expanded="false"
    >
      {{ dataClass.title }}
    </button>
    <ul class="dropdown-menu">
      <li
        v-for="(item, index) in dataClass.content"
        :key="dataClass.content[index]"
      >
        <a class="dropdown-item" href="#">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variables.scss" as *;
.btn-group {
  .btn {
    background-color: $bgWhite;
    color: $titleColor;
    border: none;
  }
}
</style>
