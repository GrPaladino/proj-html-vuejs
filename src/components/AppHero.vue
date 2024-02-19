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
.hero {
  height: 800px;
  //   Immagine placeholder
  background-image: url("https://placehold.co/1500x800");
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;

    h3 {
      max-width: 220px;
      padding: 15px 0;
      text-align: center;
      background-color: #f7ab00;
      color: black;
      font-weight: bold;
    }

    h2 {
      color: white;
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
      background-color: #f7ab00;
    }
  }
}
</style>
