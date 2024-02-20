<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  // todo ############################ COMPLETARE FOOTER ###########################
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="row g-3">
        <div class="col-3"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

.wrapper {
  height: 350px;
  background-image: url("../assets/img/footer-bg.png");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  .container {
    height: 100%;

    .row {
      @include d-flex-center;
    }
  }
}
</style>
