<template>
  <Topnav />
  <div>
    <div class="topNav">
      <div class="logo">LOGO</div>
      <ul class="menu">
        <li>导航1</li>
        <li>导航2</li>
      </ul>
    </div>
    <div class="banner">
      <h1>UI Name</h1>
      <h2>one good UI frame</h2>
      <p class="actions">
        <a href="">GitHub</a>
        <a href="">开始</a>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
};
</script>