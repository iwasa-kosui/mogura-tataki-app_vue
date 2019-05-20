<template>
  <div class="counter"></div>
</template>

<script>
const initData = () => ({});

export default {
  name: "Counter",
  props: ["score", "highScore", "timeCount"],
  data: initData
};
</script>

<style scoped>
</style>
