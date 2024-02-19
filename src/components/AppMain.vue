<script>
import AppHero from "./AppHero.vue";
import AppCard12 from "./AppCard1-2.vue";
import AppCard from "./AppCard.vue";

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
    AppCard,
  },
};
</script>

<template>
  <app-hero />
  <div class="info-section container">
    <div class="row">
      <div v-for="info in infos" class="col-3">
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
      <app-card
        v-for="special in store.specials"
        :product="special"
        class="col-4"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.info-section {
  min-height: 100px;
  color: white;
  padding: 15px 12px;
  font-size: 0.9rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  .row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .col-3 {
      display: flex;
      align-items: center;
      img {
        width: 25%;
        background-color: white;
        padding: 5px;
        margin-right: 10px;
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        h6 {
          margin: 0;
          padding: 5px 0;
        }
        p {
          margin: 0;
          padding: 5px 0;
          font-size: 0.8rem;
          color: #9b969f;
        }
      }
    }
  }
}

section.category {
  text-align: center;
  color: white;
  margin-top: 3rem;

  .line {
    max-width: 50px;
    height: 3px;
    background-color: #f7ab00;
    margin: 1rem auto;
  }
}
</style>
