const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
    if (ctx.path !== '/')
        return await next();

    ctx.body = "<h2>index sayfasına hoşgeldin</h2>";
});

app.use(async (ctx, next) => {
    if (ctx.path !== '/hakkinda')
        return await next();

    ctx.body = "<h2>hakkinda sayfasına hoşgeldin</h2>";
});

app.use(async (ctx, next) => {
    if (ctx.path !== '/iletisim')
        return await next();

    ctx.body = "<h2>iletisim sayfasına hoşgeldin</h2>";
});

app.use(async (ctx) => {
    ctx.throw(404, 'sayfa bulunamadi');    
});

const port = 3000;

app.listen(port);