//套路：角色划分 --> 状态变化  --> 发布者通知到订阅者
class Publisher {
    constructor(){
        this.observers = [];
    }

    add(observer) {
        console.log('Publisher.add invoked');
        this.observers.push(observer);
    }

    remove(observer) {
        this.observers.forEach((item, i) => {
            if(item === observer){
                this.add.splice(i, 1);
            }
        })
    }

    notify(){
        this.observers.forEach(observer => {
            observer.update(this);
        });
    }
}

class Observer {
    constructor() {
        console.log('Observer created');
    }

    update(publisher) {
        console.log('Observer .update invoked');
    }
}


//业务中所有的定制化的发布者/订阅者逻辑都可以基于这两个基本类来编写。如下业务：
//定义一个具体的需求文档prd发布类
class PrdPublisher extends Publisher {
    constructor() {
        super();
        //初始化需求文档
        this.prdState = null;
        this.observers = [];
    }

    getState() {
        return this.prdState;
    }

    setState(state) {
        this.prdState = state;
        this.notify();
    }
}

//定义开发者订阅prd的发布
class DeveloperObserver extends Observer {
    constructor() {
        super();
        //需求文档一开始还不存在，prd初始为空对象
        this.prdState = {};
    }

    update(publisher) {
        this.prdState = publisher.getState();
        //调用事件发布后的业务处理逻辑
        this.work();
    }

    work() {
        const prd = this.prdState;
        //开始搬砖
        console.log('996 begins');
    }
}

//测试用例
// 创建订阅者：前端开发李雷
const liLei = new DeveloperObserver()
// 创建订阅者：服务端开发小A（sorry。。。起名字真的太难了）
const A = new DeveloperObserver()
// 创建订阅者：测试同学小B
const B = new DeveloperObserver()
// 韩梅梅出现了
const hanMeiMei = new PrdPublisher()
// 需求文档出现了
const prd = {
    // 具体的需求内容
}
// 韩梅梅开始拉群
hanMeiMei.add(liLei)
hanMeiMei.add(A)
hanMeiMei.add(B)
// 韩梅梅发送了需求文档，并@了所有人
hanMeiMei.setState(prd)