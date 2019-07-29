<template>
<section-container sectionClass="db-read">
  <!-- left -->
  <template #left>
    <left-title :title="title" :href="href" />
    <u-list :list="readOptions">
      <template #content="{ info }">
        {{ info.title }}
      </template>
      <template #desc="{ info }">
        <img v-if="info.img" :src="info.img" :alt="info.title">
      </template>
    </u-list>
    <u-list :list="appList" listClass="app-list">
      <template #content="{ info }">
        <i class="app-read"></i>
      </template>
      <template #desc="{ info }">
        <a class="app-title" :href="info.href">{{ info.title }}</a>
      </template>
    </u-list>
  </template>
  <!-- riht -->
  <template #right>
    <h3-title :title="hotTip.title" :more="hotTip.more"></h3-title>
    <template v-for="(group, index) in hotList">
      <u-list :list="group.list" listClass="clearfix" :key="'list' + index">
        <template #content="{ info }">
          {{ info.title }}
        </template>
      </u-list>
    </template>
  </template>
  <!-- main -->
  <template #main>
    <h3-title :title="newBook.title" :more="newBook.more"></h3-title>
    <img-list :list="newList" listClass="clearfix">
      <template #desc="{ info }">
        <div class="book-title-box ellipsis">
          <a class="book-title" :href="info.href">{{ info.title }}</a>
        </div>
        <div class="author-box ellipsis">
          <span>{{ info.author }}</span>
        </div>
        <a href="#" class="read-free bn-link">免费试读</a>
      </template>
    </img-list>
    <h3-title :title="originalWorks.title" :more="originalWorks.more"></h3-title>
    <img-list :list="originalList" listClass="clearfix">
      <template #desc="{ info }">
        <div class="book-title-box ellipsis">
          <a class="book-title" :href="info.href">{{ info.title }}</a>
        </div>
        <div v-if="info.author" class="author-box ellipsis">
          <span>{{ info.author }}</span>
        </div>
        <div>免费</div>
        <a href="#" class="read-free bn-link">免费试读</a>
      </template>
    </img-list>
  </template>
</section-container>
</template>

<script>
import SectionContainer from "./../../fragments/SectionContainer/SectionContainer";
import LeftTitle from "./../../fragments/LeftTitle/LeftTitle";
import H3Title from "./../../fragments/H3Title/H3Title";
import UList from "./../../fragments/lists/UList";
import ImgList from "./../../fragments/ImgList/ImgList";

import dbReadData from './../../data/dbReadData';

export default {
  data() {
    return {
      ...dbReadData
    }
  },
  components: {
    SectionContainer, LeftTitle, H3Title, UList, ImgList
  }
}
</script>

<style lang="scss">
  @import "./DbRead.scss";
</style>
