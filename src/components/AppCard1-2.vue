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
.game {
  height: 200px;
  position: relative;

  .info {
    position: absolute;
    right: 10px;
    top: 80px;

    h4 {
      max-width: 160px;
      background-color: #f7ab00;
      color: black;
      font-weight: bolder;
      padding: 5px 10px;
      text-align: center;
    }

    h3 {
      font-size: 2rem;
      font-weight: bold;
      max-width: 270px;
      padding: 5px 18px;
      margin-top: 10px;

      color: white;
    }
  }
}
</style>
