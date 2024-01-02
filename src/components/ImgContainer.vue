<template>
    <div>
        <img :src="imgSrc" :alt="imgAlt">
    </div>
</template>

<script>
export default {
    name: 'ImgContainer',
    props: ['imgSrc', 'imgAlt']
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

    div {
        display: flex;
        justify-content: center;
        @media(min-width: 992px) {
            float: right;
            margin-left: $header-margin;
            width: min(72vw, 784px);
            margin-bottom: 5px;
        }
    }
    img {
        max-width: 100%;
    }
</style>