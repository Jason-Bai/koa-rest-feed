const http = require('http');
const app = require('app');

const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

http.createServer(app.callback()).listen(port, () => {
  console.log(`Koa Rest API is listening at ${host}:${port} port!`);
});
