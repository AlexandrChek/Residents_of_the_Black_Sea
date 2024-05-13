<template>
  <div>&#10060;</div>
</template>

<script>
export default {
  name: 'CrossComp'
}
</script>

<style scoped lang="scss">
@import '../scss/animations';

  div {
    font-size: 27px;
    line-height: 1.2;
    height: calc(27px * 1.2);
    animation: simple-rotating .4s linear 0s 2;
  }
</style>