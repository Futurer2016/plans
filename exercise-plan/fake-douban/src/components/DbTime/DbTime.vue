<template>
<section-container sectionClass="db-time">
  <template #left>
    <left-title :title="title"></left-title>
  </template>
  <template #main>
    <h3-title :title="h3.title" :more="h3.more"></h3-title>
    <img-list listClass="clearfix" :list="hotList">
      <template #desc="{ info }">
        <div class="desc">
          <a class="title" :href="info.href">{{ info.title }}</a>
          <p v-if="info.type" class="type">{{ info.type }}</p>
        </div>
      </template>
    </img-list>
  </template>
</section-container>
</template>

<script>
import SectionContainer from "./../../fragments/SectionContainer/SectionContainer";
import LeftTitle from "./../../fragments/LeftTitle/LeftTitle";
import H3Title from "./../../fragments/H3Title/H3Title";
import ImgList from "./../../fragments/ImgList/ImgList";

import dbTimeData from './../../data/dbTimeData';

export default {
  components: {
    SectionContainer, LeftTitle, H3Title, ImgList
  },
  data() {
    return {
      ...dbTimeData
    }
  }
}
</script>

<style lang="scss">
  @import './DbTime.scss';
</style>
