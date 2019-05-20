<template>
  <div class="moles">
    <mole
      v-for="mole in $props.moles"
      v-bind:mole="mole"
      v-on:on-mole-click="$emit('on-mole-click', $event)"
    ></mole>
  </div>
</template>

<script>
const initData = () => ({});

export default {
  name: "Moles",
  props: ["moles"],
  data: initData
};
</script>

<style scoped>
.moles {
  display: flex;
  justify-content: center;
}
</style>
