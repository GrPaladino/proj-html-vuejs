import { reactive } from "vue";

export const store = reactive({
  getImage(path) {
    return new URL("../assets/img/" + path, import.meta.url).href;
  },

  primaryGames: [
    {
      category: "Most Popular",
      name: "The Battlefield 4 Naval Strike",
      img: "cms-banner-01.jpg",
    },

    {
      category: "Latest Game",
      name: "Assassin's Creed Unity Game",
      img: "cms-banner-02.jpg",
    },
  ],

  secondaryGames: [
    {
      category: "20% Discount",
      name: "Dragon's Dogma Video Game",
      img: "cms-banner-03.jpg",
    },

    {
      category: "30% Discount",
      name: "World of Tanks New Game",
      img: "cms-banner-04.jpg",
    },
  ],

  specials: [
    {
      img: "category2.jpg",
      name: "Batman",
    },

    {
      img: "category1.jpg",
      name: "Bayonetta",
    },

    {
      img: "category3.jpg",
      name: "Dark Souls",
    },
  ],

  products: [
    {
      img: "04-300x300.jpg",
      imgHover: "15-300x300.jpg",
      vote: 4,
      name: "Shopping Mahjong connect",
      price: "€100.00",
      fullPrice: "€180.00",
    },

    {
      img: "09-300x300.jpg",
      imgHover: "06-300x300.jpg",
      vote: 0,
      name: "Buddy and Lucky Solitaire",
      price: "€83.00 - €90.00",
      fullPrice: "",
    },

    {
      img: "10-300x300.jpg",
      imgHover: "03-300x300.jpg",
      vote: 0,
      name: "Taishou x Alice Epilogue",
      price: "€160.00",
      fullPrice: "",
    },

    {
      img: "11-300x300.jpg",
      imgHover: "12-300x300.jpg",
      vote: 2,
      name: "Labyrinths of the World",
      price: "€110.00",
      fullPrice: "",
    },
    {
      img: "07-300x300.jpg",
      imgHover: "08-300x300.jpg",
      vote: 2,
      name: "buddy and Lucky Solitaire",
      price: "€110.00",
      fullPrice: "",
    },
    {
      img: "02-300x300.jpg",
      imgHover: "05-300x300.jpg",
      vote: 5,
      name: "BangBangShooting",
      price: "€110.00",
      fullPrice: "",
    },
  ],

  productsDeal: [
    {
      img: "09-300x300.jpg",
      imgHover: "06-300x300.jpg",
      vote: 0,
      name: "Buddy and Lucky Solitaire",
      price: "€83.00 - €90.00",
      fullPrice: "",
    },

    {
      img: "04-300x300.jpg",
      imgHover: "15-300x300.jpg",
      vote: 4,
      name: "Shopping Mahjong connect",
      price: "€100.00",
      fullPrice: "€180.00",
    },
    {
      img: "02-300x300.jpg",
      imgHover: "05-300x300.jpg",
      vote: 5,
      name: "BangBangShooting",
      price: "€110.00",
      fullPrice: "",
    },

    {
      img: "11-300x300.jpg",
      imgHover: "12-300x300.jpg",
      vote: 2,
      name: "Labyrinths of the World",
      price: "€110.00",
      fullPrice: "",
    },

    {
      img: "07-300x300.jpg",
      imgHover: "08-300x300.jpg",
      vote: 2,
      name: "buddy and Lucky Solitaire",
      price: "€110.00",
      fullPrice: "",
    },
  ],

  blogCards: [
    {
      img: "Nisi-ut-aliquid-ex-ea-com.jpg",
      date: "Jan 18, 2021",
      comment: "0 Comment",
      name: "Anyway REPS is a NYC agency repres enting photographers",
    },
    {
      img: "Illo-inventore-veritatis-quasi.jpg",
      date: "May 30, 2021",
      comment: "0 Comment",
      name: "Nasual risus suscipit Lorem Ipsum is simply text",
    },
    {
      img: "At-vero-eos-et-accusamus.jpg",
      date: "Apr 13, 2021",
      comment: "0 Comment",
      name: "Nostrum Iesum Christum Lorem Ipsus is simply text",
    },
  ],

  brandIcons: [
    "brand-01.png",
    "brand-02.png",
    "brand-03.png",
    "brand-04.png",
    "brand-05.png",
  ],

  footerLinks: [
    {
      title: "Information",
      link1: "Bookmark",
      link2: "Features",
      link3: "Sitemap",
      link4: "Lists",
      link5: "Contact Us",
    },
    {
      title: "Extras",
      link1: "Delivery",
      link2: "Cart",
      link3: "Terms Conditions",
      link4: "My Account",
      link5: "About Us",
    },
  ],

  paymentsMethods: [
    "svg/american-express-svgrepo-com 10.39.13.svg",
    "svg/discover-3-svgrepo-com 10.39.13.svg",
    "svg/mastercard-svgrepo-com 10.39.13.svg",
    "svg/paypal-svgrepo-com.svg",
    "svg/visa-3-svgrepo-com 10.39.13.svg",
  ],
});
