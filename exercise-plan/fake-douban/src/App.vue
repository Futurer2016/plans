<template>
  <div>
    <head-nav></head-nav>
    <router-view></router-view>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
import HeadNav from './static/HeadNav/HeadNav';
import FootNav from './static/FootNav/FootNav';

export default {
  components: {
    HeadNav, FootNav
  }
}
</script>

<style lang="scss">
</style>
