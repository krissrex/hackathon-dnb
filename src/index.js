import Koa from 'koa';
import Router from 'koa-router';
import Cors from 'kcors';
import Logger from 'koa-logger';
import { askFAQ } from './faq';
import { balance } from './balance';

const app = new Koa();
const router = new Router();
app.use(Logger());

app.use(Cors());

router.get('/balance', balance);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);

/* examples

promise-based fetch
const yo = rp(options)
  .then(function (data) {
      console.log(data);
  })
  .catch(function (err) {
      console.log(err);
  });

*/

/*
EXAMPLE QUESTIONS AND ANSWERS
console.log(' \n QUESTION: Which DNB services can I use at the internet bank?');

console.log(askFAQ('\n Which DNB services can I use at the internet bank?'));

console.log('\n\n QUESTION: What is a PIN code and where can I find it?');

console.log(askFAQ('\n What is a PIN code and where can I find it?'));

console.log('\n\n QUESTION: pin code');

console.log(askFAQ('\n pin code'));

console.log('\n\n QUESTION: internet bank');

console.log(askFAQ('\n internet bank'));
*/

/*const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);

*/