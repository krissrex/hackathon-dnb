import request from 'request';
import rp from 'request-promise';

import { getCustomerAccounts, demoCustomer } from './options';


const fetchAccounts = async (options) => {
  return new Promise((resolve, reject) => {
    rp(options)
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
  const customer = await fetchAccounts(getCustomerAccounts(demoCustomer));
  ctx.body = customer.accounts[0].availableBalance;
};


export { balance, fetchAccounts };
