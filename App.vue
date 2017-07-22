<template>
  <div id="app">
    <hero/>
  </div>
</template>

<script>
import Hero from './components/Hero.vue'

export default {
  name: 'app',
  components: { Hero },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  color: #2c3e50;
}

body {
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
