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

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-to  {
  opacity: 0
}

.content-section {
  padding: 10px;

  &:first-child {
    padding-top: 20px;
  }
}

.material-container {
  background-color: #FFFFFF;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  font-family: 'Lato', sans-serif;
  margin: 10px;
  text-align: left;
  border: 15px solid transparent;

  .title-box {
    padding-bottom: 10px;

    .title {
      font-size: 24pt;
      font-weight: 500;
    }
    .sub-title {
      font-size: 12pt;
      font-weight: 300;
      padding-left: 1pt;
    }
  }
}

</style>
