<template>
<section-container sectionClass="db-music">
  <!-- left -->
  <template #left>
    <left-title :title="title" :href="href" />
    <u-list :list="musicOptions">
      <template #content="{ info }">
        {{ info.title }}
      </template>
      <template #desc="{ info }">
        <img v-if="info.img" :src="info.img" :alt="info.title">
      </template>
    </u-list>
    <u-list :list="appList" listClass="app-list">
      <template #content="{ info }">
        <i class="app-item" :style="{backgroundPosition: info.offset + 'px 0'}"></i>
      </template>
      <template #desc="{ info }">
        <a class="app-title" :href="info.href">{{ info.title }}</a>
      </template>
    </u-list>
  </template>
  <!-- riht -->
  <template #right>
    <h3-title :title="populars.title" :more="populars.more"></h3-title>
    <img-list :list="popularList" itemClass="clearfix">
      <template #pre="{ info }">
        <span class="num">{{ info.index + 1 + '.' }}</span>
      </template>
      <template #desc="{ info }">
        <h4 class="music-title-box"><a class="music-title" :href="info.href">{{ info.title }}</a></h4>
        <p class="music-school">{{ info.school }}</p>
        <p class="popular-count">{{ info.count }}人关注</p>
      </template>
    </img-list>
  </template>
  <!-- main -->
  <template #main>
    <h3-title :title="newDisc.title" :more="newDisc.more"></h3-title>
    <img-list :list="newDiscList">
      <template #desc="{ info }">
        <div class="music-title-box">{{ info.index + 1 + '.' }}<a class="music-title" :href="info.href">{{ info.title }}</a></div>
        <div class="music-artist-box"><a class="music-artist" :href="info.href">{{ info.artist }}</a></div>
        <div class="score-box clearfix">
          <mark-star v-if="info.score" :score="info.score" />
          <span class="score-num" :class="{'no-score': !info.score}">{{ info.score? info.score.toFixed(1): '暂无评分' }}</span>
        </div>
      </template>
    </img-list>
    <h3-title :title="hotMusic.title" :more="hotMusic.more"></h3-title>
    <img-list :list="hotMusicList" listClass="hot-music-menu">
      <template #desc="{ info }">
        <div class="music-title-box"><a class="music-title" :href="info.href">{{ info.title }}</a></div>
      </template>
    </img-list>
  </template>
</section-container>
</template>

<script>
import SectionContainer from "@/fragments/SectionContainer/SectionContainer";
import LeftTitle from "@/fragments/LeftTitle/LeftTitle";
import H3Title from "@/fragments/H3Title/H3Title";
import UList from "@/fragments/lists/UList";
import ImgList from "@/fragments/ImgList/ImgList";
import MarkStar from "@/fragments/MarkStar/MarkStar";

import dbMusicData from '@/data/dbMusicData';

export default {
  data() {
    return {
      ...dbMusicData
    }
  },
  components: {
    SectionContainer, LeftTitle, H3Title, UList, ImgList, MarkStar
  }
}
</script>

<style lang="scss">
  @import "./DbMusic.scss";
</style>
