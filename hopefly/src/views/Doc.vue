<template>
  <div>
    <Topnav />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>组件列表</h2>
        <ol class="doc-list">
          <li>
            <router-link to="/doc/switch-doc">组件 Switch</router-link>
          </li>
          <li>
            <router-link to="/doc/button-doc">组件 Button</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog-doc">组件 Dialog</router-link>
          </li>
          <li><router-link to="/doc/tabs-doc">组件 Tabs</router-link></li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    return { menuVisible };
  },
  components: {
    Topnav,
  },
};
</script>
<style lang="scss" scoped>
.content {
  aside {
    width: 15rem;
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    height: 100vh;
    padding: 4em 1em 1em 1em;
    overflow-y: scroll;
    box-sizing: border-box;
    box-shadow: 3px 0 10px 0 #cdcdcd;
    background: white;
    .doc-list {
      li {
        padding: 0.4em 0;
        box-sizing: border-box;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        > * {
          text-decoration: none;
          color: #333;
        }
      }
    }
  }
  main {
    padding: 1em 2em;
    margin-left: 15rem;
    position: absolute;
    top: 4em;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    background: white;
  }
  @media screen and (max-width: 750px) {
    main {
      margin-left: 0;
      padding: 1em;
    }
  }
}
</style>