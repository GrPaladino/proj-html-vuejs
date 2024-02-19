<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
      links: ["Home", "Shop", "Blog", "Media", "Shortcode", "Features"],
    };
  },

  methods: {},
};
</script>

<template>
  <div class="header">
    <div class="upper-header">
      <div class="container">
        <div class="left">
          <ul>
            <li>
              <a href="#">Wishlist (0)</a>
            </li>
            <li>
              <a href="#"
                >Need Help?
                <font-awesome-icon icon="fa-solid fa-chevron-down" size="2xs" />
              </a>
            </li>
          </ul>
        </div>
        <div class="right">
          <a href="#">Call 24/7 800-8754-987</a>
        </div>
      </div>
    </div>
    <div class="bottom-header">
      <div class="container">
        <div class="logo">
          <img :src="store.getImage('logo.png')" alt="" />
        </div>
        <div class="links">
          <ul>
            <li v-for="(link, index) in links">
              <a :class="index == 0 ? 'yellow' : ''" href="#">{{ link }}</a>
            </li>
          </ul>
        </div>

        <div class="rigth-items">
          <ul>
            <li>
              <a href="#"
                ><font-awesome-icon icon="fa-solid fa-magnifying-glass"
              /></a>
            </li>

            <li>
              <a href="#"><font-awesome-icon icon="fa-solid fa-user" /></a>
            </li>

            <li>
              <a href="#"
                ><font-awesome-icon icon="fa-solid fa-bag-shopping" />
                <span class="yellow ms-2">(0) $0.00</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  min-height: 100px;
  .upper-header {
    height: 30%;
    border-bottom: 1px solid grey;
    padding: 10px 0;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      ul {
        display: flex;
        li {
          margin-right: 2rem;
        }
      }
    }
  }

  .bottom-header {
    height: 70%;
    padding: 20px 0;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        max-width: 300px;
      }

      ul {
        display: flex;
        li {
          margin-right: 2rem;
          .yellow {
            color: #f9aa00;
          }
        }
      }
    }
  }
}
</style>
