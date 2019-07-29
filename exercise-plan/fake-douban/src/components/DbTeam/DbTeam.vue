<template>
<section-container sectionClass="db-team">
  <!-- left -->
  <template #left>
    <left-title :title="title" />
    <u-list :list="teamOptions">
      <template #content="{ info }">
        {{ info.title }}
      </template>
    </u-list>
  </template>
  <!-- right -->
  <template #right>
    <h3-title :title="classifyTeam.title"></h3-title>
    <template v-for="(group, index) in classifyList">
      <div class="team-group" :key="'group' + index">
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
    <h3-title :title="hotTeam.title" :more="hotTeam.more"></h3-title>
    <img-list :list="hotList" listClass="clearfix">
      <template #desc="{ info }">
        <div class="team-name"><a :href="info.href" target="_blank">{{ info.title }}</a></div>
        <div class="team-member-count">
          <span>{{ info.count }}个成员</span>
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

import dbTeamData from '@/data/dbTeamData';

export default {
  data() {
    return {
      ...dbTeamData
    }
  },
  components: {
    SectionContainer, LeftTitle, H3Title, UList, ImgList
  }
}
</script>

<style lang="scss">
  @import "./DbTeam.scss";
</style>
