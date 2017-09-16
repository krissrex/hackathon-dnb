import Koa from 'koa';
import Router from 'koa-router';
import Cors from 'kcors';
import Logger from 'koa-logger';
import {askFAQ} from './faq';
import Transfer from './transfer.js';


const app = new Koa();
app.use(Logger());

console.log(' \n Which DNB services can I use at the internet bank?');

console.log(askFAQ('\n Which DNB services can I use at the internet bank?'));

console.log('\n\n What is a PIN code and where can I find it?');

console.log(askFAQ('\n What is a PIN code and where can I find it?'));

console.log('\n\n pin code');

console.log(askFAQ('\n pin code'));

console.log('\n\n internet bank');

console.log(askFAQ('\n internet bank'));
