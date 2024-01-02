<template>
  <img src="../../pictures/fishes/r_fish_2.svg" alt="RightFish2">
</template>

<script>
export default {
name: 'RightFish2'
}
</script>

<style scoped lang="scss">
@import '../../scss/variables';
@import '../../scss/mixins';
@import '../../scss/animations';

    img {
        @include fish_settings(
            calc(33px + 2.7vw),
            calc($fish-line-height * 2),
            right-fish,
            11s,
            12s,
            14s,
            15s
        );
    }
</style>