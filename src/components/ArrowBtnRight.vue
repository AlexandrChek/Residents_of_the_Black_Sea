<template>
  <div class="back-base">
    <div class="arrow"></div>
  </div>
</template>

<script>
export default {
    name: 'ArrowBtnRight'
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
@import '../scss/mixins';

    .back-base {
        @include arrow-btn(left, calc($arrow-padding / 2), $arrow-padding);
        right: 0;
    }
</style>