<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>UI Name</h1>
      <h2>one good UI frame</h2>
      <p class="actions">
        <a class="btn" href="https://github.com/lookguy">GitHub</a>
        <router-link class="btn" to="/doc">开始</router-link>
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
<style lang="scss" scoped>
.banner {
  width: 40%;
  box-shadow: 4px 7px 7px 3px #eee;
  margin: 1rem auto;
  text-align: center;
  padding: 2rem 1rem;
  .actions {
    width: 100%;
    .btn {
      min-width: 5em;
      display: inline-block;
      padding: 0.2em 0.75em;
      font-size: 1.4rem;
      box-shadow: 0 0 10px 2px rgb(219, 73, 54);
      margin-right: 2em;
      color: grey;
      text-decoration: none;
      border-radius: 0 2rem;
    }
  }
}
</style>