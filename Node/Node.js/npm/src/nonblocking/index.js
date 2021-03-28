const glob = require('glob');

//同步io
let result = null;
console.time('glob');
result = glob.sync(__dirname + '/**/*');
console.timeEnd('glob');
console.log(result)

//异步io
let result = null;
console.time('glob');
glob(__dirname + '/**/*', function (err, res) {
    result = res;
    console.log('got result');
});
console.timeEnd('glob');