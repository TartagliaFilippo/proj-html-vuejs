<script>
export default {};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h2>Subscribe <span>Newsletters</span></h2>
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
        <button class="btn" type="button" id="button-addon2">Subscribe</button>
      </div>
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
.wrapper {
  padding: 100px 0;
  .container {
    width: 50%;
    text-align: center;

    position: relative;

    h2 {
      color: #3f3a64;

      span {
        color: #2eb29c;
      }
    }
    h4 {
      color: #797979;
      margin: 20px 0 60px;
    }
    .input-group {
      input {
        height: 50px;
      }
      .btn {
        background-color: #20ad96;
        color: white;
        padding: 10px 50px;
        border: none;
        border-radius: 5px;
      }
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
