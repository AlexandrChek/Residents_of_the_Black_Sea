<template>
  <nav :class="{'vert': burger, 'horiz': !burger}">
    <div class="item-wrapper" v-for="item in menu" :key="item" @click="closeMenu">
        <div class="tail" :id="`bord-${item.color}`"></div>
        <router-link :to="item.to" class="menu-item" :id="`bc-${item.color}`">
            <div>{{ item.name }}</div>
        </router-link>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'MenuComp',
    props: ['burger'],
    data() {
        return {
            menu: [
                {to: '/', name: 'Home', color: 'lime'},
                {to: '/search', name: 'Search', color: 'red'},
                {to: '/about', name: 'About the Black Sea', color: 'orange'}
            ]
        }
    },
    methods: {
        closeMenu() {
            if (window.innerWidth < 992) {
                this.$emit('memuClosed')
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

@mixin tailprops($t-margin, $t-border) {
    margin: $t-margin;
    border-top: $t-border solid transparent;
    border-bottom: $t-border solid transparent;
}

    .vert {
        position: absolute;
        right: calc($header-margin + ($header-without-margin * 0.1));
        top: $header-margin;
        z-index: 3;
    }
    .horiz {
        display: inline-flex;
        justify-content: space-between;
        padding-top: 5px;
        @media(min-width: 1200px) {
            padding: 0;
        }
    }
    .item-wrapper {
        display: flex;
        margin-bottom: 8px;
        &:hover {
            transform: rotate(-4deg);
            opacity: 0.8;
        }
        @media(min-width: 992px) {
            margin: 0;
        }
    }
    .tail {
        box-sizing: content-box;
        width: 0;
        height: 9px;
        @include tailprops(auto 0, 21px);
        @media(min-width: 992px) {
            @include tailprops(0, calc(($header-without-margin * 0.05 - 7px - 9px) / 2));
        }
    }

    @each $color in lime, red, orange {
        #bord-#{"" + $color} {
            border-left: 42px solid $color;
            @media(min-width: 992px) {
                border-left: calc($header-without-margin * 0.05 - 14px - 9px) solid $color;
            }
        }
        #bc-#{"" + $color} {
            background-color: $color;
        }
    }

    .menu-item {
        text-decoration: none;
        font-weight: bold;
        padding: 0 7px;
        width: 100%;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media(min-width: 992px) {
            width: auto;
            min-width: 6.1vw;
            height: calc($header-without-margin * 0.05 - 7px);
            white-space: nowrap;
            font-size: 1.7vw;
        }
    }
</style>