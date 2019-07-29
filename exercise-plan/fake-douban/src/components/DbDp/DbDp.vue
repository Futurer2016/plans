<template>
<section-container sectionClass="db-dp">
  <template #left>
    <left-title :title="title"></left-title>
  </template>
  <template #right>
    <h3-title :title="hotActivity.title" :more="hotActivity.more"></h3-title>
    <a class="head-img">
      <img src="./../../assets/img/DbDp/head-img.jpg" alt="我的豆瓣收藏夹里有什么">
    </a>
    <div class="my-db">
      <a href="#">我的豆瓣收藏夹里有什么</a>
    </div>
    <h3-title :title="officialTeam.title" :more="officialTeam.more"></h3-title>
  </template>
  <template #main>
    <h3-title :title="hotGoods.title" :more="hotGoods.more"></h3-title>
    <img-list listClass="clearfix" :list="hotGoodsList">
      <template #desc="{ info }">
        <span class="price">￥{{ info.price.toFixed(2) }}</span>
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

import dbDpData from '@/data/dbDpData';

export default {
  data() {
    return {
      ...dbDpData
    }
  },
  components: {
    SectionContainer, LeftTitle, H3Title, ImgList
  }
}
</script>

<style lang="scss">
  @import "./DbDp.scss";
</style>
