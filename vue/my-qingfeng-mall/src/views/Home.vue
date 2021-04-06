<template>
  <div>
<<<<<<< HEAD
    <h3>this is {{ $store.state.cartCount }}</h3>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
=======
    <van-button type="primary">默认按钮</van-button>
    <div class="home">
      <div>您好</div>
      <div><i class="iconfont icon-favorites-fill"></i></div>
    </div>
    
>>>>>>> 4d6009137a4c2eb2c02db962839a4c4cc29bc8a6
  </div>
</template>

<script>
<<<<<<< HEAD
import { mapState } from 'vuex'
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
=======

export default {
  name: 'Home',
  components: {

  }
>>>>>>> 4d6009137a4c2eb2c02db962839a4c4cc29bc8a6
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