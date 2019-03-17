const Koa = require('koa');
const path = require('path');
const static = require('koa-static');

const app = new Koa();

app.use(static(path.join(__dirname, './')));

app.use(async (ctx) => {
    ctx.body = 'hello world'
});

app.listen(3003, () => {
    console.log('I am listening at port 3003');
})