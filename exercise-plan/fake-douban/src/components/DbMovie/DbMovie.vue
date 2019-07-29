<template>
<section-container sectionClass="db-movie">
  <template #left>
    <left-title :title="title" :href="href" />
    <u-list :list="movieOptions">
      <template #content="{ info }">
        {{ info.title }}
      </template>
      <template #desc="{ info }">
        <img v-if="info.img" :src="info.img" :alt="info.title">
      </template>
    </u-list>
  </template>
  <template #right>
    <h3-title :title="classifyMovie.title" :more="classifyMovie.more"></h3-title>
    <u-list :list="classifyList" listClass="classify-list clearfix">
      <template #content="{ info }">
        {{ info.title }}
      </template>
    </u-list>
    <h3-title :title="hotMovie.title" :more="hotMovie.more"></h3-title>
    <o-list :list="hotList" listClass="hot-list">
      <template #content="{ info }">
        {{ info.title }}
      </template>
    </o-list>
  </template>
  <template #main>
    <h3-title :title="playingMovie.title" :more="playingMovie.more"></h3-title>
    <img-list :list="playingList" listClass="clearfix">
      <template #desc="{ info }">
        <div class="movie-title-box"><a class="movie-title" :href="info.href">{{ info.title }}</a></div>
        <div class="score-box clearfix">
          <mark-star v-if="info.score" :score="info.score" />
          <span class="score-num" :class="{'no-score': !info.score}">{{ info.score? info.score.toFixed(1): '暂无评分' }}</span>
        </div>
        <a href="#" class="pick-seats">选座购票</a>
      </template>
    </img-list>
  </template>
</section-container>
</template>

<script>
import SectionContainer from "@/fragments/SectionContainer/SectionContainer";
import LeftTitle from "@/fragments/LeftTitle/LeftTitle";
import H3Title from "@/fragments/H3Title/H3Title";
import OList from "@/fragments/lists/OList";
import UList from "@/fragments/lists/UList";
import ImgList from "@/fragments/ImgList/ImgList";
import MarkStar from "@/fragments/MarkStar/MarkStar";

import dbMovieData from '@/data/dbMovieData';

export default {
  data() {
    return {
      ...dbMovieData
    }
  },
  components: {
    SectionContainer, LeftTitle, H3Title, OList, UList, ImgList, MarkStar
  }
}
</script>

<style lang="scss">
  @import "./DbMovie.scss";
</style>
