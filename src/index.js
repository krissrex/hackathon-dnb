import Koa from 'koa';
import Router from 'koa-router';
import Cors from 'kcors';
import Logger from 'koa-logger';
import {getFAQ} from './faqScraper';
import {askFAQ} from './faq';
import request from 'request';
import rp from 'request-promise';
import Transfer from './transfer';
import Globals from './globals';


const app = new Koa();
app.use(Logger());
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

setTimeout(() => {
  console.log(' \n QUESTION: What shall I do if I have forgotten my password?');
  console.log(askFAQ('\n What shall I do if I have forgotten my password?'));
}, 5000);

const options = {
  uri: 'https://dnbapistore.com/hackathon/customers/1.0/customer/12039296822',
  headers: {
    'Authorization': 'Bearer 5cdc9b46-b248-3cf3-ba15-aba91ce75f46',
    'Accept': 'application/json',
  },
  json: true, // Automatically parses the JSON string in the response
};

const yo = rp(options)
  .then(function (data) {
      console.log(data);
  })
  .catch(function (err) {
      console.log(err);
  });

app.listen(3000);
