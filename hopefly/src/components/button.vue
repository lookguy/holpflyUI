<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button>确认</Button>
    <Button theme="button">确认</Button>
    <Button theme="link">确认</Button>
    <Button theme="text">确认</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button>确认</Button>
    <Button size="normal">确认</Button>
    <Button size="large">确认</Button>
    <Button size="small">确认</Button>
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