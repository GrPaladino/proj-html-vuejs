<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },

  props: {
    product: Object,
  },
};
</script>

<template>
  <div class="wrapper">
    <img :src="store.getImage(product.img)" alt="" />
    <div class="bottom">
      <p class="mb-1">{{ product.name }}</p>
      <a href="#">Shop now</a>
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
}
</style>
