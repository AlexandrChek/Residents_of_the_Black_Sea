<template>
  <ModalWindow @closeMod="transmitClosing">
    <div class="photo-wrapper">
        <ArrowBtn v-show="index" btnSide="left" @click="goLeft"/>
        <img :src="photos[index]" :alt="`Photo ${index}`">
        <ArrowBtn v-show="index < photos.length - 1" btnSide="right" @click="goRight"/>
    </div>
  </ModalWindow>
</template>

<script>
import ModalWindow from './ModalWindow.vue'
import ArrowBtn from './ArrowBtn.vue'

export default {
    name: "PhotoModal",
    components: {
        ModalWindow,
        ArrowBtn
    },
    props: ['photos'],
    data() {
        return { index: 0 }
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