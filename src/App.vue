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
  background-color: #F3F3F3;
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
  padding: 3px;

  &:first-child {
    padding-top: 10px;
  }
}

.material-container {
  background-color: #FFFFFF;
  font-family: 'Lato', sans-serif;
  margin: 10px;
  text-align: left;
  border: 15px solid transparent;
  border-radius: 2px;

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
