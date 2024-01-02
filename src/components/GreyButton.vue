<template>
  <div><slot></slot></div>
</template>

<script>
export default {
    name: 'GreyButton'
}
</script>

<style scoped lang="scss">
    @mixin shedow($h) {
        box-shadow: inset -4px -4px 2px $h rgb(70, 70, 70);
    }

    div {
        border: 1px solid white;
        border-radius: 3px;
        width: 100%;
        @include shedow(0.15vw);
        padding: calc(3px + 0.5vw) 0;
        background-color: rgb(140, 140, 140);
        color: rgb(0, 70, 0);
        font-size: calc(10px + 1.7vw);
        font-weight: bold;
        text-align: center;
        cursor: pointer;
        @media(min-width: 992px) {
            @include shedow(0.25vw);
        }
        &:hover {
            background-color: rgb(170, 170, 170);
        }
        &:active {
            @include shedow(1px);
        }
    }
</style>