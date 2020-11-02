<template>
  <div>
    <Topnav />
    <div class="content">
      <aside>
        <h2>组件列表</h2>
        <ol>
          <li>组件 Switch</li>
          <li>组件 Button</li>
          <li>组件 Dialog</li>
          <li>组件 Tabs</li>
        </ol>
      </aside>
      <main>主内容</main>
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
.content {
  aside {
    background: hotpink;
    width: 15rem;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 4em;
  }
  main {
    margin-left: 15rem;
    padding: 2em;
  }
}
</style>