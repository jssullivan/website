<template>
  <div id="hero">
    <div v-bind:style="{opacity: scrollOpacity}" ref="nav" id="nav-box">
        <a href="#biography" v-smooth-scroll>Biography</a>
        <a href="#contact">Projects</a>
        <a href="#resume" v-smooth-scroll>Resume</a>
        <a href="#hobbies" v-smooth-scroll>Hobbies</a>
        <a href="#contact" v-smooth-scroll>Contact</a>
    </div>
    <div ref="name" id="name-box">
        <div id="name">James Sullivan</div>
        <div id="tagline">Software Engineer </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hero",
  data: function () {
    return {
      scrollOpacity: 1
    }
  },

  mounted: function() {
    window.addEventListener('scroll', () => {this.setScrollOpacity(0, window.innerHeight / 2)});
    window.addEventListener('resize', () => {this.setScrollOpacity(0, window.innerHeight / 2)});
  },

  methods: {
    setScrollOpacity: function(start, end, variable) {
      let pos = window.scrollY;

      if (pos > end) {
        this.scrollOpacity = 0;
      } else if (pos > start) {
        this.scrollOpacity = 1 - ((pos - start) / (end - start))
      } else {
        this.scrollOpacity = 1;
      }
    }
  }
}
</script>

<style lang="scss">
#hero {
    background-image: url(../assets/hero.jpg);
    background-size: cover;
    background-position: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: auto 70px;
    user-select: none;
    font-family: 'Oswald', sans-serif;
    color: #FFFFFF;

    #nav-box {
        grid-row: 1;
        grid-row-end: 3;
        display: flex;
        align-content: flex-end;
        flex-direction: column;
        align-items: flex-start;

        margin-top: auto;
        margin-left: 20px;
        margin-bottom: 15px;

        font-weight: 300;
        font-size: 16pt;
        a {
            color: inherit;
            text-decoration: none;
            margin-bottom: 10px;
        }
    }

    #name-box {
        display: flex;
        justify-content: center;
        align-content: middle;
        flex-direction: column;
        grid-column: 2;
        user-select: none;

        #name {
            font-size: 40pt;
            line-height: 40pt;
            padding-bottom: 5px;
        }

        #tagline {
            font-size: 18pt;
            line-height: 18pt;
            font-weight: 300;
        }
    }
}
</style>
