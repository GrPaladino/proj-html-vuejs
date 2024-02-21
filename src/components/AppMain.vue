<script>
import AppHero from "./AppHero.vue";
import AppCard12 from "./AppCard1-2.vue";
import AppCategoryCard from "./AppCategoryCard.vue";
import AppProductCard from "./AppProductCard.vue";
import AppBlogCard from "./AppBlogCard.vue";
import AppFooter from "./AppFooter.vue";

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

      hover: false,
    };
  },

  components: {
    AppHero,
    AppCard12,
    AppCategoryCard,
    AppProductCard,
    AppBlogCard,
    AppFooter,
  },

  methods: {
    getHoverVisible() {
      this.hover = true;
    },

    getHoverHide() {
      this.hover = false;
    },
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
        <div class="tag">
          <span>- 44%</span>
        </div>
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
          class="col-6 mb-2"
        />
      </div>
    </div>
  </section>

  <section class="deal">
    <h2>Deal Of The Day</h2>
    <div class="line"></div>
    <div class="toggle">
      <h4>1026 days</h4>
      <h4>13 hours</h4>
      <h4>24 mins</h4>
      <h4>17 secs</h4>
    </div>
    <div class="container">
      <div class="row g-3 product-line">
        <div class="tag">
          <span>- 44%</span>
        </div>
        <app-product-card
          v-for="product in store.productsDeal"
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
    </div>
  </section>

  <section class="web-designer">
    <div class="container">
      <div class="img-tag">
        <img src="../assets/img/t5-1-100x100_left.jpg" alt="" />
        <div class="quote">
          <img src="../assets/img/quote.png" alt="" />
        </div>
      </div>
      <div class="name">
        <span class="me-2">Luies Charles</span>
        <span class="yellow">(Web Designer)</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, aut!
        Veritatis asperiores, quidem quasi dicta excepturi numquam tenetur
        blanditiis adipisci quia, incidunt porro sunt ea perferendis odit
        quibusdam? Dolorum, exercitationem? Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Itaque necessitatibus totam minima
      </p>
      <div class="dots">
        <div v-for="i in 3" class="dot"></div>
      </div>
    </div>
  </section>

  <section class="blog">
    <h2>New Game Blog</h2>
    <div class="line"></div>
    <div class="container blog">
      <div class="row g-3">
        <app-blog-card
          @mouseenter="getHoverVisible()"
          @mouseleave="getHoverHide()"
          v-for="card in store.blogCards"
          :product="card"
          class="col-4"
        />
      </div>
      <div v-if="hover" class="arrow arrow-left">
        <font-awesome-icon
          icon="fa-solid fa-chevron-left"
          size="lg"
          class="icon"
        />
      </div>
      <div v-if="hover" class="arrow arrow-right">
        <font-awesome-icon
          icon="fa-solid fa-chevron-right"
          size="lg"
          class="icon"
        />
      </div>
    </div>
    <div class="container">
      <div class="brand-icons row g-3">
        <img
          v-for="brand in store.brandIcons"
          :src="store.getImage(brand)"
          class="col-2"
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
section.product,
section.deal,
section.blog {
  text-align: center;
  color: $mainWhite;
  margin: 3rem auto;
}
.line {
  max-width: 50px;
  height: 3px;
  background-color: $mainYellow;
  margin: 1rem auto;
}

.product,
.deal {
  .toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 300px;
    max-width: 500px;
    margin: 0 auto;
    margin-top: 3rem;

    h4 {
      width: calc(100% / 3);
      padding: 15px;
      border: 1px solid rgb(63, 62, 62);
      font-size: 0.9rem;
      margin-bottom: 2rem;
      cursor: pointer;
    }

    h4:hover {
      color: $mainYellow;
    }
  }
  .product-line {
    overflow-x: hidden;
    flex-wrap: nowrap;

    position: relative;

    .tag {
      width: 40px;
      height: 20px;
      background-color: $mainYellow;
      font-size: 0.7rem;
      padding: 2px 0;
      margin: 0;

      position: absolute;
      top: 25px;
      left: 15px;

      span {
        color: black;
      }
    }
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
        cursor: pointer;
      }
    }
  }
}

.web-designer {
  height: 500px;
  background-image: url("../assets/img/parallax.jpg");
  background-size: cover;
  background-position: bottom;

  .container {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .img-tag {
      width: 100px;
      height: 100px;

      position: relative;

      img {
        border-radius: 50%;
        border: 2px solid $mainYellow;
      }

      .quote {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 13px;
        left: -13px;

        img {
          border-radius: 50%;
          background-color: $mainYellow;
          padding: 4px;
        }
      }
    }

    .name {
      margin-top: 2rem;
      color: $mainWhite;
      font-size: 0.9rem;
      font-weight: bolder;

      .yellow {
        color: $mainYellow;
      }
    }

    p {
      max-width: 800px;
      text-align: center;
      font-size: 0.9rem;
      color: $mainGrey;
      margin: 2rem 0;
    }

    .dots {
      @include d-flex-center;

      .dot {
        width: 10px;
        height: 10px;
        background-color: $mainWhite;
        border-radius: 50%;
        margin: 0 5px;
      }

      .dot:hover {
        background-color: $mainYellow;
      }
    }
  }
}
.container.blog {
  height: 350px;
  border-bottom: 1px solid $mainGrey;
  position: relative;

  .arrow.arrow-left {
    position: absolute;
    top: 34%;
    left: 0;
  }
  .arrow.arrow-right {
    position: absolute;
    top: 34%;
    right: 0;
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

.container .brand-icons {
  height: 200px;
  @include d-flex-center;
  justify-content: center;
}
</style>
