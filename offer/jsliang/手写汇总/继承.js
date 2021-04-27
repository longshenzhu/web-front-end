// 原型链继承
// 借用构造函数继承
// 组合式继承
// 寄生式组合继承
// es6 class

// const { for } = require("core-js/fn/symbol");

//数组去重
function unique(arr) {
    var res = arr.filter((item, index, array) => {
        return array.indexOf(item) === index;
    })
    return res;
}
var unique = arr => [... new Set(arr)];

//数组扁平化
[1, [2, [3]]].flat(2)  // [1, 2, 3]
function flatten(arr) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if(Array.isArray(item)){
            result = result.concat(flatten(item))
        }else {
            result.push(item);
        }
    }
    return result;
}