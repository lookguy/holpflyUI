<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";
import router from "./router";

export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 750 ? false : true);
    provide("menuVisible", menuVisible);

    router.beforeEach(() => {
      if (width <= 750) {
        menuVisible.value = false;
      }
    });
  },
};
</script>
