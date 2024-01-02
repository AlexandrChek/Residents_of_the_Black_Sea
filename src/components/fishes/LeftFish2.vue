<template>
  <img src="../../pictures/fishes/l_fish_2.svg" alt="LeftFish2">
</template>

<script>
export default {
name: 'LeftFish2'
}
</script>

<style scoped lang="scss">
@import '../../scss/variables';
@import '../../scss/mixins';
@import '../../scss/animations';

  img {
    @include fish_settings(
      calc(42px + 3vw),
      calc($fish-line-height * 3),
      left-fish,
      5s,
      6s,
      8s,
      9s
    );
  }
</style>