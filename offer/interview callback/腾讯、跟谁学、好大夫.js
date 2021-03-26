//1、水平矩形相交面积计算
//四条平行线决定一个矩形,可以用数组确定一个矩形 retang1= [x1left,x1right, y1top, y1bottom] 、 retange2 = [x2left, x2right, y2top, y2bottom]
//一共8条线，去max(x1left, x2left)、max(y1bottom, y2bottom) 、min(x1right,x2right) 、min(y1top,y2top),这四条线围成的面积即为重合面积。
function calc_area(retange1 = [x1left,x1right, y1top, y1bottom], retange2= [x2left, x2right, y2top, y2bottom]){
    var left = Math.max(x1left, x2left);
    var right = Math.min(x1right,x2right);
    var top = Math.min(y1top,y2top);
    var bottom = Math.max(y1bottom, y2bottom);

    var width = right - left;
    var height = top = bottom;
    if(width <=0 || height <= 0){
        return 0;
    }
    return width * height;
}
//2、生命周期详细描述、响应式实现（双向）、vuex实现原理、vueRouter实现原理
//3、观察者模式、单例模式
//单例模式实现：
class Singleton{
    constructor(){
        if(!Singleton.instance){
            this.name = null;
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
    setName(name) {
        this.name = name;
    }

    toString() {
        console.log(`This is Singleton toString, the name is ${this.name}.`);
    }
    static getInstance(){
        if(!this.instance){         // static中，this是Singleton 类型，而不是对象
            this.instance = new Singleton();
        }
        return this.instance;
    }
}
let sing1 = Singleton.getInstance();
let sing2 = Singleton.getInstance();
let sing3 = new Singleton();
let sing4 = new Singleton();
console.log(sing1 === sing2);
console.log(sing2 === sing3);
console.log(sing3 === sing4);

//观察者模式
//多个观察者可以监听同一个主题对象，主题对象发生变化时，触发观察者的更新。
//最简版：
class Observer {
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
        this.subject.attach(this);
    }

    update() {
        console.log(`${this.name} and subject.state: ${this.subject.state}`);
    }
}

class Subject {
    constructor(){
        this.state = 1;
        this.observers = [];
    }
    getState() {
        return this.state;
    }
    setState(value){
        this.state = value;
        this.notify();
    }
    notify(){
        this.observers.forEach(observer=> observer.update())
    }
    attach(observer){
        this.observers.push(observer);
    }
}
var subject = new Subject();
var ob1 = new Observer('ob1', subject);
var ob2 = new Observer('ob2', subject);

subject.setState(2);
subject.setState(3);

//发布订阅版本

//4、css3相关：meta新属性、媒体查询、水平垂直居中、定位方式、flex、清楚浮动
//5、webpack相关