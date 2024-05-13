<template>
    <div class="stars-wrapper">
        <h2>Stars of the Black Sea</h2>
        <MySpinner v-if="stars.length < 8"/>
        <div class="stars">
            <PhotoButton v-for="star in stars" :key="star" :id="star.id" :cover="star.cover" :name="star.name"/>
        </div>
    </div>
</template>

<script>
import MySpinner from '../components/MySpinner.vue'
import PhotoButton from '../components/PhotoButton.vue'
import { serverUrl, PostOptions } from '../constants.js'

export default {
    name: 'ViewStars',
    components: {
        PhotoButton,
        MySpinner
    },
    data() {
        return { stars: [] }
    },
    mounted() {
        const starsOptions = new PostOptions('/stars')

        fetch(serverUrl, starsOptions)
        .then(response => response.json())
        .then(result => this.stars = result)
    }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
@import '../scss/extends';

    .stars-wrapper {
        @extend %big-bottom-wrapper;
    }
    .stars {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>