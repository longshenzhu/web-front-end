import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
=======
import { Button } from 'vant'
import 'lib-flexible/flexible'
>>>>>>> 4d6009137a4c2eb2c02db962839a4c4cc29bc8a6

Vue.use(Button);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
