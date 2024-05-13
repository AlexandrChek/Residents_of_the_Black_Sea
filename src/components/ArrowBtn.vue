<template>
    <div class="back-base" :class="`back-base-${btnSide}`">
      <div class="arrow"></div>
    </div>
</template>
  
<script>
export default {
    name: 'ArrowBtn',
    props: ['btnSide']
}
</script>
  
<style scoped lang="scss">
@import '../scss/variables';

    $arrow-width: calc(9px + 1.4vw);    
    $arrow-half-height: calc($arrow-width / 2);
  
    @mixin arrow-settings($padding-rt, $padding-lt, $side) {
        $back-side: left;
        @if $side == left {
            $back-side: right;
        }

        padding: $arrow-half-height $padding-rt $arrow-half-height $padding-lt;
        #{$side}: 0;
        .arrow {
            border-#{$back-side}: $arrow-width solid black;
        }
        &:hover .arrow {
            border-#{$back-side}-color: $toxic-green;
        }
    }

    .back-base {
        position: absolute;
        background-color: rgba(255, 255, 255, .85);
        border-radius: 50%;
        cursor: pointer;
        &:hover {
            background: $green-shine;
        }
    }
    .arrow {
        width: 0;
        border-top: $arrow-half-height solid transparent;
        border-bottom: $arrow-half-height solid transparent; 
    }
    .back-base-left {
        @include arrow-settings($arrow-half-height, calc($arrow-half-height / 1.5), left);
    }
    .back-base-right {
        @include arrow-settings(calc($arrow-half-height / 1.5), $arrow-half-height, right);
    }
</style>