<template>
    <div>
        <img src="../pictures/logo.jpg" alt="Logo" class="logo">
    </div>
</template>

<script>
export default {
    name: 'LogoComp'
}
</script>

<style scoped lang="scss">
@import '../scss/extends';

div {
    @extend %header-height;
}
.logo {
      max-width: 100%;
      border-radius: 50%;
}
</style>