<script>
import CircleComp from "../graphicComponents/CircleComp.vue";

export default {
  components: { CircleComp },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="main-jumbo">
        <div class="text-jumbo">
          <h1>Distant learning for further expansion</h1>
          <p>
            Learning is a life-long journey that in fact we never find the
            terminate stop. Stop searching, enjoy the process.
          </p>
          <button class="button btn-green">
            <font-awesome-icon
              class="icon-fa-download"
              :icon="['fas', 'download']"
            />Download free guide
          </button>
          <p>
            Have questions?
            <a class="link-free" href="#"
              >Get Free Sample
              <font-awesome-icon :icon="['fas', 'arrow-right']"
            /></a>
          </p>
        </div>
        <div class="jumbotron">
          <div class="svg-container">
            <CircleComp class="circle" />
            <img
              class="bg-svg-1"
              src="../../../public/img/shapes/maxcoach-shape-02.png"
              alt=""
            />
            <img
              class="bg-svg-2"
              src="../../../public/img/shapes/maxcoach-shape-07.png"
              alt=""
            />
            <img
              class="bg-svg-3"
              src="../../../public/img/shapes/maxcoach-shape-08.png"
              alt=""
            />
            <img
              class="bg-svg-4"
              src="../../../public/img/shapes/maxcoach-shape-08.png"
              alt=""
            />
          </div>

          <div class="image-container">
            <img
              src="../../../public/img/jumbotron/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="credits-jumbo">
        <img src="../../../public/img/logos/client-logo-01.png" alt="" />
        <img src="../../../public/img/logos/client-logo-02.png" alt="" />
        <img src="../../../public/img/logos/client-logo-03.png" alt="" />
        <img src="../../../public/img/logos/client-logo-04.png" alt="" />
        <img src="../../../public/img/logos/client-logo-05.png" alt="" />
        <img src="../../../public/img/logos/client-logo-06.png" alt="" />
        <img src="../../../public/img/logos/client-logo-07.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variables.scss" as *;
.wrapper {
  margin-top: 100px;
  .container {
    .main-jumbo {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .text-jumbo {
        width: 35%;
        text-align: left;

        p {
          color: $textColor;
          .link-free {
            color: $buttonColor;
            text-decoration: none;
          }
        }

        .button {
          padding: 10px 20px;
          margin: 20px 0;

          .icon-fa-download {
            margin-right: 10px;
          }
        }
      }

      .jumbotron {
        .svg-container {
          position: relative;

          .circle {
            position: absolute;
            bottom: -460px;
            left: -44px;
          }

          img {
            position: absolute;
            z-index: -1;
          }
          & .bg-svg-1 {
            bottom: -241px;
            right: -111px;
          }

          & .bg-svg-2 {
            bottom: -590px;
            right: 55px;
          }

          & .bg-svg-3 {
            bottom: -460px;
            left: -100px;
          }

          & .bg-svg-4 {
            bottom: -315px;
            left: -100px;
          }
        }

        .image-container {
          height: 600px;
          width: 600px;
          border-radius: 50%;
          overflow: hidden;

          img {
            height: 100%;
          }
        }
      }
    }

    .credits-jumbo {
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin: 60px auto 30px;
    }
  }
}
</style>
