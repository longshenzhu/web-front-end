<template>
  <div class="m-header">
      <div class="icon"></div>
      <h1 class="text">Chicken Music</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable";
    @import "~common/stylus/mixin";
    .m-header
        position relative
        height: 44px
        text-align: center
        color: $color-theme
        font-size: 0
        .icon
            display: inline-block
            vertical-align:top

</style>