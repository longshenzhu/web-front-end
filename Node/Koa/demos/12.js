
const Koa = require('koa');
const koaBydy = require('koa-body');

const app = new Koa();

//cookies
const main = async ctx =>{
    const body = ctx.request.body;
    if(!body.name) ctx.throw(400,'.name required');
    ctx.body = {name:body.name};
}

app.use(koaBydy());
app.use(main);
app.listen(3000);