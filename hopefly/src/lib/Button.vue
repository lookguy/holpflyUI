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
    ghost: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const { ...rest } = context.attrs;
    const { theme, size, ghost, danger } = props;
    const classes = computed(() => {
      return {
        [`hopefly-theme-${theme}`]: theme,
        [`hopefly-size-${size}`]: size,
        "hopefly-ghost": ghost,
        "hopefly-danger": danger,
      };
    });
    return { rest, classes };
  },
};
</script>

<style lang="scss">
@import "./config-color.scss";
$fz: 16px;
.hopefly-button {
  font-size: $fz;
  color: $fontColor;
  line-height: 1;
  padding: 0.4em 1em;
  border: 1px solid $fontColor;
  margin: 10px 12px;
  border-radius: 3px;
  outline-color: $MainColor;
  transition: background-color 0.2s ease-in;
  &.hopefly-theme- {
    &button {
      background: white;
      &:hover {
        border: 1px solid $MainColor;
        color: $MainColor;
      }
    }
    &primary {
      background: $MainColor;
      border-color: $MainColor;
      color: white;
      &:hover {
        background: $MainColorHover;
        border: 1px solid $MainColorHover;
      }
    }
    &text {
      background: none;
      border: none;
    }
    &link {
      background: none;
      color: #19b5fe;
      border: none;
    }
  }
  &.hopefly-size- {
    &large {
      font-size: $fz * 1.4;
    }
    &normal {
      font-size: $fz * 1;
    }
    &small {
      font-size: $fz * 0.75;
    }
  }
  &.hopefly-ghost {
    background: none;
  }
  &.hopefly-danger {
    border-color: #f03434;
    color: #f03434;
  }
}
</style>
