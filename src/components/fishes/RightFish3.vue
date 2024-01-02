<template>
  <img src="../../pictures/fishes/r_fish_3.svg" alt="RightFish3">
</template>

<script>
export default {
name: 'RightFish3'
}
</script>

<style scoped lang="scss">
@import '../../scss/variables';
@import '../../scss/mixins';
@import '../../scss/animations';

    img {
        transform: rotate(-7deg);
        @include fish_settings(
            calc(37px + 3vw),
            calc($fish-line-height * 4),
            right-fish,
            9.5s,
            10.5s,
            12.5s,
            13.5s
        );
    }
</style>