<template>
  <div class="titleBox" :id="listData.title.split(' ').join('-').toLowerCase()">
    <div class="title">{{listData.title}}</div>
    <div class="desc">{{listData.description}}</div>
  </div>
  <div class="listBox">
    <ul>
      <li v-for="(item, index) in listData.lists" :key="index">
        <div class="left">
          <div class="title">{{item.leftTitle}}</div>
          <div class="desc">{{item.leftDesc}}<span>{{item.date}}</span></div>
        </div>
        <div class="right">
          <div class="title">{{item.rightTitle}}</div>
          <div class="desc">{{item.rightDesc}}</div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
import "../assets/css/listsComp.min.css"

export default {
  props:['listData']
}
</script>

