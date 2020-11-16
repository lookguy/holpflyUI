<template>
  <button
    v-bind="rest"
    class="hopefly-button"
    :class="classes"
    :disabled="disabled"
  >
    <span v-if="loading" class="hopefly-loadingIndicator"></span>
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
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const { ...rest } = context.attrs;
    const { theme, size, ghost, danger, loading } = props;
    const classes = computed(() => {
      return {
        [`hopefly-theme-${theme}`]: theme,
        [`hopefly-size-${size}`]: size,
        "hopefly-ghost": ghost,
        "hopefly-danger": danger,
        "hopefly-loading": loading,
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
  line-height: 1;
  padding: 0.4em 1em;
  margin: 10px 12px;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  border: 1px solid;
  transition: background-color 0.3s ease-out, color 0.2s ease-out,
    border-color 0.2s ease-out;
  &.hopefly-theme- {
    &button {
      color: $fontColor;
      background: white;
      border-color: $fontColor;
      &:hover {
        border-color: $MainColor;
        color: $MainColor;
      }
      &:active {
        border-color: $DeepMainColor;
        color: $DeepMainColor;
      }
    }
    &primary {
      color: white;
      background: $MainColor;
      border-color: $MainColor;
      &:hover {
        background: $MainColorHover;
        border-color: $MainColorHover;
      }
      &:active {
        background: $DeepMainColor;
      }
    }
    &text {
      background: none;
      border: none;
      &:active {
        background: #f2f1ef;
      }
    }
    &link {
      background: none;
      color: $MainColorHover;
      border: none;
      &:active {
        color: $MainColor;
      }
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
    &.hopefly-theme- {
      &primary {
        @extend .hopefly-ghost;
        color: $MainColor;
        &:hover {
          color: $MainColor;
          border-color: $MainColor;
        }
        &:active {
          color: $DeepMainColor;
          border-color: $DeepMainColor;
        }
      }
    }
  }
  &.hopefly-danger {
    border-color: $DangerColor;
    color: $DangerColor;
    outline: none;
    &.hopefly-theme-primary {
      background: $DangerColor;
      color: white;
      &:hover {
        border-color: $DangerColorHover;
        color: white;
      }
      &:active {
        border-color: $DeepDangerColor;
      }
    }
    &:hover {
      border-color: $DangerColorHover;
      color: $DangerColorHover;
    }
    &:active {
      border-color: $DeepDangerColor;
      color: $DeepDangerColor;
    }
  }
  &.hopefly-loading {
    > .hopefly-loadingIndicator {
      width: 0.8em;
      height: 0.8em;
      display: inline-block;
      margin-right: 4px;
      border-radius: 0.5em;
      border-color: white white white transparent;
      border-style: solid;
      border-width: 2px;
      animation: holpfly-spin 1s infinite linear;
    }
    &.hopefly-theme-button {
      > .hopefly-loadingIndicator {
        border-color: $fontColor $fontColor $fontColor transparent;
      }
      &.hopefly-danger {
        > .hopefly-loadingIndicator {
          border-color: $DangerColor $DangerColor $DangerColor transparent;
        }
      }
    }
    &.hopefly-theme-primary {
      &.hopefly-ghost {
        > .hopefly-loadingIndicator {
          border-color: $MainColor $MainColor $MainColor transparent;
        }
      }
    }
  }
  &:disabled {
    cursor: not-allowed;
    color: $fontColor;
    opacity: 0.9;
    outline: none;
  }
}
@keyframes holpfly-spin {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
