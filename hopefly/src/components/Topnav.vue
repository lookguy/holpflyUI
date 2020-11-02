<template>
  <div class="topNav">
    <div class="logo" @click="toggleMenu">LOGO</div>
    <ul class="menu">
      <li>导航111</li>
      <li>导航2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>

<style lang="scss" scoped>
.topNav {
  border: 1px solid red;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 300px auto;
  min-height: 3rem;
  position: relative;
  z-index: 11;
  background: white;
  .logo {
    font-size: 2.6rem;
  }
  .menu {
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 0 1rem;
    > * {
      padding: 0 2rem;
    }
  }
}
</style>