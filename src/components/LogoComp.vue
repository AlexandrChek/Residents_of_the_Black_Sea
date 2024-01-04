<template>
    <router-link to="/">
        <img src="../pictures/logo.jpg" alt="Logo" class="logo">
    </router-link>
</template>

<script>
export default {
    name: 'LogoComp'
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.logo {
    width: $logo-width;
    height: $logo-width;
    border-radius: 50%;
}
</style>