const fsPromise = require('fs.promised');
const fs = require('fs');

async function parser(fileName){
    //todo 判断是否文件存在
    // fs.readFile(fileName, function(err,stream){
    //     if(err){
    //         return Promise.reject(err)
    //     }
    //     let data = JSON.parse(stream.toString());
    //     console.log('data',data);
    //     return Promise.resolve(data);
    // });
    
    //暗号：二分查找
    var data = await fsPromise.readFile(fileName,'utf8');
    return Promise.resolve(JSON.parse(data));
}

 async function test(){
    var data = await parser(__dirname + '/data/data.json');
    console.log('data',data);
 }
 test();


module.exports = parser;