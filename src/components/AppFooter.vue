<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="upper-footer">
        <div class="row g-3">
          <div class="col-3">
            <div class="info">
              <h4>Address Info</h4>
              <ul>
                <li>
                  <font-awesome-icon
                    icon="fa-solid fa-location-dot"
                    size="2xs"
                    class="icon"
                  />
                  <span
                    >60 29th Street San Francisco, CA 94111 507-Union Trade
                    Center, United States of America</span
                  >
                </li>
                <li>
                  <font-awesome-icon
                    icon="fa-solid fa-phone"
                    size="2xs"
                    class="icon"
                  />
                  <span>(+00) 123-456-789</span>
                </li>
                <li>
                  <font-awesome-icon
                    icon="fa-solid fa-envelope"
                    size="2xs"
                    class="icon"
                  />
                  <span>demo@example.com</span>
                </li>
              </ul>
            </div>
          </div>
          <ul v-for="link in store.footerLinks" class="col-3">
            <h4>{{ link.title }}</h4>
            <li>
              <a href="#">{{ link.link1 }}</a>
            </li>
            <li>
              <a href="#">{{ link.link2 }}</a>
            </li>
            <li>
              <a href="#">{{ link.link3 }}</a>
            </li>
            <li>
              <a href="#">{{ link.link4 }}</a>
            </li>
            <li>
              <a href="#">{{ link.link5 }}</a>
            </li>
          </ul>

          <div class="newsletter col-3">
            <h4>Our Newsletter</h4>
            <p>
              There are many variation on passages of form humor or randomized
            </p>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
              <span class="input-group-text" id="addon-wrapping"
                ><font-awesome-icon icon="fa-solid fa-paper-plane" />
              </span>
            </div>
            <div class="socials">
              <ul class="d-flex">
                <li>
                  <a href="#"
                    ><font-awesome-icon
                      icon="fa-brands fa-facebook-f"
                      size="sm"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><font-awesome-icon icon="fa-brands fa-twitter" size="sm"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><font-awesome-icon
                      icon="fa-brands fa-google-plus-g"
                      size="sm"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><font-awesome-icon icon="fa-brands fa-skype" size="sm"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><font-awesome-icon icon="fa-brands fa-instagram" size="sm"
                  /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="bottom-footer">
        <div class="copyrights">
          <p>
            Copyright
            <span
              ><font-awesome-icon icon="fa-solid fa-copyright" size="xs"
            /></span>
            2023 Codezeel
          </p>
        </div>
        <div class="payments d-flex">
          <img
            v-for="img in store.paymentsMethods"
            :src="store.getImage(img)"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

.wrapper {
  height: 350px;
  background-image: url("../assets/img/footer-bg.png");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  .container {
    height: 100%;
    .upper-footer {
      height: 90%;
      .row {
        @include d-flex-center;
        height: 100%;
        border-bottom: 1px solid $mainGrey;

        .info {
          margin-top: -30px;
          span {
            color: $mainGrey;
          }
        }

        h4 {
          font-size: 1rem;
          font-weight: bolder;
          color: $mainWhite;
          margin-bottom: 1.5rem;
          height: 100%;
        }

        li,
        p {
          display: flex;
          margin-bottom: 0.5rem;
          font-size: 0.7rem;
        }

        li:hover {
          color: $mainYellow;
        }

        .icon {
          color: $mainYellow;
          margin-right: 1rem;
          margin-top: 5px;
        }

        .form-control,
        .input-group-text {
          height: 28px;
          margin: 10px 0;
        }

        .socials {
          margin-top: 0.6rem;
          color: $mainWhite;

          li {
            margin-right: 1.2rem;
            font-size: 0.9rem;
            font-weight: bold;
          }
        }
      }
    }

    .bottom-footer {
      height: 10%;
      @include d-flex-center;

      p {
        font-size: 0.7rem;
        margin: 0;

        span {
          margin: 0 3px;
        }
      }

      .payments img {
        width: 25px;
        margin-left: 0.5rem;
      }

      .payments img:hover {
        color: $mainYellow;
      }
    }
  }
}
</style>
