<template>
<section-container sectionClass="db-sns">
  <template #right>
    <div class="side-head">
      <a href="#"><img src="./../../assets/img/DbSns/side-head.jpg"></a>
    </div>
    <div class="side-body">
      <h3-title :title="hotTopic.title" :more="hotTopic.more"></h3-title>
      <u-list :list="topicList">
        <template #content="{ info }">
          {{ info.title }}
          <p class="topic-ad" v-if="info.isAd">广告</p>
        </template>
        <template #desc="{ info }">
          <p>
            <span v-if="info.topicType">{{ info.topicType }}&nbsp;·&nbsp;</span>
            <span>{{ info.readCount }}人浏览</span>
          </p>
        </template>
      </u-list>
    </div>
  </template>
  <template #main>
    <h3-title :title="hotImgs.title" :more="hotImgs.more"></h3-title>
      <div class="main-body">
        <!-- 相册空间 -->
        <div class="albums">
          <img-list listClass="clearfix" :list="albums">
            <template #desc="{ info }">
              <div class="desc">
                <h3>
                  <a :href="info.href">{{ info.title }}</a>
                  <span>{{ info.count }}张照片</span>
                </h3>
              </div>
            </template>
          </img-list>
        </div>
        <!-- 笔记列表 -->
        <div class="notes">
          <u-list :list="notes">
            <template #content="{ info }">
              {{ info.title }}
            </template>
            <template #desc="{ info }">
              <template v-if="info.author && info.content">
                <p class="author">{{ info.author }}</p>
                <p class="content">{{ info.content }}</p>
              </template>
            </template>
          </u-list>
        </div>
      </div>
  </template>
</section-container>
</template>

<script>
import SectionContainer from "@/fragments/SectionContainer/SectionContainer";
import H3Title from "@/fragments/H3Title/H3Title";
import UList from "@/fragments/lists/UList";
import ImgList from "@/fragments/ImgList/ImgList";

import dbSnsData from '@/data/dbSnsData';

export default {
  data() {
    return {
      ...dbSnsData
    }
  },
  components: {
    SectionContainer, H3Title, UList, ImgList
  }
}
</script>

<style lang="scss">
  @import "./DbSns.scss";
</style>
