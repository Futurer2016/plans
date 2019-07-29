<template>
<section-container sectionClass="db-video">
  <template #left>
    <left-title :title="title"></left-title>
  </template>
  <template #main>
    <a href="#">
      <h3-title :title="talks.title"></h3-title>
    </a>
    <img-list listClass="clearfix" :list="list1">
      <template #desc="{ info }">
        <a target="_blank" :href="info.href">{{ info.title }}</a>
      </template>
    </img-list>
    <a href="#">
      <h3-title :title="movieShow.title"></h3-title>
    </a>
    <img-list listClass="clearfix" :list="list2">
      <template #desc="{ info }">
        <a target="_blank" :href="info.href">{{ info.title }}</a>
      </template>
    </img-list>
  </template>
</section-container>
</template>

<script>
import SectionContainer from "@/fragments/SectionContainer/SectionContainer";
import LeftTitle from "@/fragments/LeftTitle/LeftTitle";
import H3Title from "@/fragments/H3Title/H3Title";
import ImgList from "@/fragments/ImgList/ImgList";

import dbVideoData from '@/data/dbVideoData';

export default {
  data() {
    return {
      ...dbVideoData
    }
  },
  components: {
    SectionContainer, LeftTitle, H3Title, ImgList
  }
}
</script>

<style lang="scss">
  @import "./DbVideo.scss";
</style>
