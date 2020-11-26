
const Koa = require('koa');
const app = new Koa();

//最外层处理异常
const handler = async(ctx,next) =>{
    try {
        await next();
    } catch (err) {
        ctx.response.status = err.statusCode || err.status || 500;
        ctx.response.body = {
            message:err.message
        }
    }
}

const main = ctx =>{
    ctx.throw(500);
}

app.use(handler);
app.use(main);
app.listen(3000);