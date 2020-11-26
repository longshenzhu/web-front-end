
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
        };
        ctx.app.emit('error',err,ctx);
    }
}

const main = ctx =>{
    ctx.throw(500);
}

//try...catch...后就不会触发error事件,这时，必须调用ctx.app.emit()，手动释放error事件，才能让监听函数生效。
app.on('error', (err,ctx)=>{
    console.error('server error', err.message);
})

app.use(handler);
app.use(main);
app.listen(3000);