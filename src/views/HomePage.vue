<template>
  <section v-if="dataLoaded" class="content">
    <BannerComp :bannerData="bannerComp"/>
    <BoxesComp :boxesData="boxesComp" />
    <ListsComp v-for="(list, index) in listComp" :listData="list" :key="index" />
    <ImageBoxComp :imageBoxData="imageBoxComp" />
    <MapComp :mapData="mapComp" />
    <FooterComp :footerData="footerComp" />
  </section>
</template>

<script>
import BannerComp from "@/components/BannerComp";
import BoxesComp from "@/components/BoxesComp";
import ListsComp from "@/components/ListsComp";
import ImageBoxComp from "@/components/ImageBoxComp";
import MapComp from "@/components/MapComp";
import FooterComp from "@/components/FooterComp";

export default {
  name: "HomePage",
  props: ['mainData'],
  components: {
    BannerComp,
    BoxesComp,
    ListsComp,
    ImageBoxComp,
    MapComp,
    FooterComp
  },
  data() {
    return {
      listComp: {},
      bannerComp: {},
      imageBoxComp: {},
      boxesComp: {},
      mapComp: {},
      footerComp: {},
      dataLoaded: false
    };
  },
  mounted() {
    this.listComp = this.$props.mainData.listComp
    this.bannerComp = this.$props.mainData.bannerComp
    this.boxesComp = this.$props.mainData.boxesComp
    this.imageBoxComp = this.$props.mainData.imageBoxComp
    this.mapComp = this.$props.mainData.mapComp
    this.footerComp = this.$props.mainData.footerComp

    this.dataLoaded = true;
  }
}
</script>