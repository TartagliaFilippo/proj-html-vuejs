<script>
export default {
  data() {
    return {
      footerList: {
        adress: {
          title: "Adress",
          location: "382 NE 191st St # 87394 Miami, FL 33179-3899",
          phone: "+1(305) 547-9909 (9am - 5pm EST, Monday - Friday)",
          email: "support@maxcoach.com",
        },
        explore: {
          title: "Explore",
          items: ["Start here", "Blog", "About us"],
        },
        tutoring: {
          title: "",
          items: ["Success story", "Courses", "Contact us"],
        },
        information: {
          title: "Information",
          items: [
            "Membership",
            "Purchase guide",
            "Privacy policy",
            "Terms of services",
          ],
        },
      },
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="left-content">
        <div class="adress">
          <h5>{{ footerList.adress.title }}</h5>
          <p>{{ footerList.adress.location }}</p>
          <p>{{ footerList.adress.phone }}</p>
          <p>{{ footerList.adress.email }}</p>
        </div>
        <div class="social">
          <img src="../../../public/img/social/facebook.png" alt="" />
          <img src="../../../public/img/social/twitter.svg" alt="" />
          <img src="../../../public/img/social/instagram.svg" alt="" />
          <img src="../../../public/img/social/linkedin.svg" alt="" />
        </div>
      </div>
      <div class="right-content">
        <div class="explore">
          <h5>{{ footerList.explore.title }}</h5>
          <ul>
            <li
              v-for="(item, index) in footerList.explore.items"
              :key="footerList.explore.items[index]"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="tutoring">
          <h5>{{ footerList.tutoring.title }}</h5>
          <ul>
            <li
              v-for="(detail, i) in footerList.tutoring.items"
              :key="footerList.tutoring.items[i]"
            >
              {{ detail }}
            </li>
          </ul>
        </div>
        <div class="information">
          <h5>{{ footerList.information.title }}</h5>
          <ul>
            <li
              v-for="(content, a) in footerList.information.items"
              :key="footerList.information.items[a]"
            >
              {{ content }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: #f5f7fa;
  padding: 100px 0;
  .container {
    display: flex;
    justify-content: space-around;
    .left-content {
      .adress {
        h5 {
          color: #353535;
        }
        p {
          color: #6e6e6e;
        }
      }
      .social {
        color: #6e6e6e;
        display: flex;
        gap: 20px;

        img {
          height: 20px;
          width: 20px;
        }
      }
    }
    .right-content {
      display: flex;
      gap: 60px;

      .tutoring {
        padding-top: 26px;
      }

      h5 {
        color: #353535;
        margin-bottom: 30px;
      }

      ul {
        padding: 0;

        li {
          color: #6e6e6e;
          list-style: none;
          padding: 0;
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
