<template>
    <div class="names-box">
        <router-link v-for="creature in foundedNames" :key="creature" :to="`/creature/${creature.id}`">
            {{ creature.name }}
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'FoundedNamesList',
    props: ['foundedNames']
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';

    .names-box {
        position: absolute;
        left: calc(50% - ($input-search-width / 2) + (4.2rem + $header-margin) / 2 + 3px);
        padding: 0 5px;
        background-color: white;
        width: calc($input-search-width - 6.5px);
    }
    a {
        display: block;
        color: black;
        line-height: 2;
        &:hover {
            background: $green-shine;
        }
    }
</style>