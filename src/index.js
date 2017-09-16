import Koa from 'koa';
import Router from 'koa-router';
import Cors from 'kcors';
import Logger from 'koa-logger';
import request from 'request';
import rp from 'request-promise';
import {getFAQ} from './faqScraper';
import {askFAQ} from './faq';
import Transfer from './transfer';
import Globals from './globals';
import { balance } from './balance';
import { payment } from './payment';


const app = new Koa();
const router = new Router();
app.use(Logger());

app.use(Cors());

router.put('/payment', payment);

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

getFAQ();

/*
setTimeout(() => {
  console.log(' \n QUESTION: What shall I do if I have forgotten my password?');
  console.log(askFAQ('\n What shall I do if I have forgotten my password?'));
}, 5000);
*/
const options = {
  uri: 'https://dnbapistore.com/hackathon/customers/1.0/customer/12039296822',
  headers: {
    'Authorization': 'Bearer 5cdc9b46-b248-3cf3-ba15-aba91ce75f46',
    'Accept': 'application/json',
  },
  json: true, // Automatically parses the JSON string in the response
};
/*const Koa = require('koa');
const app = new Koa();
>>>>>>> 70b6eb2ad072b287f03bdc729b2519a8d7356de9

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);

*/