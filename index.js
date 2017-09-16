import Koa from 'koa';
import Router from 'koa-router';
import Cors from 'kcors';
import Logger from 'koa-logger';

import Transfer from './transfer.js';


const app = new Koa();
app.use(Logger());

app.use(route, ())