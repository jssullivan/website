<template>
  <div id="contact" class="content-section">
    <div class="material-container">
      <div class="title-box">
        <div class="title">Contact</div>
        <div class="sub-title">Links</div>
      </div>
      <div id="contact-links">
        <a href="mailto:james@scelos.com" target="_blank">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          Email
        </a>
        <a href="https://www.linkedin.com/in/james-sullivan-601b10108" target="_blank">
          <i class="fa fa-linkedin" aria-hidden="true"></i>
          LinkedIn
        </a>
        <a href="https://github.com/jssullivan" target="_blank">
          <i class="fa fa-github" aria-hidden="true"></i>
          Github
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  data: function () {
    return {
      scrollOpacity: 1
    }
  }
}
</script>

<style lang="scss">
  #contact-links {
    font-size: 16pt;
    font-weight: 200;
    display: grid;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr;

    div {
      cursor: pointer;
    }
  }
</style>
