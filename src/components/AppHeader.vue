<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
      links: ["Home", "Shop", "Blog", "Media", "Shortcode", "Features"],

      hover: false,
      i: 6,
    };
  },

  methods: {
    getHoverVisible() {
      this.hover = true;
    },

    getHoverHide() {
      this.hover = false;
    },

    showForm(i) {
      this.i = i;
    },

    hideForm() {
      this.i = 6;
    },
  },
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
            <li
              @mouseenter="getHoverVisible()"
              @mouseleave="getHoverHide()"
              v-for="(link, index) in links"
              class="main-link p-relative"
            >
              <a @mouseenter="showForm(index)" href="#">{{ link }}</a>

              <div
                :class="index == i ? 'd-block' : 'd-none'"
                @mouseleave="hideForm()"
                class="form-hover"
              >
                <li><a href="#">Left Sidebar</a></li>
                <li><a href="#">Right Sidebar</a></li>
                <li><a href="#">Full Width</a></li>
              </div>
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
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

.header {
  min-height: 100px;

  .p-relative {
    position: relative;
  }

  ul {
    display: flex;

    li {
      width: 90px;
      margin: 0;
      text-align: center;
    }

    li:hover {
      color: $mainYellow;
    }

    .form-hover {
      width: 90px;
      padding: 10px;
      background-color: $mainBgColor;
      display: flex;
      flex-direction: column;

      position: absolute;
      top: 25px;
      left: 0;

      li {
        text-align: start;
        margin: 0;
        color: $mainGrey;
      }

      li:hover {
        color: $mainYellow;
      }
    }
  }
  .upper-header {
    height: 30%;
    border-bottom: 1px solid grey;
    padding: 10px 0;

    .container {
      @include d-flex-center;

      li {
        margin-right: 2rem;
      }
    }
  }

  .bottom-header {
    height: 70%;
    padding: 20px 0;

    .container {
      @include d-flex-center;

      .logo {
        max-width: 300px;
      }

      .yellow {
        color: $mainYellow;
      }

      .rigth-items ul {
        @include d-flex-center;
        & li {
          width: 0px;
          margin-left: 2rem;
        }

        li:last-child {
          width: 73px;
        }
      }
    }
  }
}
</style>
