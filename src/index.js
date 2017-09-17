import Koa from 'koa';
import Router from 'koa-router';
import Cors from 'kcors';
import Logger from 'koa-logger';
import koaBody from 'koa-body';
import request from 'request';
import rp from 'request-promise';
import { getFAQ } from './faqScraper';
import { askFAQ, faq } from './faq';
import Globals from './globals';
import { balance, transactions, accounts, total } from './accounts';
import { payment } from './payment';
import { nearestATM } from './atm';
import {
  mapPersonalTransactionToBranch,
  mapOthersTransactionToBranch,
  getSugestionForGreenFootprint,
  getSuggestion,
} from './reduceFootprint';
import getData from './transactions';
import getPersonalData from './transactionsPersonal';

const app = new Koa();
const router = new Router();
app.use(Logger());
app.use(Cors());
app.use(koaBody());

router.post('/payment', payment);
router.get('/balance', balance);
router.get('/accounts', accounts);
router.get('/atm', nearestATM);
router.get('/transactions', transactions);
router.get('/total/:months', total);
router.get('/faq', faq);
router.get('/reducefootprint', getSuggestion);

app.use(router.routes());


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
getData();
getPersonalData();

//setTimeout(() => {
  console.log(' \n QUESTION: What shall I do if I have forgotten my password?');
  console.log(askFAQ('\n What shall I do if I have forgotten my password?'));

const doDammen = () => {
  console.log(Globals.personalDone);
  console.log(Globals.transactionsDone);
  if (Globals.personalDone && Globals.transactionsDone) {
    mapPersonalTransactionToBranch();
    mapOthersTransactionToBranch();
    console.log(getSugestionForGreenFootprint());
  }
};
//console.log(Globals.transactions);
console.log('\n\n\n mapping starting');
setInterval(doDammen, 5000);

//}, 15000);

/*const Koa = require('koa');
const app = new Koa();
>>>>>>> 70b6eb2ad072b287f03bdc729b2519a8d7356de9

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);

*/