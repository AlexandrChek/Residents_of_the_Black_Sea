<template>
<div class="home">
  <RightFish1/>
  <LeftFish1/>
  <RightFish2/>
  <LeftFish2/>
  <RightFish3/>
  <LeftFish3/>
  <RightFish4/>
  <router-link to="/stars" class="stars">
    <RoundButton @click="goToStars">
      Black<br/>
      Sea<br/>
      Stars
    </RoundButton>
  </router-link>
</div>
</template>

<script>
import RightFish1 from '../components/fishes/RightFish1.vue'
import LeftFish1 from '../components/fishes/LeftFish1.vue'
import RightFish2 from '../components/fishes/RightFish2.vue'
import LeftFish2 from '../components/fishes/LeftFish2.vue'
import RightFish3 from '../components/fishes/RightFish3.vue'
import LeftFish3 from '../components/fishes/LeftFish3.vue'
import RightFish4 from '../components/fishes/RightFish4.vue'
import RoundButton from '../components/RoundButton.vue'

export default {
    name: 'HomePage',
    components: {
      RightFish1,
      LeftFish1,
      RightFish2,
      LeftFish2,
      RightFish3,
      LeftFish3,
      RightFish4,
      RoundButton
    },
    methods: {
      goToStars() {
        this.$router.push('/stars')
      }
    }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

$home-min-height: calc(100vh - $header-margin * 2 - $header-without-margin * 0.09);

.home {
    position: relative;
    overflow-x: hidden;
    width: 100vw;
    min-height: $home-min-height;
}
.stars {
  position: absolute;
  left: calc((100vw - ($main-text-f-size * 5)) / 2);
  top: calc(($home-min-height - ($main-text-f-size * 5)) / 2 - $fish-line-height);
  text-decoration: none;
}
</style>