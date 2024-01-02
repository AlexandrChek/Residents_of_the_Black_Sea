<template>
  <div class="sheet" @click="close">
    <div class="content" @click.stop>
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ModalWindow',
    methods: {
        close() {
            this.$emit('closeMod')
        }
    }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
@import '../scss/extends';

    .sheet {
        background-color: rgba(0, 0, 0, .7);
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        @extend %flex-center;
    }
    .content {
        background-color: black;
        width: $media-width;
        @extend %media-modal-height;
    }
</style>