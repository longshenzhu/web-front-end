//引用传入的Vue构造函数
let Vue;

//VueRouter类: new VueRouter({routes: [...]})
class VueRouter {
    constructor(options){
        //保存选项备用
        this.$options = options

        //创建current保存当前url
        this.current = '/';
        //监听hashchange事件
        window.addEventListener('hashchange', this.onHashChange.bind(this))
    }
    onHashChange(){

    }
}

//实现install方法
//实现静态方法即可
// 参数1：Vue构造函数，Vue.use(VueRouter)
VueRouter.install = function(_Vue){
    Vue = _Vue;
    //1、挂载VueRouter实例
    //为了能够拿到Vue根实例中的router实例
    //可以可用全局混入
    Vue.mixin({
        beforeCreate(){
            if(this.$options.router){
                Vue.prototype.$router = this.$options.router;
            }
        }
    })
    Vue.prototype.$router = Vue;
    //2.注册两个组件： router-view，router-link
    Vue.component('router-view',{
        render(h){
            return h('div','router-view: nothing to show')
        }
    })
    Vue.component('router-link', {
        render(h){
            return h('a', 'router-link')
        }
    })
}