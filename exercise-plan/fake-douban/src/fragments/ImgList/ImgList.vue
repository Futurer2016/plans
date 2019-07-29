<template>
<!-- <ul class="img-list" :class="listClass">
  <li v-for="(info, index) in list" :key="index" class="img-item">
    <a class="img-link" :href="info.href">
      <img :src="info.img" :alt="info.title" :class="info.imgClass">
    </a>
    <slot name="desc" :info="info"></slot>
  </li>
</ul> -->
<u-list :list="list" :listClass="'img-list ' + listClass" :itemClass="itemClass">
  <template #pre="{ info }">
    <slot name="pre" :info="info"></slot>
  </template>
  <template #content="{ info }">
    <img :src="info.img" :alt="info.title" :class="info.imgClass">
  </template>
  <template #desc="{ info }">
    <slot name="desc" :info="info"></slot>
  </template>
</u-list>
</template>

<script>
import UList from './../lists/UList';
/**
 * list: [
 *  {
 *   href: '',
 *   title: '',
 *   type: '',
 *   imgClass: '',
 *   img: imgImportedFile
 *  }
 * ]
 */
export default {
  props: {
    'listClass': {
      default: '',
      type: String
    },
    'itemClass': {
      default: '',
      type: String
    },
    'list': Array
  },
  components: {
    UList
  }
}
</script>

<style lang="scss">
  @import "./ImgList.scss";
</style>
