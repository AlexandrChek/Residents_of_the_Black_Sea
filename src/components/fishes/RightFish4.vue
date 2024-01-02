<template>
  <img src="../../pictures/fishes/r_fish_4.svg" alt="RightFish4">
</template>

<script>
export default {
name: 'RightFish4'
}
</script>

<style scoped lang="scss">
@import '../../scss/variables';
@import '../../scss/mixins';
@import '../../scss/animations';

    img {
        @include fish_settings(
            calc(42px + 3vw),
            calc($fish-line-height * 6 + 3vw),
            right-fish,
            14s,
            15s,
            17s,
            19s
        );
    }
</style>