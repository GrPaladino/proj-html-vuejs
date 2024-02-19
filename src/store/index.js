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
});
