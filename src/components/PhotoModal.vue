<template>
  <ModalWindow @closeMod="transmitClosing">
    <div class="photo-wrapper">
        <ArrowBtnLeft v-show="index" @click="goLeft"/>
        <img :src="photos[index]" :alt="`Photo ${index}`">
        <ArrowBtnRight v-show="index < photos.length - 1" @click="goRight"/>
    </div>
  </ModalWindow>
</template>

<script>
import ModalWindow from './ModalWindow.vue'
import ArrowBtnRight from './ArrowBtnRight.vue'
import ArrowBtnLeft from './ArrowBtnLeft.vue'

export default {
    name: "PhotoModal",
    components: {
        ModalWindow,
        ArrowBtnRight,
        ArrowBtnLeft
    },
    props: ['photos'],
    data() {
        return {
            index: 0
        }
    },
    methods: {
        goLeft() {
           this.index--
        },
        goRight() {
            this.index++
        },
        transmitClosing() {
            this.$emit('closingPhotos')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';
@import '../scss/extends';

    .photo-wrapper {
        position: relative;
        @extend %flex-center;
        width: $media-width;
    }
    img {
        max-width: 90%;
        @extend %media-modal-height;
    }
</style>