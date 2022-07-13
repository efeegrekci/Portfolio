<template>
    <div class="titleBox" :id="imageBoxData.title.split(' ').join('-').toLowerCase()">
        <div class="title">{{ imageBoxData.title }}</div>
        <div class="desc">{{ imageBoxData.description }}</div>
    </div>
    <div class="imageBoxes">
        <ul>
            <li v-for="(item, index) in imageBoxData.images.slice(0, total)" :key="index">
                <router-link :to="'/portfolio/' + item.path">
                    <div class="img" :style="{ backgroundImage: `url(${item.image})` }"></div>
                    <div class="imageTextBar">
                        <div class="text">{{ item.name }}</div>
                    </div>
                </router-link>
            </li>
        </ul>
        <div v-if="imageBoxData.images.length > increase && imageBoxData.images.length > total" class="seeMoreButton">
            <a href="javascript:;" @click="seeMoreButton">
                <span>See More</span>
            </a>
        </div>
    </div>
</template>

<script>
import "../assets/css/ImageBoxComp.min.css"
import "@fancyapps/ui/dist/fancybox.css";
import { Fancybox } from "@fancyapps/ui";

export default {
    props: ['imageBoxData'],
    data: function () {
        return {
            increase: 3,
            total: 6
        }
    },
    mounted() {
        Fancybox.bind("[data-fancybox]");

    },
    methods: {
        seeMoreButton() {
            this.total += this.increase;
        }
    }
}
</script>

