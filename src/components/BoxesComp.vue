<template>
  <div class="titleBox" :id="boxesData.title.split(' ').join('-').toLowerCase()">
    <div class="title">{{boxesData.title}}</div>
    <div class="desc">{{boxesData.description}}</div>
  </div>
  <div class="boxes">
    <ul>
      <li v-for="(item, index) in boxesData.boxes" :key="index">
        <div class="box">
          <i :style="{ 'background-image': 'url(' + item.image + ')' }"></i>
          <div class="title">{{item.title}}</div>
          <div class="desc">{{item.desc}}</div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
import "../assets/css/boxesComp.min.css"

export default {
  props:['boxesData'],
}
</script>

