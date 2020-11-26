
const Koa = require('koa');
const os = require('os');
const path = require('path');
const koaBydy = require('koa-body');

const app = new Koa();

//file upload
const main = async ctx =>{
    const tmpdir = os.tmpdir();
    const filePaths = [];
    const files = ctx.request.body.files || {};

    for (const key in files) {
        const file = files[key];
        const filePath = path.join(tmpdir,file.name);
        const reader = fs.createReadStream(file.path);
        const writer = fs.createWriteStream(filePath);
        reader.pipe(writer);
        filePaths.push(filePath);
    }

    ctx.body = filePaths;
    
}

app.use(koaBody({multipart:true }));
app.use(main);
app.listen(3000);