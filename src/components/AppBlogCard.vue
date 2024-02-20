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
  <div class="wrapper">
    <img
      @mouseenter="getHoverVisible()"
      @mouseleave="getHoverHide()"
      :src="store.getImage(product.img)"
      class="card-img-top"
      :alt="product.name"
    />
    <div v-if="hover" class="hover-icon">
      <font-awesome-icon icon="fa-solid fa-plus" size="lg" class="left" />
      <font-awesome-icon icon="fa-solid fa-link" size="lg" class="right" />
    </div>
    <div class="card-body">
      <div class="icons">
        <font-awesome-icon
          icon="fa-solid fa-calendar-days"
          size="xs"
          class="font-awesome"
        />
        <span>{{ product.date }}</span>
        <font-awesome-icon
          icon="fa-solid fa-comments"
          size="xs"
          class="font-awesome"
        />
        <span>{{ product.comment }}</span>
      </div>

      <div class="card-text">
        {{ product.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

.wrapper {
  .hover-icon {
    position: relative;
    top: -37%;
  }
  .hover-icon .left,
  .hover-icon .right {
    width: 20px;
    height: 20px;
    padding: 5px;
    margin: 0 5px;
    border-radius: 50%;
    border: 1px solid $mainGrey;
  }
}

.card-body {
  margin: 10px 0;
  text-align: start;
  font-size: 0.8rem;

  .icons {
    height: 30px;
    color: $mainGrey;

    .font-awesome {
      color: $mainYellow;
    }

    span {
      margin-right: 15px;
      margin-left: 5px;
    }
  }

  .card-text {
    font-weight: bold;
    margin-top: -11px;
  }
}
</style>
