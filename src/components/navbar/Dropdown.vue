<script>
export default {
  data() {
    return {};
  },

  props: {
    data: String,
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
      {{ data }}
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Menu item</a></li>
      <li><a class="dropdown-item" href="#">Menu item</a></li>
      <li><a class="dropdown-item" href="#">Menu item</a></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.btn-group {
  .btn {
    background-color: white;
    color: black;
    border: none;
  }
}
</style>
