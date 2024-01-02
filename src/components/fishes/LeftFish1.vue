<template>
  <img src="../../pictures/fishes/l_fish_1.svg" alt="LeftFish1">
</template>

<script>
export default {
name: 'LeftFish1'
}
</script>

<style scoped lang="scss">
@import '../../scss/variables';
@import '../../scss/mixins';
@import '../../scss/animations';

  img {
    @include fish_settings(
      calc(25px + 2.4vw),
      $fish-line-height,
      left-fish,
      9s,
      10s,
      12s,
      13s
    );
  }
</style>