<template>
  <div class="about-wrapper">
    <h2>About the Black Sea</h2>
    <div class="video-wrapper">
        <iframe src="https://www.youtube.com/embed/9VMj7mYNjzE?si=05HgTdKwso3jL_p4" frameborder="0" allowfullscreen></iframe>
    </div>
    <ListOfParagraphs v-for="p in blackSea_1" :key="p">{{p}}</ListOfParagraphs>
    <ImgContainer :imgSrc="require('../pictures/about/map_1.jpg')" imgAlt="Polit_map"/>
    <p class="bs-2">{{blackSea_2}}</p>
    <ImgContainer :imgSrc="require('../pictures/about/map_2.jpg')" imgAlt="Phys_map"/>
    <ListOfParagraphs v-for="p in blackSea_3" :key="p">{{p}}</ListOfParagraphs>
  </div>
</template>

<script>
import ListOfParagraphs from '../components/ListOfParagraphs.vue'
import ImgContainer from '../components/ImgContainer.vue'
import {blackSea_1, blackSea_2, blackSea_3} from '../constants.js'

export default {
    name: 'AboutView',
    components: {
        ListOfParagraphs,
        ImgContainer
    },
    data() {
        return {
            blackSea_1: blackSea_1,
            blackSea_2: blackSea_2,
            blackSea_3: blackSea_3
        }
    }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
@import '../scss/extends';

    .about-wrapper {
        @extend %big-bottom-wrapper;
    }
    .video-wrapper {
        @extend %flex-center;
    }
    iframe {
        width: min(100vw, $big-bottom-wrapper-max-width);
        height: calc(100vw * 0.5625);
        max-height: calc($big-bottom-wrapper-max-width * 0.5625);
    }
    .bs-2 {
        @extend %justified-paragraph;
    }
</style>