<template>
  <img src="../../pictures/fishes/l_fish_3.svg" alt="LeftFish3">
</template>

<script>
export default {
name: 'LeftFish3'
}
</script>

<style scoped lang="scss">
@import '../../scss/variables';
@import '../../scss/mixins';
@import '../../scss/animations';

  img {
    @include fish_settings(
      calc(37px + 3vw),
      calc($fish-line-height * 5),
      left-fish,
      11s,
      12s,
      14s,
      15s
    );
  }
</style>