<template>
  <section v-if="dataLoaded" class="content detail">
    <ImageBoxDetailComp :imageBoxDetailData="imageBoxCompDetail" />
    <FooterComp :footerData="footerComp" />
  </section>
</template>

<script>
import ImageBoxDetailComp from "@/components/ImageBoxDetailComp";
import FooterComp from "@/components/FooterComp";

export default {
  name: "HomePage",
  props: ['mainData'],
  components: {
    ImageBoxDetailComp,
    FooterComp
  },
  data() {
    return {
      imageBoxCompDetail: {},
      footerComp: {},
      dataLoaded: false
    };
  },
  mounted() {
    this.imageBoxCompDetail = this.$props.mainData.imageBoxDetailComp
    this.footerComp = this.$props.mainData.footerComp


    this.dataLoaded = true;
  }
}
</script>