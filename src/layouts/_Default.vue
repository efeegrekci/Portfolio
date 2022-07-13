<template>
    <main v-if="dataLoaded" :class="{ active: menuStatus.infoActive }">
        <SideBarComp :menuStatusData="menuStatus" :mainData="mainData" />
        <router-view :mainData="mainData"></router-view>
        <MenuComp :menuStatusData="menuStatus" :mainData="mainData" />
        <HamburgerComp :menuStatusData="menuStatus" :mainData="mainData" />
        <div class="bgShadow" @click="closeInfo"></div>
    </main>
</template>

<script>
import axios from "axios";
import SideBarComp from "@/components/SideBarComp";
import MenuComp from "@/components/MenuComp";
import HamburgerComp from "@/components/HamburgerComp";

export default {
    name: "_Default",
    components: {
        SideBarComp,
        MenuComp,
        HamburgerComp
    },
    data() {
        return {
            menuStatus: {
                infoActive: false,
                menuActive: false
            },
            dataLoaded: false,
            mainData: {}
        };
    },
    mounted() {
        axios
            .get("https://mockapit.herokuapp.com/apis/62b64064deb7000ccd91a153")
            .then(response => {
                this.mainData = response.data
                this.dataLoaded = true;
            })
    },
    methods: {
        closeInfo: function () {
            this.menuStatus.infoActive = false
            document.documentElement.scrollTop = 0;
        }
    }
}
</script>