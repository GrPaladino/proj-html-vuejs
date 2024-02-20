<script>
import AppHero from "./AppHero.vue";
import AppCard12 from "./AppCard1-2.vue";
import AppCategoryCard from "./AppCategoryCard.vue";

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

section.category {
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
</style>
