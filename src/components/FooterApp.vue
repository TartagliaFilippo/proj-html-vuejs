<script>
import Newsletter from "./sectionsFooter/Newsletter.vue";
import Credits from "./sectionsFooter/Credits.vue";

export default {
  methods: {
    emitCall(emailInput) {
      this.$emit("email-input", emailInput);
    },
  },

  emits: ["email-input"],

  components: { Newsletter, Credits },
};
</script>

<template>
  <Newsletter @email-input="emitCall" />
  <Credits />
</template>

<style lang="scss" scoped></style>
