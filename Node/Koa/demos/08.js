const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

const main = ctx =>{
    try {
        if(ctx.request.path === '/'){
            ctx.response.type = 'html';
            ctx.body = fs.createReadStream('./template.html');
        }else{
            ctx.response.status = 404;
            ctx.response.body = 'Page Not Found';
        }
    } catch (error) {
        ctx.throw(500);
    }
    
    
}

app.use(main);
app.listen(3000);