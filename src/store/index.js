import { reactive } from "vue";

export const store = reactive({
  getImage(path) {
    return new URL("../assets/img/" + path, import.meta.url).href;
  },
});
