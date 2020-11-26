const fs = require('fs');
const Koa = require('koa');
//路由
const route = require('koa-route');

const path = require('path');
const serve = require('koa-static');

const app = new Koa();

const about = ctx =>{
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">About Page</a>';
};
const main = ctx =>{
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./template.html');
};

//重定向
const redirect = ctx =>{
    ctx.response.redirect('/');
}

const static = serve(path.join(__dirname));
console.log(__dirname);

app.use(route.get('/',main));
app.use(route.get('/about',about));
app.use(route.get('/login',redirect));

//静态资源访问：http://127.0.0.1:3000/01.js
app.use(static);

app.listen(3000);