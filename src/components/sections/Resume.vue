<template>
  <div id="resume" class="content-section">
    <div class="material-container">
      <div class="title-box">
        <div class="title">Resume</div>
        <div class="sub-title">PDF Download</div>
      </div>
      <div class="download-grid">
        <div onClick="window.open('/static/Resume.pdf', '_blank')" class="download-box">
          <i class="fa fa-download" aria-hidden="true"></i>
          <span class="download-text"> Resume</span>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "resume",
  data: function () {
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
    border-radius: 2px;
    font-size: 16pt;
    font-weight: 200;


  }

}

</style>
