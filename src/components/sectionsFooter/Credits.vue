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
      <div class="footer-content">
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
      <p class="text-center">© 2020 Maxcoach. All Rights Reverved</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variables.scss" as *;
.wrapper {
  background-color: $bgColor;
  padding: 100px 0 50px;
  .container {
    .footer-content {
      display: flex;
      justify-content: space-around;
      .left-content {
        .adress {
          h5 {
            color: $titleColor;
          }
          p {
            color: $textColor;
          }
        }
        .social {
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
          color: $titleColor;
          margin-bottom: 30px;
        }

        ul {
          padding: 0;

          li {
            color: $textColor;
            list-style: none;
            padding: 0;
            margin-bottom: 20px;
            cursor: pointer;

            &:hover {
              color: $buttonColor;
            }
          }
        }
      }
    }
    .text-center {
      color: $textColor;
      margin-top: 70px;
    }
  }
}
</style>
