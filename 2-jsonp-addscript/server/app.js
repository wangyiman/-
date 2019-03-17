const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const router = new Router();
const app = new Koa();

app.use(bodyParser());

router.get('/', async (ctx, next) => {
    let url = ctx.request.search;
    let args = url.substr(1).split('&');
    let finalResult;
    args.forEach(elements => {
      let ele = elements.split('=');
      if(ele[0] === 'func') {
        let name = 'labixiaoxin';
        finalResult = ele[1] + "('蜡笔小新')";
      }
    });
    ctx.body = finalResult;
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3006, () => {
    console.log('port is 3006');
});