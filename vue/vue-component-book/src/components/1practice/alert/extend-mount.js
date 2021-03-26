import Vue from 'vue';

//创建构造器
const AlertCompont = Vue.extend({
    template: '<div>{{message}}</div>',
    data() {
        return {
            message: 'Hello, Aresn'
        }
    },
});

//进行手动渲染，component是一个标准的vue组件实例，可以访问$el;
const component = new AlertCompont().$mount();
document.body.appendChild(component.$el);
// 在 $mount 里写参数来指定挂载的节点
new AlertComponent().$mount('#app');
// 不用 $mount，直接在创建实例时指定 el 选项
new AlertComponent({ el: '#app' });


//除了extend也可以使用Vue创建实例
import Notification from './notification.vue'
const props = {};
const instance = new Vue({
    render(h) {
        return h(Notification, {
            props: props
        });
    },
})
const component = Instance.$mount();
document.body.appendChild(component.$el);