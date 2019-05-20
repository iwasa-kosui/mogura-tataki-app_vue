<template>
  <div class="mole" @click="$emit('on-mole-click', mole)">
    <img class="gopher" src="../assets/gopher.png" v-bind:style="gopherStyle">
    <img class="dirt" src="../assets/dirt.svg">
  </div>
</template>

<script>
const initData = () => ({
  gopherStyle: ""
});

export default {
  name: "Mole",
  props: ["mole"],
  data: initData,
  watch: {
    "mole.visible": function(visible) {
      if (visible) {
        this.gopherStyle = "top: 25%;";
      } else {
        this.gopherStyle = "top: 100%";
      }
    }
  }
};
</script>

<style scoped>
.mole {
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-end;
  height: 320px;
  cursor: pointer;
  overflow: hidden;
}
.mole .gopher {
  position: absolute;
  top: 100%;
  transition: all 0.15s;
  width: 60%;
  z-index: -1;
  transform: translateX(30%);
}
.mole .dirt {
  width: 100%;
}
</style>
