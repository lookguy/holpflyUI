<template>
  <button
    class="hopefly-switch"
    :class="classesSwitch"
    :disabled="disabled"
    v-bind="rest"
    @click="toggle"
  >
    <span></span>
  </button>
</template>
<script lang="ts">
import { computed, ref } from "vue";
export default {
  inheritAttrs: false,
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "default",
    },
  },
  setup(props, context) {
    const {...rest} = context
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    const classesSwitch = computed(() => {
      return {
        [`hopefly-switch_${props.size}`]: props.size,
        checked: props.value,
      };
    });
    return { toggle, classesSwitch,rest };
  },
};
</script>
<style lang="scss">
@import "./config-color.scss";
$h: 22px;
$hs: 16px;
$h2: $h - 4px;
$h2s: $hs - 3px;
.hopefly-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: $deepbgColor;
  border-radius: $h / 2;
  position: relative;
  margin: 5px;
  &.checked {
    background: $MainColor;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    background: $bgColor;
    &.checked {
      background: $MainColorHover;
    }
  }
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: left 0.25s;
  }
  &.hopefly-switch_small {
    height: $hs;
    width: $hs * 2;
    border-radius: $hs / 2;
    &.checked {
      > span {
        left: calc(100% - #{$h2s} - 2px);
      }
    }
    > span {
      height: $h2s;
      width: $h2s;
      border-radius: $h2s / 2;
    }
  }
}
</style>