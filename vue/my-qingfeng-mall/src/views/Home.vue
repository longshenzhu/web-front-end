<template>
  <div>
    <van-button type="primary">默认按钮</van-button>
    <div class="home">
      <div>您好</div>
      <div><i class="iconfont icon-favorites-fill"></i></div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  }
}
</script>

<style lang="less">
  .home {
    color: red;
    div {
      width: 75px;
      height: 75px;
      font-size: 18px;
      background: greenyellow;
      i {
        color: red;
      }
    }
  }
</style>