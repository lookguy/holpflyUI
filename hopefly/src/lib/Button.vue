<template>
  <button v-bind="rest" class="hopefly-button" :class="classes">
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from "vue";
export default {
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
  },
  setup(props, context) {
    const { theme, size } = props;
    const classes = computed(() => {
      return {
        [`hopefly-theme-${theme}`]: theme,
        [`hopefly-theme-${size}`]: size,
      };
    });
    const { ...rest } = context.attrs;
    return { rest, classes };
  },
};
</script>

<style lang="scss">
</style>
