<template>
  <div class="sideBar" :class="{ active: menuStatusData.infoActive }">
    <div class="imageBox">
      <div class="img" :style="{ backgroundImage: `url(${sideBarComp.image})` }"></div>
    </div>
    <div class="textBox">
      <div class="name">
        <span>{{ sideBarComp.fullName }}</span>
      </div>
      <div class="title">
        <span>{{ sideBarComp.title }}</span>
      </div>
    </div>
    <div class="socialLinks">
      <ul>
        <li v-for="(item, index) in sideBarComp.socialMediaLink" :key="index">
          <a :href="item.link" target="_blank" rel="noopener noreferrer">
            <i :style="{ backgroundImage: `url(${item.icon})` }"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="personelInfo">
      <ul>
        <li>
          <div class="first">Date Of Birth:</div>
          <div class="second">{{ sideBarComp.dateOfBirth }}</div>
        </li>
        <li>
          <div class="first">Email:</div>
          <div class="second"><a :href="`mailto:${sideBarComp.email}`">efe.egrekci</a></div>
        </li>
        <li>
          <div class="first">Freelance:</div>
          <div class="second green">{{ sideBarComp.freelance }}</div>
        </li>
        <li>
          <div class="first">Address:</div>
          <div class="second">{{ sideBarComp.address }}</div>
        </li>
      </ul>
    </div>
    <div class="skills">
      <div class="title">Languages</div>
      <ul>
        <li v-for="(lang, index) in sideBarComp.language" :value="lang" :key="index">
          <div class="text">
            <div class="first">{{ lang.name }}</div>
            <div class="second">{{ lang.text }}</div>
          </div>
          <div class="bar">
            <div class="barLine" :style="{ width: `${lang.point}%` }"></div>
          </div>
        </li>

      </ul>
    </div>
    <div class="skills">
      <div class="title">Skills</div>
      <ul>
        <li v-for="(skill, index) in sideBarComp.skills" :value="skill" :key="index">
          <div class="text">
            <div class="first">{{ skill.text }}</div>
            <div class="second">{{ skill.point }}%</div>
          </div>
          <div class="bar">
            <div class="barLine" :style="{ width: `${skill.point}%` }"></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="extraSkills">
      <div class="title">Extra Skills</div>
      <ul>
        <li v-for="(eskill, index) in sideBarComp.extraSkills" :value="eskill" :key="index">
          <span v-for="element in eskill.line" :key="element">{{ element }}</span>
        </li>
      </ul>
    </div>
    <div class="buttonBox">
      <a :href="sideBarComp.cvLink" target="_blank">
        <span>DOWNLOAD CV</span>
      </a>
    </div>
  </div>
</template>

<script>
import "../assets/css/sideBarComp.css";

export default {
  props: ['menuStatusData', 'mainData'],
  data() {
    return {
      sideBarComp: {},
    };
  },

  mounted() {
    this.sideBarComp = this.$props.mainData.sideBarComp
  }

}
</script>

