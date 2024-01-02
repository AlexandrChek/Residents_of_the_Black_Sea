<template>
  <MenuComp v-if="isMenuActive || !burger" :burger="burger" @memuClosed="closeBurgerMenu"/>
  <div v-if="burger">
    <BurgerLines v-if="!isMenuActive" @click="openBurgerMenu"/>
    <CrossComp v-else @click="closeBurgerMenu"/>
  </div>
</template>

<script>
import MenuComp from './MenuComp.vue'
import BurgerLines from './BurgerLines.vue'
import CrossComp from './CrossComp.vue'

export default {
name: 'NavBar',
components: {
    BurgerLines,
    MenuComp,
    CrossComp
  },
  data() {
    return {
      burger: true,
      isMenuActive: false
    }
  },
  mounted() {
    this.widthControl()
    window.onresize = () => this.widthControl()
  },
  methods: {
    widthControl() {
      const condition = window.matchMedia('(min-width: 992px)')
      if(condition.matches) {
        this.burger = false
      } else {
        this.burger = true
      }
    },
    openBurgerMenu() {
      this.isMenuActive = true
    },
    closeBurgerMenu() {
      this.isMenuActive = false
    }
  }
}
</script>