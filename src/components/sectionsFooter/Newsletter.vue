<script>
import CircleComp from "../graphicComponents/CircleComp.vue";

export default {
  components: { CircleComp },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h2>Subscribe <span class="title-green">Newsletters</span></h2>
      <h4>
        Enter your email adress to register to our newsletter subscription
        delivered on a regular basis!
      </h4>
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your email"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button class="btn-green button" type="button" id="button-addon2">
          Subscribe
        </button>
      </div>
      <CircleComp class="circle" />
      <img
        class="svg-bg-1"
        src="../../../public/img/shapes/maxcoach-shape-02.png"
        alt=""
      />
      <img
        class="svg-bg-2"
        src="../../../public/img/shapes/maxcoach-shape-09.png"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variables.scss" as *;
.wrapper {
  padding: 100px 0;
  .container {
    width: 50%;
    text-align: center;

    position: relative;

    h2 {
      color: $titleColor;
    }
    h4 {
      color: $subTitleColor;
      margin: 20px 0 60px;
    }
    .input-group {
      input {
        height: 50px;
        background-color: #f5f5f5;
      }
      .button {
        padding: 10px 50px;
      }
    }
    .circle {
      height: 55px;
      width: 55px;
      border: 7px solid #8fd6ca;

      position: absolute;
      bottom: 30px;
      left: -250px;
    }

    .svg-bg-1 {
      position: absolute;
      right: -250px;
      bottom: 0;
      z-index: -1;
    }
    .svg-bg-2 {
      position: absolute;
      right: -250px;
      bottom: 70px;
      z-index: -2;
    }
  }
}
</style>
