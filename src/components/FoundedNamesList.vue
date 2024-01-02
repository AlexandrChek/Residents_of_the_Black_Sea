<template>
    <div>
        <router-link v-for="creature in foundedNames" :key="creature" :to="`/creature/${creature.id}`">
            {{creature.name}}
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

    div {
        position: absolute;
        left: calc(50% - ($input-search-width / 2) + (($main-text-f-size * 4) + $header-margin) / 2);
        padding: 0 3px;
        background-color: white;
    }
    a {
        display: block;
        color: black;
        &:hover {
            background: $green-shine;
        }
    }
</style>