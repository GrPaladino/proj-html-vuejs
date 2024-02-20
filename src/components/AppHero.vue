<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
      hoverButton: false,
    };
  },
};
</script>

<template>
  <div class="hero">
    <div class="container">
      <h3>Upcoming Stock</h3>
      <h2>Resident Evil 3 Remake</h2>
      <button class="btn btn-light">Shop now</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;
.hero {
  height: 800px;
  //   Immagine placeholder
  background-image: url("https://placehold.co/1500x800");
  .container {
    height: 100%;

    display: flex;
    justify-content: center;
    flex-direction: column;

    h3 {
      max-width: 220px;
      padding: 15px 0;
      text-align: center;
      background-color: $mainYellow;
      color: black;
      font-weight: bold;
    }

    h2 {
      color: $mainWhite;
      font-weight: 900;
      font-size: 3rem;
      max-width: 300px;
      margin: 2rem 0;
    }

    button {
      max-width: 90px;
      border-radius: 0%;
      font-weight: bold;
    }
    button:hover {
      background-color: $mainYellow;
    }
  }
}
</style>
