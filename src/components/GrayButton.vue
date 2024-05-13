<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'GrayButton'
}
</script>

<style scoped lang="scss">

    @mixin shadow($h) {
        box-shadow: inset -4px -4px 2px $h rgb(70, 70, 70);
    }

    button {
        border: 1px solid rgb(140, 140, 140);
        border-radius: 3px;
        width: 100%;
        @include shadow(0.15vw);
        padding: calc(3px + 0.5vw) 0 calc(7px + 0.5vw) 0;
        background-color: rgb(140, 140, 140);
        color: rgb(0, 70, 0);
        font-family: inherit;
        font-size: calc(10px + 1.7vw);
        font-weight: bold;
        text-align: center;
        line-height: 1;
        cursor: pointer;
        @media(min-width: 992px) {
            @include shadow(0.25vw);
        }
        &:hover {
            background-color: rgb(170, 170, 170);
        }
        &:active {
            @include shadow(1px);
        }
    }
</style>