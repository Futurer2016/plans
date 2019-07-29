<template>
<ol class="o-list" :class="listClass">
  <li v-for="(info, index) in list" :key="index" class="o-item">
    <a class="o-link" :href="info.href" :target="info.target? info.target: '_blank'">
      <slot name="content" :info="info"></slot>
    </a>
    <slot name="desc" :info="info"></slot>
  </li>
</ol>
</template>

<script>
/**
 * list: [
 *  {
 *   href: '',
 *   target: '_blank'
 *  }
 * ]
 */
export default {
  props: {
    'listClass': String,
    'list': Array
  }
}
</script>

<style lang="scss">

</style>
