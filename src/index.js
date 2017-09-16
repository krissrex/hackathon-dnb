import Koa from 'koa';
import Router from 'koa-router';
import Cors from 'kcors';
import Logger from 'koa-logger';
import request from 'request';
import rp from 'request-promise';
import Transfer from './transfer';


const app = new Koa();
app.use(Logger());

const getCustomerOptions = {
  uri: 'https://dnbapistore.com/hackathon/customers/1.0/customer/12039296822',
  headers: {
    'Authorization': 'Bearer 5cdc9b46-b248-3cf3-ba15-aba91ce75f46',
    'Accept': 'application/json',
  },
  json: true, // Automatically parses the JSON string in the response
};

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
