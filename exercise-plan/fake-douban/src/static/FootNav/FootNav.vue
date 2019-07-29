<template>
<div class="db-foot">
  <div class="container clearfix">
    <div class="icp">
      <p>© 2005－2019 douban.com, all rights reserved 北京豆网科技有限公司</p>
      <p>
        <a href="#" target="_blank">京ICP证090015号</a>
        京ICP备11027288号 网络视听许可证
        <a href="#" target="_blank">0110418</a>
        号
      </p>
      <p>
        京网文[2015]2026-368号
        <img src="./../../assets/img/DbFoot/biaoshi.gif" alt="">
        <a href="#">京公网安备11010502000728</a>
        新出网证(京)字129号
      </p>
      <p>
        违法和不良信息举报电话：4008353331-9 jubao@douban.com
      </p>
      <p>
        <img class="jubao" src="./../../assets/img/DbFoot/jubao.png" alt="">
        <a href="#" target="_blank">中国互联网举报中心</a>
         电话：12377 
        <a href="#">新出发京批字第直160029号</a>
      </p>
    </div>
    <div class="menu">
      <div class="menu-list">
        <template v-for="(item, index) in menus">
          <span v-if="index !== 0" :key="'point' + index">&nbsp;·&nbsp;</span>
          <a href="#" :key="'item' + index">{{ item }}</a>
        </template>
      </div>
      <a class="jubao-area" href="#">
        <img src="./../../assets/img/DbFoot/jubao-area.jpg" alt="">
      </a>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data() {
    return {
      menus: ['关于豆瓣', '在豆瓣工作', '联系我们', '法律声明', '帮助中心', '移动应用', '豆瓣广告']
    }
  }
}
</script>

<style lang="scss">
  @import "./FootNav.scss";
</style>
