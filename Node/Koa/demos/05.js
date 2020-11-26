const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

const main = ctx =>{
    console.log("main");
    if(ctx.request.path !== '/'){
        ctx.response.type = 'html';
        ctx.response.body = '<a href="/">About Page</a>';
    }else{
        ctx.response.type = 'html';
        ctx.response.body = fs.createReadStream('./template.html');
    }
}
const logger = (ctx, next) =>{
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    
    next();
}


app.use(logger);
app.use(main);

app.listen(3000);