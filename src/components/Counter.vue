<template>
  <div class="counter">
    <h2>Score: {{ score }}</h2>
    <h2>High Score: {{ highScore }}</h2>
    <h2>Time: {{ timeCount }}</h2>
  </div>
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
.counter {
  display: flex;
  justify-content: center;
}
.counter h2 {
  margin: 16px;
}
</style>
