<template>
  <div class="hamburger">
    <div class="left">
      <div class="profilButton" @click="openInfo">
        <div class="img" :style="{ 'background-image': 'url(' + mainData.sideBarComp.image + ')' }"></div>
      </div>
    </div>
    <div class="right">
      <div class="menuButton" @click="openMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/hamburgerComp.min.css"

export default {
  props: ['menuStatusData', 'mainData'],
  methods: {
    openInfo: function () {
      this.$props.menuStatusData.infoActive = !this.$props.menuStatusData.infoActive;
      this.$props.menuStatusData.menuActive = false
      document.documentElement.scrollTop = 0;
    },
    openMenu: function () {
      this.$props.menuStatusData.menuActive = !this.$props.menuStatusData.menuActive;
      this.$props.menuStatusData.infoActive = false
    }
  }
}

</script>
