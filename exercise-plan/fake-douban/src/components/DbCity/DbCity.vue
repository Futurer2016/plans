<template>
<section-container sectionClass="db-city">
  <!-- left -->
  <template #left>
    <left-title :title="title" />
    <u-list :list="cityMenu">
      <template #content="{ info }">
        {{ info.title }}
      </template>
    </u-list>
  </template>
  <!-- right -->
  <template #right>
    <h3-title :title="activities.title"></h3-title>
    <template v-for="(group, index) in activityGroups">
      <div class="activity-group" :key="'group' + index">
        <h4>
          <a :href="group.href">{{ group.title }}»</a>
        </h4>
      </div>
      <u-list :list="group.list" listClass="clearfix" :key="'list' + index">
        <template #content="{ info }">
          {{ info.title }}
        </template>
      </u-list>
    </template>
  </template>
  <!-- main -->
  <template #main>
    <h3-title :title="hotActivities.title" :more="hotActivities.more"></h3-title>
    <img-list :list="hotActivityList" listClass="clearfix">
      <template #desc="{ info }">
        <div class="activity-desc">
          <h4><a :href="info.href">{{ info.title }}</a></h4>
          <p>{{ info.time }}</p>
          <p class="ellipsis">{{ info.addr }}</p>
          <p>{{ info.count }}人关注</p>
        </div>
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

import dbCityData from '@/data/dbCityData';

export default {
  data() {
    return {
      ...dbCityData
    }
  },
  components: {
    SectionContainer, LeftTitle, H3Title, UList, ImgList
  }
}
</script>

<style lang="scss">
  @import "./DbCity.scss";
</style>
