const fs = require('fs.promised');
const Koa = require('koa');
const app = new Koa();

const one = (ctx, next) =>{
    console.log(">> one");
    next();
    console.log("<< one");
}
const two = (ctx, next) =>{
    console.log(">> two");
    next();
    console.log("<< two");
}
const three = (ctx, next) =>{
    console.log(">> three");
    next();
    console.log("<< three");
}

// const main = async function (ctx, next) {
//     console.log(">>main");
//     ctx.response.type = 'html';
//     ctx.response.body = await fs.readFile('./template.html','utf8');
//     next();
//     console.log("<<main");
// };
// app.use(main);

app.use(one);
app.use(two);
app.use(three);

app.listen(3000);