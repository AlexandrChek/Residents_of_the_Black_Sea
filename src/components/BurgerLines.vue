<template>
    <div class="burger-wrapper">
        <div v-for="one in 3" :key="one" class="line"></div>
    </div>
</template>

<script>
export default {
    name: 'BurgerLines'
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.burger-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: $logo-width;
    @media(min-width: 768px) {
        width: 88%;
    }
}
.line {
    width: 100%;
    height: 3px;
    background-color: orange;
    @media(min-width: 576px) {
        height: 5px;
    }
}
</style>