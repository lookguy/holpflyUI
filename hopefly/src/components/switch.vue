<template>
  <Switch v-model:value="z" />
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
  setup() {
    const z = ref(true);
    return { z };
  },
  components: {
    Switch,
  },
};
</script>