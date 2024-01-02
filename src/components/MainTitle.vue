<template>
  <div>
    <h1>Residents of the Black Sea</h1>
  </div>
</template>

<script>
export default {
    name: 'MainTitle'
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap');
@import '../scss/variables';

div {
    display: flex;
    justify-content: center;
    align-items: center;
}
h1 {
      margin: 0;
      font-family: 'Kalam', cursive;
      font-size: calc(10px + 3vw);
      color: $creme-brulee;
    }
</style>