<template>
<div class="section" :class="sectionClass">
  <div class="container clearfix">
    <aside v-if="hasLeft" class="left-side clearfix">
      <slot name="left"></slot>
    </aside>
    <aside v-if="hasRight" class="right-side">
      <slot name="right"></slot>
    </aside>
    <div v-if="hasMain" class="main">
      <slot name="main"></slot>
    </div>
  </div>
</div>
</template>

<script>

export default {
  props: ['sectionClass'],
  computed: {
    /**
     * 判断插槽是否提供
     */
    hasLeft: function() {
      return !! this.$scopedSlots.left;
    },
    hasRight: function() {
      return !! this.$scopedSlots.right;
    },
    hasMain: function() {
      return !! this.$scopedSlots.main;
    }
  }
}
</script>

<style lang="scss">
  @import "./SectionContainer.scss";
</style>
