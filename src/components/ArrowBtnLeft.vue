<template>
  <div class="back-base">
    <div class="arrow"></div>
  </div>
</template>

<script>
export default {
    name: 'ArrowBtnLeft'
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
@import '../scss/mixins';

    .back-base {
        @include arrow-btn(right, $arrow-padding, calc($arrow-padding / 2));
        left: 0;
    }
</style>