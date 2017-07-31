<template>
  <div id="biography" class="content-section">
    <div class="material-container">
      <div class="title-box">
        <div class="title">Biography</div>
        <div class="sub-title">About Me</div>
      </div>
      <div class="profile-container">
        <div id="profile-image-one" class="profile-image"></div>
        <div id="profile-image-two" class="profile-image"></div>
      </div>
      <div class="profile-bio" v-for="line in description">
        {{line}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "biography",
  data: function () {
    return {
      description: this.$staticData.biography
    }
  }
}
</script>

<style lang="scss">
  .profile-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 2fr 1fr;
    padding-bottom: 20px;
    .profile-image {
        background-size: cover;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

        height: 300px;
        width: 400px;
        border-radius: 3px;
    }
  }
  .profile-bio {
    padding: 15px 10px 0px;
    font-size: 11pt;
  }
  #profile-image-one {
    grid-column: 2;
    background-image: url(../../assets/profile1.jpg);
  }

  #profile-image-two {
    grid-column: 4;
    background-image: url(../../assets/profile2.jpg);
  }
</style>
