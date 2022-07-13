<template>
    <div v-if="dataLoaded" class="titleBox">
        <div class="title">{{ pageData.title }}</div>
        <div class="desc">{{ pageData.description }}</div>
    </div>
    <div class="imageBoxes">
        <ul>
            <li v-for="(item, index) in pageData.images" :key="index">
                <a :href="item.image" data-fancybox="imageBoxGroup">
                    <div class="img" :style="{ backgroundImage: `url(${item.thumbImage})` }"></div>
                    <div class="imgHover">
                        <i></i>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import "../assets/css/ImageBoxDetailComp.min.css"
import "@fancyapps/ui/dist/fancybox.css";
import { Fancybox } from "@fancyapps/ui";

export default {
    props: ['imageBoxDetailData'],
    data() {
        return {
            pageData: {},
            dataLoaded: false
        };
    },
    mounted() {
        setTimeout(() => {
            document.documentElement.scrollTop = 0;
        }, 300)

        Fancybox.bind("[data-fancybox]");
        this.pageData = this.imageBoxDetailData.find(
            (item) => item.path === this.$route.params.id
        );

        this.dataLoaded = true;
    }
}
</script>

