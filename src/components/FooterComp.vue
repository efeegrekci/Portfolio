<template>
    <footer class="footer">
        <div class="text">
            <span v-html="footerData.text"></span>
        </div>
    </footer>
</template>

<script>
import "../assets/css/footerComp.min.css"

export default {
  props:['footerData'],
}
</script>

