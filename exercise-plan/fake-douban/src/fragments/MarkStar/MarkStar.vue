<template>
<i class="score-star" :style="{backgroundPosition: scoreLevel}"></i>
</template>

<script>

export default {
  props: ['score'],
  computed: {
    scoreLevel() {
      let s = this.score;
      let s1 = Math.round(s);
      return '0 ' + (- (10 - s1) * 11) + 'px';
    }
  }
}
</script>

<style lang="scss">
  @import './MarkStar.scss';
</style>
