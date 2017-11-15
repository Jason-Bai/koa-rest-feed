const http = require('http');
const Koa = require('koa');

const app = new Koa();

const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

app.use(async ctx => {
  ctx.body = 'Hello world!';
});

module.exports = app;
