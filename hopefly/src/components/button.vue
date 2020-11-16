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
    <Button theme="button" ghost>default</Button>
    <Button theme="primary" ghost>primary</Button>
  </div>
  <h1>示例3-danger</h1>
  <div>
    <Button theme="button" danger>button</Button>
    <Button theme="link" danger>link</Button>
    <Button theme="primary" danger>primary</Button>
  </div>
  <h1>示例4-disabled</h1>
  <div>
    <Button theme="button" disabled>button</Button>
    <Button theme="primary" danger disabled>primary danger</Button>
    <Button theme="button" ghost disabled>button ghost</Button>
  </div>
  <h1>示例5-loading</h1>
  <div>
    <Button theme="primary" :loading="true">button</Button>
    <Button :loading="true">button</Button>
    <Button theme="primary" danger :loading="true">danger</Button>
    <Button theme="button" danger :loading="true">button</Button>
    <Button theme="primary" ghost :loading="true">primary</Button>
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