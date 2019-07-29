<template>
<div class="side-links">
  <ul>
    <li v-for="(item, index) in list" :key="index" :class="{'new-link': item.isNew}">
      <a v-if="item.img" :href="item.href" :target="item.target">
        <img :src="item.img" :alt="item.msg">
      </a>
      <a :href="item.href" :target="item.target">{{ item.msg }}</a>
    </li>
  </ul>
</div>
</template>

<script>

export default {
  props: {
    'list': {
      type: Array
    }
  }
}
</script>

<style lang="scss">

</style>
