<template>
  <HeadComp/>
  <router-view/>
</template>

<script>
import HeadComp from './components/HeadComp.vue'

export default {
    components: { HeadComp }
}
</script>

<style lang="scss">
@import './scss/variables';

  * {
    box-sizing: border-box;
  }
  html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
    font-size: calc(9.5px + 0.9vw);
    line-height: 1.5;
    color: white;
  }
  body {
    margin: 0;
    min-height: calc(100vh - $header-margin);
    background: linear-gradient(rgb(67, 67, 250), rgb(0, 0, 95));
  }
  button,
  input,
  select {
    margin: 0;
  }
  input,
  select {
    border-style: solid;
    border-color: black gray gray black;
    outline: none;
    &:focus {
      border-color: $toxic-green;
    }
  }
  ::-moz-focus-inner {
    border: none;
    padding: 0;
  }
  a {
    text-decoration-skip-ink: all;
  }
  h2 {
    font-size: calc(10px + 1.9vw);
    font-weight: bold;
    text-align: center;
    color: $pink-rose-carrot;
  }
</style>