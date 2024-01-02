<template>
    <ul>
        <li>
            <slot></slot>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'ListOfParagraphs'
}
</script>

<style scoped lang="scss">
@import '../scss/extends';

    ul {
        padding: 0;
    }
    li {
        list-style-type: none;
        @extend %justified-paragraph;
    }
</style>