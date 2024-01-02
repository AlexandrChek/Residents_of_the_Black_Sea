<template>
    <div id="second-circle">
        <div id="first-circle">
            <button>
                <slot></slot>
            </button>
        </div>
    </div>
</template>

<script>
export default {
name: 'RoundButton'
}
</script>

<style scoped lang="scss">
@import '../scss/animations';
@import '../scss/variables';

@mixin green-circles($distance, $a-name) {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    border: 4px solid transparent;
    width: calc($main-text-f-size * 5 + $distance);
    height: calc($main-text-f-size * 5 + $distance);
    -webkit-animation: $a-name 1.5s linear infinite;
    -moz-animation: $a-name 1.5s linear infinite;
    -o-animation: $a-name 1.5s linear infinite;
    animation: $a-name 1.5s linear infinite;
    @media(min-width: 768px) {
        border-width: 5.5px;
    }
}

    button {
        border-radius: 100%;
        width: calc($main-text-f-size * 5);
        height: calc($main-text-f-size * 5);
        font-size: $main-text-f-size;
        font-weight: bold;
        background-color: rgb(0, 240, 0);
        color: rgb(0, 0, 100);
        border: none;
        cursor: pointer;
        &:hover {
           background-color: $light-green;
           width: calc($main-text-f-size * 5 + 7px);
           height: calc($main-text-f-size * 5 + 7px); 
        }
    }
    #first-circle {
        @include green-circles(7px, first-circle-flicker);
    }
    #second-circle {
        @include green-circles(20px, second-circle-flicker);
    }
</style>