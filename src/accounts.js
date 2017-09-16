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

const current = (accounts) => {
  for (let i = 0; i < accounts.length; i += 1) {
    if (accounts[i].accountType === 'Current') {
      return accounts[i];
    }
  }
  return accounts[0];
};

const balance = async (ctx) => {
  console.log('asdz');
  const customer = await fetchAccounts(getCustomerAccounts(demoCustomer));

  ctx.body = current(customer.accounts).availableBalance;
};


export { balance, fetchAccounts };
