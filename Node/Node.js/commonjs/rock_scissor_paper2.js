// var playerAction = process.argv[process.argv.length - 1];
// var game = require('./rock_scissor_paper_lib.js');
// game(playerAction);

var game = require('./rock_scissor_paper_lib.js');
var count = 0;
//进程输入事件
process.stdin.on('data', e=>{
    const playerAction = e.toString().trim();

    const result = game(playerAction);
    if(result == 1) {
        count ++;
    }
    if(count === 3){
        console.log('你太厉害了，我不玩了');
        process.exit();
    }
})