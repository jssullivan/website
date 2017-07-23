<template>
  <div id="resume" class="content-section">
    <div class="material-container">
      <div class="title-box">
        <div class="title">Resume</div>
        <div class="sub-title">PDF Download</div>
      </div>
      <div class="download-grid">
        <div onClick="window.open('/downloads/Resume.pdf', '_blank')" class="material-container download-box">
          <i class="fa fa-download" aria-hidden="true"></i>
          <span class="download-text"> Resume.pdf</span>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "resume",
  data: function () {
    return {
      scrollOpacity: 1
    }
  }
}
</script>

<style lang="scss">
.download-grid {
  display: flex;
  justify-content: center;
  .download-box {
    grid-column: 2;
    margin: 0px;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    cursor: pointer;
    &:hover {
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
    &:active {
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
    .download-text {
      padding-left: 15px;
    }
  }

}

</style>
