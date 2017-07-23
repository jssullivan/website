<template>
  <div id="app">
    <hero/>
    <main-body/>
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import MainBody from './components/MainBody.vue'

export default {
  name: 'app',
  components: { Hero, MainBody },
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: 'Oswald', sans-serif;
}

body {
  margin: 0;
  background-color: #E6E6E6;
}

a {
  text-decoration: none;
}

.material-container {
  background-color: #FFFFFF;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  height: 500px;
  margin: 40px 0px;

}

</style>
