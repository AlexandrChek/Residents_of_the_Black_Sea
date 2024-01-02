<template>
  <p>No matches found</p>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

    p {
        margin: calc($header-margin / 2) 0 0 0;
        text-align: center;
        color: red;
    }
</style>