<template>
  <h3 class="h3-title">
    {{ title }}&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;
    <span v-if="!!more">(<a :href="href">{{ more }}</a>)</span>
  </h3>
</template>

<script>

export default {
  props: {
    'title': String, 
    'more': String, 
    'href': {
      default: '#',
      type: String
    }
  }
}
</script>

<style lang="scss">
  @import "./H3Title.scss";
</style>
