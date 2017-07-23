<template>
  <div id="contact" class="content-section">
    <div class="material-container">
      <div class="title-box">
        <div class="title">Contact</div>
      </div>
      <div id="contact-links">
        <div onClick="window.open('/downloads/Resume.pdf', '_blank')">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          Email
        </div>
        <div onClick="window.open('/downloads/Resume.pdf', '_blank')">
          <i class="fa fa-linkedin" aria-hidden="true"></i>
          LinkedIn
        </div>
        <div onClick="window.open('/downloads/Resume.pdf', '_blank')">
          <i class="fa fa-github" aria-hidden="true"></i>
          Github
        </div>
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
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    div {
      cursor: pointer;
    }
  }
</style>
