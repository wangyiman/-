const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const router = new Router();
const app = new Koa();



app.use(bodyParser());

router.post('/', async (ctx, next) => {
    if(ctx.url == '/' && ctx.method == 'POST') {
        console.log(ctx.request.body);
        let postData = ctx.request.body;
        let finalUrl = postData.url + '?' + 'callBack=' + ctx.request.body.callBack + '&data=success';
        // finalUrl = postData.url;
        ctx.response.redirect(finalUrl);
        ctx.body = postData;
    }
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3001, () => {
    console.log('port is 3001');
});