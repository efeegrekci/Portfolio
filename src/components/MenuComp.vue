<template>
    <div class="menu" :class="{ active: menuStatusData.menuActive }">
        <ul>
            <li v-for="(item, index) in menuComp" :key="index">
                <router-link :to="item.menuLink === '#contact' ? '' : '/' + item.menuLink && item.menuLink === '#home' ? '/' : '/' + item.menuLink" @click="menuClick(item.menuLink)">
                    <div class="tooltip">
                        <span>{{ item.menuName }}</span>
                    </div>
                    <i :style="{ 'background-image': 'url(' + item.menuIcon + ')' }"></i>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import "../assets/css/menuComp.min.css"

export default {
    props: ['menuStatusData', 'mainData'],
    data() {
        return {
            menuComp: {},
        };
    },
    mounted() {
        this.menuComp = this.$props.mainData.menuComp
    },
    methods: {
        menuClick: function (menuLink) {
            if(menuLink === "#contact"){
                window.open('https://www.linkedin.com/in/efeegrekci/', '_blank');
            }else if(menuLink === "#home"){
                document.documentElement.scrollTop = 0;
            }
        }
    }
}
</script>
