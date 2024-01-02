<template>
  <ModalWindow @closeMod="transmitClosing">
    <div class="video-wrapper">
        <iframe :src="video" frameborder="0" allowfullscreen></iframe>
    </div>
  </ModalWindow>
</template>

<script>
import ModalWindow from './ModalWindow.vue'

export default {
    name: 'VideoModal',
    components: {ModalWindow},
    props: ['video'],
    methods: {
        transmitClosing() {
            this.$emit('closingVideo')
        }
    }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
@import '../scss/extends';

    .video-wrapper {
        width: $media-width;
        height: $media-height;
        @extend %flex-center;
        @media(min-width: 1200px) {
            height: $media-height-1200;
        }
    }
    iframe {
        width: $media-width;
        height: calc($media-width * 0.5625);
        @extend %media-modal-height;
        max-width: calc($media-height / 0.5625);
        @media(min-width: 1200px) {
            max-width: calc($media-height-1200 / 0.5625);
        }
    }
</style>