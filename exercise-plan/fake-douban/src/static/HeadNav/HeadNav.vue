<template>
  <div class="head-nav">
    <!-- logo -->
    <h1>
      <router-link to="/">{{ title }}</router-link>
    </h1>
    <!-- search -->
    <div class="nav-search">
      <span class="inp">
        <input type="text" :placeholder="searchTip">
      </span>
      <span class="btn">
        <input type="submit" value="搜索">
      </span>
    </div>
    <!-- 导航 -->
    <ul class="nav-list">
      <li v-for="(nav, index) in navList" :key="index">
        <a :href="nav.href" :style="'background-position: ' + nav.offsetX + 'px 0px;'">{{ nav.msg }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '豆瓣',
      searchTip: '书籍、电影、音乐、小组、小站、成员',
      navList: [
        {href: '#', msg: '豆瓣读书', offsetX: 0},
        {href: '#', msg: '豆瓣电影', offsetX: -60},
        {href: '#', msg: '豆瓣音乐', offsetX: -120},
        {href: '#', msg: '豆瓣小组', offsetX: -180},
        {href: '#', msg: '豆瓣同城', offsetX: -299},
        {href: '#', msg: '豆瓣FM', offsetX: -241},
        {href: '#', msg: '豆瓣时间', offsetX: -299},
        {href: '#', msg: '豆瓣豆品', offsetX: -423}
      ]
    }
  }
}
</script>

<style lang="scss">
@import "./HeadNav.css";
</style>
