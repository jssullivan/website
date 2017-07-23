<template>
  <div id="biography" class="content-section">
    <div class="material-container">
      <div class="title-box">
        <div class="title">Biography</div>
        <div class="sub-title">About Me</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "biography"
}
</script>

<style lang="scss">
  #biography {

    .material-container {
      display: grid;
      grid-template-columns: 1fr 5fr 1fr;
      grid-template-rows: auto 70px;

    }
  }
</style>
