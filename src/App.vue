<template>
  <HeadComp/>
  <router-view/>
</template>

<script>
import HeadComp from './components/HeadComp.vue'

export default {
    components: {
        HeadComp
    }
}
</script>

<style lang="scss">
@import './scss/variables';

  body {
    margin: 0;
    min-height: calc(100vh - $header-margin);
    background: linear-gradient(rgb(67, 67, 250), rgb(0, 0, 95));
    color: white;
    font-size: $main-text-f-size;
  }
  h2 {
    font-size: calc(10px + 1.9vw);
    font-weight: bold;
    text-align: center;
    color: $pink-rose-carrot;
  }
</style>