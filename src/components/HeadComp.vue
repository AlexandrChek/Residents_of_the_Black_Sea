<template>
  <header>
    <LogoComp/>
    <MainTitle/>
    <NavBar/>
  </header>
</template>

<script>
import LogoComp from './LogoComp.vue'
import MainTitle from './MainTitle.vue'
import NavBar from './NavBar.vue'

export default {
    name: 'HeadComp',
    components: {
      LogoComp,
      MainTitle,
      NavBar
    }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

    header {
      margin: $header-margin;
      display: grid;
      grid-template-columns: 9% 79% 10%;
      grid-column-gap: 1%;
      @media(min-width: 576px) {
        grid-template-columns: 7% 82% 9%;
      }
      @media(min-width: 992px) {
        grid-template-columns: 5% 50.5% 42.5%;
      }
    }
</style>