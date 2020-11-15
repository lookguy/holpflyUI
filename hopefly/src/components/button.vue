<template>
  <div>Button 示例</div>
  <h1>示例1-theme</h1>
  <div>
    <Button>default</Button>
    <Button theme="primary">primary</Button>
    <Button theme="link">link</Button>
    <Button theme="text">text</Button>
  </div>
  <h1>示例2-size</h1>
  <div>
    <Button size="small">small</Button>
    <Button size="normal">normal</Button>
    <Button size="large">large</Button>
  </div>
  <h1>示例3-ghost</h1>
  <div style="background: #f2f1ef">
    <Button theme="button" ghost>button</Button>
    <Button theme="link" ghost>button</Button>
    <Button theme="text" size="large" ghost>button</Button>
  </div>
  <h1>示例3-danger</h1>
  <div style="background: #f2f1ef">
    <Button theme="button" danger>button</Button>
    <Button theme="link" danger>button</Button>
    <Button theme="text" size="large" danger>button</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
  components: { Button },
};
</script>

<style>
</style>