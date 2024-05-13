<template>
    <p v-for="name in letterNames" :key="name" @click="goToCreature(name)">
        {{ name }}
    </p>
</template>

<script>
export default {
    name: 'NamesList',
    props: ['letterNames', 'namesWithId'],
    methods: {
       goToCreature(name) {
        const creature = this.namesWithId.find(item => {return item.name === name})
        this.$router.push('/creature/' + creature.id)
       } 
    }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';

    p {
        margin: 0 0 0.53rem 0;
        cursor: pointer;
        &:hover {
            color: $toxic-green;
            font-size: 1.02rem;
        }
        @media(min-width: 768px) {
            margin: 0;
        }
    }
</style>