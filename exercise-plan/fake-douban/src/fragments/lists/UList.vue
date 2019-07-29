<template>
<ul class="u-list" :class="listClass">
  <li v-for="(info, index) in list" :key="index" class="u-item" :class="itemClass">
    <slot name="pre" :info="{ ...info, index}"></slot>
    <a class="u-link" :href="info.href" :target="info.target? info.target: '_blank'">
      <slot name="content" :info="{ ...info, index}"></slot>
    </a>
    <slot name="desc" :info="{ ...info, index}"></slot>
  </li>
</ul>
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
    'listClass': {
      default: '',
      type: String
    },
    'itemClass': {
      default: '',
      type: String
    },
    'list': Array
  }
}
</script>

<style lang="scss">

</style>
