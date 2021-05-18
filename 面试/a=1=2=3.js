var a = {
    // 设置默认值为0
    value: 0,
    // 复写valueOf方法
    valueOf() {
        // 每次自增，让value慢慢增加
        this.value++;
        return this.value;
    }
 }
 console.log(a == 1 && a == 2 && a == 3);//true

 function throttle(fn, delay){
     let time = 0;
     return function(){
        let context = this;
        let args = arguments;
        let now = new Date().getTime();
        if( now - time > delay){
            time = now;
            fn.apply(context, Array.from(args));
        }
     }
 }

 function test(){
     var i =1;
     return function(){
        i++;
        console.log(i);
     }
 }

 var test1 = test();

 var test2 = throttle(test(), 10)
 for (let index = 0; index < 10000; index++) {
     test1();
     test2();
     
 }

 function debounce(fn, delay){
     let timeout;
     return function(){
         clearTimeout(timeout);
         timeout = setTimeout(()=> fn.apply(this, arguments), delay || 0);
     }
 }

 function objFactory(fn, ...args){
     let obj = {};
     let res = fn.apply(obj, args);
     obj.__proto__ = fn.protytype;
     return typeof res === 'object' ? res : obj;
 }


 Function.prototype.myApply = function(context, ...args){
    
    context.fn = this;
    var res = context.fn(args);
    delete context.fn;
    return res;
 }
