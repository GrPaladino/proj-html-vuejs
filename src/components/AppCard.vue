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
// TODO: COMPLETARE CARD #################################################################################################
</script>

<template>
  <div class="wrapper">
    <img :src="store.getImage(product.img)" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}
</style>
