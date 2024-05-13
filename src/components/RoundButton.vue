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
    border-radius: 50%;
    border: $round-btn-circle-border-width solid transparent;
    width: calc(5rem + $distance + $round-btn-circle-border-width);
    height: calc(5rem + $distance + $round-btn-circle-border-width);
    -webkit-animation: $a-name 1.5s linear infinite;
    -moz-animation: $a-name 1.5s linear infinite;
    animation: $a-name 1.5s linear infinite;
}

    button {
        border-radius: 50%;
        width: 5rem;
        height: 5rem;
        font-size: 1rem;
        font-weight: bold;
        background-color: rgb(0, 240, 0);
        color: rgb(0, 0, 100);
        border: none;
        cursor: pointer;
        &:hover {
           background-color: $light-green;
           width: calc(5rem + 7px);
           height: calc(5rem + 7px);
        }
    }
    #first-circle {
        @include green-circles(7px, first-circle-flicker);
    }
    #second-circle {
        @include green-circles(19px, second-circle-flicker);
    }
</style>