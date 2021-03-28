exports.hello ='world';
exports.add = function (a, b) {
    return a + b;
}
exports.geekbang = { hello: 'world'};

module.exports = {
    fn : function minus(a, b){
        return a - b;
    }
}

//验证被require是否是同一个引用
setTimeout(() => {
    console.log(module.exports);
}, 2000);