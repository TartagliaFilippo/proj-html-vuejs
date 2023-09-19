<script>
export default {};
</script>

<template>
  <div class="input-group">
    <input
      type="text"
      class="form-control"
      placeholder="Search.."
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
    />
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.input-group {
  width: 25%;
}
</style>
