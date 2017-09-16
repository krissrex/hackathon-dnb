import request from 'request';
import rp from 'request-promise';

import { getAccount, getCustomerAccounts } from './options';


const fetchBalance = async () => {
  return new Promise((resolve, reject) => {
    rp(getCustomerAccounts)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const balance = async (ctx) => {
  console.log('asdz');
  const customer = await fetchBalance();
  ctx.body = customer.accounts[0];
};


export { balance };
