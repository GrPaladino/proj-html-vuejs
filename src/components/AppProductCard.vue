<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
      hover: false,
    };
  },

  methods: {
    getHoverVisible() {
      this.hover = true;
    },

    getHoverHide() {
      this.hover = false;
    },
  },

  props: {
    product: Object,
  },
};
</script>

<template>
  <div
    @mouseenter="getHoverVisible()"
    @mouseleave="getHoverHide()"
    class="wrapper"
  >
    <img v-if="hover" :src="store.getImage(product.imgHover)" alt="" />
    <img v-else :src="store.getImage(product.img)" alt="" />

    <div class="bottom">
      <div class="star">
        <font-awesome-icon
          v-for="index in product.vote"
          icon="fa-solid fa-star fs-1"
          class="star-checked"
        />
        <font-awesome-icon
          v-for="index in 5 - product.vote"
          icon="fa-solid fa-star fs-1"
        />
      </div>
      <p class="py-2">{{ product.name }}</p>
      <div class="price">
        <div :class="!hover ? 'd-none' : ''" class="icons">
          <ul class="d-flex">
            <li>
              <a href="#"
                ><font-awesome-icon icon="fa-solid fa-bag-shopping" size="lg"
              /></a>
            </li>

            <li>
              <a href="#"
                ><font-awesome-icon icon="fa-solid fa-heart" size="lg"
              /></a>
            </li>
            <li>
              <a href="#"
                ><font-awesome-icon icon="fa-solid fa-maximize" size="lg"
              /></a>
            </li>
            <li>
              <a href="#"
                ><font-awesome-icon icon="fa-solid fa-eye" size="lg"
              /></a>
            </li>
          </ul>
        </div>
        <div :class="hover ? 'd-none' : ''" class="price-tag">
          <span v-if="product.fullPrice" class="dashed-price">{{
            product.fullPrice
          }}</span>
          <span class="final-price">{{ product.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

.wrapper {
  min-height: 400px;
}
.bottom {
  height: 25%;
  background-color: rgba(0, 0, 0, 0.3);
  text-align: start;
  padding: 15px;

  position: relative;

  .star {
    font-size: 0.7rem;
    .star-checked {
      color: $mainYellow;
    }
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 0;
  }

  .price {
    font-size: 0.7rem;

    .dashed-price {
      margin-right: 10px;
      color: $mainGrey;
      text-decoration: line-through;
    }

    .final-price {
      color: $mainYellow;
    }

    ul {
      width: 100%;

      position: absolute;
      bottom: 0;
      left: 0;
    }
    li {
      width: 25%;
      text-align: center;
      border-right: 2px solid $mainBgColor;
      border-top: 2px solid $mainBgColor;
      padding: 10px;
    }
  }
}
</style>
