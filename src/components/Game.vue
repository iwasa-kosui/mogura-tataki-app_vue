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
import MoleModel from "../models/MoleModel";
import Moles from "./Moles";

const MOLE_COUNT = 4;
const TIME_COUNT = 20;
const MAX_INTERVAL_TO_SHOW_MOLE = 3000;
const MAX_INTERVAL_TO_HIDE_MOLE = 1000;

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

const sample = x => x[Math.floor(Math.random() * x.length)];

export default {
  name: "Game",
  data: initData,
  methods: {
    stopGame: function() {
      this.currentGame.moles.map(
        mole => mole.timer && window.clearTimeout(mole.timer._id)
      );
      if (this.currentGame.timerToShowMole) {
        window.clearInterval(this.currentGame.timerToShowMole._id);
      }
      if (this.currentGame.timerToWatchTimeCount) {
        window.clearInterval(this.currentGame.timerToWatchTimeCount._id);
      }
      this.highScore = Math.max(this.currentGame.score, this.highScore);
      this.status = "ENDED";
    },
    startGame: function() {
      this.stopGame();
      this.currentGame = genNewCurrentGame();
      this.status = "PLAYING";

      this.setTimerToWatchTimeCount();
      this.setTimerToShowMole();
    },
    setTimerToWatchTimeCount: function() {
      this.currentGame.timerToWatchTimeCount = window.setInterval(() => {
        this.currentGame.timeCount -= 1;
        if (this.currentGame.timeCount == 0) {
          this.stopGame();
        }
      }, 1000);
    },
    setTimerToShowMole: function() {
      this.currentGame.timerToShowMole = window.setInterval(() => {
        const moleToShow = sample(
          this.currentGame.moles.filter(mole => !mole.visible)
        );
        if (!moleToShow) {
          return;
        }
        moleToShow.visible = true;
        moleToShow.timer = setTimeout(() => {
          moleToShow.visible = false;
        }, MAX_INTERVAL_TO_HIDE_MOLE);
      }, MAX_INTERVAL_TO_SHOW_MOLE * Math.random());
    },
    handleStartClick: function() {
      this.startGame();
    },
    handleMoleClick: function(clickedMole) {
      if (clickedMole.visible) {
        this.currentGame.score += 1;
        window.clearTimeout(clickedMole.timer._id);
        clickedMole.visible = false;
      }
    }
  }
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
