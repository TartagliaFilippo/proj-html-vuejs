<script>
import { store } from "../../data/store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="input-group">
    <input
      v-model="store.inputSearch"
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
@use "../../style/partials/variables.scss" as *;
.input-group {
  width: 25%;

  .form-control {
    border: none;
    background-color: $bgColor;
  }

  .btn {
    border: none;
    background-color: $bgColor;
    color: $buttonColor;
  }
}
</style>
