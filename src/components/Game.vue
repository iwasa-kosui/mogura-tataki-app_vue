<template>
  <div class="game">
    <button v-on:click="handleStartClick()">Start</button>
    <counter
      v-bind:score="currentGame.score"
      v-bind:highScore="highScore"
      v-bind:timeCount="currentGame.timeCount"
    ></counter>
    <moles v-bind:moles="currentGame.moles" v-on:on-mole-click="handleMoleClick"></moles>
  </div>
</template>

<script>
const MOLE_COUNT = 4;
const TIME_COUNT = 20;

const genNewCurrentGame = () => ({
  timerToShowMole: null,
  timerToWatchTimeCount: null,
  timeCount: TIME_COUNT,
  score: 0,
  moles: Array.from({ length: MOLE_COUNT }).map(() => new MoleModel())
});

const initData = () => ({
  currentGame: genNewCurrentGame(),
  highScore: 0,
  status: "WAITING"
});

export default {
  name: "Game",
  data: initData,
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  font-size: 2rem;
  background-color: #fff;
  border: 1px solid;
  border-radius: 4px;
  padding: 8px 16px;
}
</style>
