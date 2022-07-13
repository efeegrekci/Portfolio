<template>
 <div class="mapBox">
    <div class="map">
        <iframe :src="mapData.mapLink" width="100%" height="440" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
 </div>
</template>

<script>
import "../assets/css/mapComp.min.css"

export default {
  props:['mapData'],
}

</script>
