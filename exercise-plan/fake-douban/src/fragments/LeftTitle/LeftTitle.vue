<template>
  <h2 class="section-title" :class="titleClass">
    <a :href="href" :target="target">{{ title }}</a>
  </h2>
</template>

<script>

export default {
  props: {
    'titleClass': {
      default: '',
      type: String
    },
    'title': {
      required: true,
      type: String
    },
    'target': {
      default: '_blank',
      type: String
    },
    'href': {
      default: '#',
      type: String
    }
  }
}
</script>

<style lang="scss">
  @import "./LeftTitle.scss";
</style>
