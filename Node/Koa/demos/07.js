const compose = require('koa-compose');
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

const middlewares = compose([one,two,three]);
app.use(middlewares);

app.listen(3000);