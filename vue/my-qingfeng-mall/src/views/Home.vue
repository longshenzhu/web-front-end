<template>
  <div>
    <h3>this is {{ $store.state.cartCount }}</h3>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
}
</script>

<style>

</style>