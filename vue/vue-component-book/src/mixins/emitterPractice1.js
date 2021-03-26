function broadcast(componentName, methodName, params){
    //1、遍历子组件，寻找componentName 匹配的组件；
    //2、找到就触发methodName，参数为params；未找到则递归遍历下一层子组件；
    this.children.forEach(component => {
        const name = component.$options.name;
        if(name == componentName){
            component.$emit.apply(component, [methodName].concat([params]));
        }else {
            broadcast.apply(component, [componentName, methodName].concat([params]));
        }
    });
}

function dispatch(componentName, methodName, params){

}

export default {
    methods: {
        dispatch(componentName, methodName, params){
            let parent = this.$parent || this.$root;
            let name = parent.$options.name;
            while(parent && (!name || name !== componentName)){
                parent = parent.$parent;
                if(parent){
                    name = parent.$options.name;
                }
            }
            if(parent){
                parent.$emit.apply(parent, [methodName].concat(params));
            }
        },
        broadcast(componentName, methodName, params){
            broadcast.call(this, componentName, methodName, params);
        }
    }
}