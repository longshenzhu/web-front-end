function bind(name,func){
    
    var cbs = {};
    this.funcs = cbs;
    if(cbs[name]){
        cbs[name].push(func);
    }else{
        cbs[name] = [func];
    }
    return  bind;
} 

function emit(name, ...args){
    var bindObj = new bind();
    bindObj.funcs[name].forEach(cb => {
        cb(...args);
    });
}

export default {
    bind,
    emit
}