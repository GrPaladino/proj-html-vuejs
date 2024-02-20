<script>
import AppHero from "./AppHero.vue";
import AppCard12 from "./AppCard1-2.vue";
import AppCategoryCard from "./AppCategoryCard.vue";
import AppProductCard from "./AppProductCard.vue";

import { store } from "../store";

export default {
  data() {
    return {
      store,
      infos: [
        {
          title: "Free Delivery",
          description: "Free Shipping On All Order",
          img: "truck.svg",
        },
        {
          title: "Money Return",
          description: "Back Guarantee in 7 Days",
          img: "sack-dollar.svg",
        },
        {
          title: "Member Discount",
          description: "On every order over $130.00",
          img: "member-discount.svg",
        },
        {
          title: "Return Policy",
          description: "Support 24 hours a day",
          img: "hand-holding-dollar-solid.svg",
        },
      ],
    };
  },

  components: {
    AppHero,
    AppCard12,
    AppCategoryCard,
    AppProductCard,
  },
};
</script>

<template>
  <app-hero />
  <div class="info-section container">
    <div class="row">
      <div v-for="info in infos" class="col-3 policy-tag">
        <img :src="store.getImage(info.img)" alt="" />
        <div class="info">
          <h6>{{ info.title }}</h6>
          <p>{{ info.description }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row g-2">
      <app-card12
        v-for="game in store.primaryGames"
        :product="game"
        class="col-6"
      />
    </div>
  </div>

  <section class="category container">
    <h2>Special Category</h2>
    <div class="line"></div>
    <div class="row g-3">
      <app-category-card
        v-for="special in store.specials"
        :product="special"
        class="col-4"
      />
    </div>
  </section>

  <section class="product">
    <h2>Our Products</h2>
    <div class="line"></div>
    <div class="toggle">
      <h4>Feature</h4>
      <h4>New Arrival</h4>
      <h4>Best Sellers</h4>
    </div>
    <div class="container">
      <div class="row g-3 product-line">
        <app-product-card
          v-for="product in store.products"
          :product="product"
          class="col-3"
        />
        <div class="arrow arrow-left">
          <font-awesome-icon
            icon="fa-solid fa-chevron-left"
            size="lg"
            class="icon"
          />
        </div>
        <div class="arrow arrow-right">
          <font-awesome-icon
            icon="fa-solid fa-chevron-right"
            size="lg"
            class="icon"
          />
        </div>
      </div>
      <div class="row">
        <app-card12
          v-for="game in store.secondaryGames"
          :product="game"
          class="col-6"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;
.info-section {
  min-height: 100px;
  color: $mainWhite;
  padding: 15px 12px;
  font-size: 0.9rem;

  @include d-flex-center;
  .row {
    width: 100%;
    @include d-flex-center;

    .col-3 {
      display: flex;
      align-items: center;

      img {
        width: 20%;
        background-color: $mainWhite;
        padding: 5px;
        margin-right: 10px;
      }

      img:hover {
        background-color: $mainYellow;
      }

      .info {
        h6 {
          margin: 0;
          padding: 3px 0;
        }

        h6:hover {
          color: $mainYellow;
        }

        p {
          margin: 0;
          padding: 3px 0;
          font-size: 0.8rem;
          color: $mainGrey;
        }
      }
    }
  }
}

section.category,
section.product {
  text-align: center;
  color: $mainWhite;
  margin: 3rem auto;

  .line {
    max-width: 50px;
    height: 3px;
    background-color: $mainYellow;
    margin: 1rem auto;
  }
}

.product {
  .toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin: 0 auto;

    h4 {
      width: calc(100% / 3);
      padding: 15px;
      border: 1px solid rgb(63, 62, 62);
      font-size: 0.9rem;
      margin-bottom: 2rem;
    }

    h4:hover {
      color: $mainYellow;
    }
  }
  .product-line {
    overflow-x: hidden;
    flex-wrap: nowrap;

    position: relative;

    .arrow.arrow-left {
      position: absolute;
      top: 34%;
    }
    .arrow.arrow-right {
      position: absolute;
      top: 34%;
      right: 0;
    }

    .arrow:hover {
      color: $mainYellow;
      border: 1px solid $mainYellow;
    }

    .arrow {
      border-radius: 50%;
      border: 1px solid $mainGrey;

      width: 30px;
      height: 30px;

      .icon {
        margin: auto;
        padding-top: 5px;
      }
    }
  }
}
</style>
