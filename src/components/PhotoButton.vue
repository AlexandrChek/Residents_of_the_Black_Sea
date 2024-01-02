<template>
  <router-link :to="'/creature/' + id" class="star-item">
    <img :src="cover" :alt="name">
    <p>{{name}}</p>
  </router-link>
</template>

<script>
export default {
name: 'PhotoButton',
props: ['id', 'cover', 'name']
}
</script>

<style scoped lang="scss">

    .star-item {
      margin-bottom: 14px;
      @media(min-width: 1200px) {
        margin-bottom: 17px;
      }
    }
    img {
        border-radius: 10px;
        max-width: 100%;
        @media (min-width: 768px) {
          margin: 0 4px;
        }
    }
    p {
        margin: 0;
        color: white;
        font-weight: bold;
        letter-spacing: 1px;
        text-align: center;
    }
</style>