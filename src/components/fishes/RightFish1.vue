<template>
  <img src="../../pictures/fishes/r_fish_1.svg" alt="RightFish1">
</template>

<script>
export default {
name: 'RightFish1'
}
</script>

<style scoped lang="scss">
@import '../../scss/mixins';
@import '../../scss/animations';

    img {
        @include fish_settings(
            calc(42px + 3vw),
            0,
            right-fish,
            7s,
            8s,
            10s,
            11s
        );
    }
</style>