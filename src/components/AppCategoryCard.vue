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
    <img :src="store.getImage(product.img)" alt="" />
    <div class="bottom">
      <p class="mb-1">{{ product.name }}</p>
      <a href="#">Shop now</a>
    </div>
    <div v-if="hover" class="hover">
      <p>{{ product.name }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

.wrapper {
  position: relative;

  .bottom {
    width: 100%;
    height: 20%;
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    text-align: start;
    padding: 15px;

    a {
      text-decoration: underline;
      color: $mainYellow;
      font-size: 0.7rem;
    }
  }

  .hover {
    max-width: 60px;
    font-size: 0.7rem;
    padding: 5px;
    background-color: $mainWhite;
    opacity: 0.8;
    color: black;
    border-radius: 5px;

    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, 50%);

    p {
      margin: 0;
    }
  }
}
</style>
