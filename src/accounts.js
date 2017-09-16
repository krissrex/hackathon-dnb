import request from 'request';
import rp from 'request-promise';

import { getCustomerAccounts, demoCustomer, getTransactionsFromAccount } from './options';


const fetch = async (options) => {
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
  const customer = await fetch(getCustomerAccounts(demoCustomer));

  ctx.body = current(customer.accounts).availableBalance;
};

const accounts = async (ctx) => {
  ctx.body = await fetch(getCustomerAccounts(demoCustomer));
};

const transactions = async (ctx) => {
  const customer = await fetch(getCustomerAccounts(demoCustomer));
  const account = current(customer.accounts);
  const query = {
    customerId: customer.customerId,
    accountNumber: account.accountNumber,
    dateFrom: ctx.query.dateFrom,
    dateTo: ctx.query.dateTo,
  };
  const transactionsInInterval = await fetch(getTransactionsFromAccount(query));
  ctx.body = transactionsInInterval;
};

export { balance, fetch, accounts, transactions };
