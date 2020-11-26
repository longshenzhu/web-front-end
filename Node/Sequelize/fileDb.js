const fsPromise = require('fs.promised');
const fs = require('fs');
// const db = require('./db.json');

function get(key){
    fs.readFile('./db.json',(err,data)=>{
        console.log(typeof data);
        const json = JSON.parse(data);
        console.log(json[key]);
        return json[key];
    })
};

function set(key, value){
    fs.readFile('./db.json',(err,data)=>{
        console.log(data);
        const json = data.length>0 ? JSON.parse(data): {};
        json[key] = value;

        fs.writeFile('./db.json',JSON.stringify(json),err =>{
            if(err){
                console.log(err);
                return;
            }
            console.log("写入成功！")  
        })
    })
}

//命令行处理
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line',function(input){
    const [op,key,value] = input.split(" ");

    if(op === 'get'){
        get(key);
    }else if(op === 'set'){
        set(key, value);
    }else if(op === 'quit'){
        rl.close();
    }else{
        console.log('没有该操作');
    }
})

rl.on("close",function(){
    console.log("程序结束");
    process.exit(0);
})