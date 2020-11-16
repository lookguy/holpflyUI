<template>
  <h1>示例1</h1>
  <Switch v-model:value="z" />
  <h1>示例2-disabled</h1>
  <Switch v-model:value="z" disabled />
  <h1>示例3-size</h1>
  <Switch v-model:value="z" size="small" />
  <Switch v-model:value="z" size="normal" />
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