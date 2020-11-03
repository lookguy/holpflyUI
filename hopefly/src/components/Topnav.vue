<template>
  <div class="topNav">
    <span class="menu-icon" @click="toggleMenu">展开</span>
    <div class="logo">LOGO</div>
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
  display: grid;
  grid-template-rows: 4rem;
  grid-template-columns: 15em auto;
  height: 4rem;
  line-height: 4rem;
  position: relative;
  z-index: 11;
  background: white;
  border-bottom: 1px solid rgb(165, 165, 165);
  .menu-icon {
    display: none;
  }
  .logo {
    font-size: 2.6rem;
  }
  .menu {
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    >li{
      padding: 0 1em;
    }
  }
  @media screen and (max-width: 750px) {
    display: flex;
    box-sizing: border-box;
    position: relative;
    .menu-icon {
      display: inline-block;
      position: absolute;
      left: 1em;
      top: 50%;
      transform: translateY(-50%);
    }
    .logo {
      border: 1px solid;
      margin: 0 auto;
    }
    .menu {
      display: none;
    }
  }
}
</style>