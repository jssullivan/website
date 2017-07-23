<template>
  <div id="main-body">
    <div>
      <transition name="fade">
        <div v-show="showNav" id="body-nav">
          <a href="#biography" v-smooth-scroll>Biography</a>
          <a href="#resume" v-smooth-scroll>Resume</a>
          <a href="#contact" v-smooth-scroll>Contact</a>
        </div>
      </transition>
    </div>
    <div>
      <biography/>
      <resume/>
      <contact/>
    </div>
  </div>
</template>

<script>
import Biography from './sections/Biography.vue'
import Projects from './sections/Projects.vue'
import Resume from './sections/Resume.vue'
import Hobbies from './sections/Hobbies.vue'
import Contact from './sections/Contact.vue'

console.log(Biography);
export default {
  name: "main-body",
  components: { Biography, Projects, Resume, Hobbies, Contact},
  data: function () {
    return {
      showNav: false
    }
  },

  mounted: function() {
    window.addEventListener("scroll", () => {this.showNavSet()});
    window.addEventListener("resize", () => {this.showNavSet()});
    this.showNavSet();
  },

  methods: {
    showNavSet: function() {
      let pos = window.scrollY;
      let height = window.innerHeight;

      if (pos >= height) {
        this.showNav = true;
      } else {
        this.showNav = false;
      }
    }
  }
}
</script>

<style lang="scss">
a {
    color: inherit;
}

#main-body {
    display: grid;
    grid-template-columns: 150px auto 100px;

    $nav-bar-top: 25px;
    #body-nav {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      position: sticky;
      top: $nav-bar-top;

      margin-top: $nav-bar-top;
      margin-left: 20px;

      font-weight: 300;
      font-size: 16pt;
      transition: .5s;
      a {
        color: inherit;
        text-decoration: none;
        margin-bottom: 15px;
      }
    }
}
</style>
