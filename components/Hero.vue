<template>
  <div id="hero">
    <div>{{mssg}}</div>
  </div>
</template>

<script>
export default {
  name: 'hero',
  data () {
    return {
      mssg: this.$staticData.projects
    }
  }
}
</script>

<style lang="scss">
#hero {
    background-image: url(../assets/hero.jpg);
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100vw;
}
</style>
