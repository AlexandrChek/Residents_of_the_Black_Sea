<template>
    <div class="spinner-wrapper">
        <div class="circle-wrapper" v-for="item in 11" :key="item" :id="`wrapper-${item}`">
            <div class="circle" :id="`circle-${item}`"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MySpinner'
}
</script>

<style scoped lang="scss">
    @import '../scss/variables';
    @import '../scss/animations';

    $orbit-radius: 31px;
    $circle-diameter: 3px;
    $time: 1.5s;
    $delay: calc($time / 11);

    @mixin spinner($name) {
        -webkit-animation: $name $time linear infinite;
        -moz-animation: $name $time linear infinite;
        animation: $name $time linear infinite;
    }

    .spinner-wrapper {
        height: calc(($orbit-radius + ($circle-diameter * 6)) * 2);
        overflow: hidden;
    }
    .circle-wrapper {
        position: relative;
        top: $orbit-radius;
        left: calc(50% - (($orbit-radius - $circle-diameter) / 2));
        transform-origin: 0 $orbit-radius;
        @include spinner(simple-rotating);
    }
    .circle {
        position: absolute;
        width: $circle-diameter;
        height: $circle-diameter;
        border-radius: 50%;
        background: $toxic-green;
        @include spinner(spinner-scaling);
    }

    @for $i from 0 through 10 {
        #wrapper-#{$i + 1}, #circle-#{$i + 1} {
            -webkit-animation-delay: $i * $delay;
            animation-delay: $i * $delay;
        }
    }
</style>