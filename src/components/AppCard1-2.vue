<script>
import { store } from "../store";

export default {
  data() {
    return { store };
  },

  props: {
    product: Object,
  },
};
</script>

<template>
  <div class="game">
    <img :src="store.getImage(product.img)" alt="" />
    <div class="info">
      <h4>{{ product.category }}</h4>
      <h3>{{ product.name }}</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
.game {
  min-height: 200px;
  position: relative;

  .info {
    position: absolute;
    right: 10px;
    top: 80px;

    h4 {
      max-width: 180px;
      background-color: $mainYellow;
      color: black;
      font-weight: bolder;
      padding: 5px 10px;
      text-align: center;
      font-style: italic;
    }

    h3 {
      font-size: 2rem;
      text-align: start;
      font-weight: bold;
      max-width: 270px;
      padding: 5px 18px;
      padding-left: 0;
      margin-top: 10px;

      color: $mainWhite;
    }
  }
}
</style>
