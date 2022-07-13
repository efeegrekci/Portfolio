<template>
  <div class="bannerSlide">
    <ul>
      <li v-for="(item, index) in bannerData" :key="index">
        <div class="textBox">
          <div class="title" v-html="item.title"></div>
          <div class="desc" v-html="item.description"></div>
          <div class="bannerButton">
            <a :href="item.buttonLink" target="_blank">
              <span>HIRE ME</span>
            </a>
          </div>
        </div>
        <div class="bgImage"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import "../assets/css/bannerSlideComp.min.css" 

export default {
  props: ['bannerData'],
}
</script>
