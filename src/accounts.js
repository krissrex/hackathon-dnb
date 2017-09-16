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

/**
 * Sample output: 
 * 
 * ```{
  "customerID": "12039296822",
  "accounts": [
    {
      "accountNumber": 12084059280,
      "accountType": "Current",
      "availableBalance": "80810.80"
    },
    {
      "accountNumber": 12084191063,
      "accountType": "Current",
      "availableBalance": "145549.00"
    },
    {
      "accountNumber": 12084348562,
      "accountType": "Current",
      "availableBalance": "131764.00"
    },
    {
      "accountNumber": 12084749713,
      "accountType": "Savings",
      "availableBalance": "106865.00"
    },
    {
      "accountNumber": 12084941549,
      "accountType": "Current",
      "availableBalance": "123199.00"
    }
  ]
}```
 */
const accounts = async (ctx) => {
  ctx.body = await fetch(getCustomerAccounts(demoCustomer));
};

/**
 * Sample data:
 * 
 * ```

    {
      "transactionID": 7188093189,
      "transactionType": 2,
      "timeStamp": "2017-01-25, 08:22",
      "amount": "-2474.00",
      "message/KID": "4660000000000000",
      "transactionAccountNumber": 14083089230,
      "transactionAccountName": "Kontxt AS"
    },
    {
      "transactionID": 7271926491,
      "transactionType": 1,
      "timeStamp": "2017-02-27, 13:06",
      "amount": "-8069.00",
      "message/KID": "Orange",
      "transactionAccountNumber": 12084058944,
      "transactionAccountName": "Solveig Lindqvist"
    },
    {
      "transactionID": 7635724534,
      "transactionType": 1,
      "timeStamp": "2017-03-26, 04:10",
      "amount": "-4975.00",
      "message/KID": "Yellow",
      "transactionAccountNumber": 12084386137,
      "transactionAccountName": "Linda Haaland"
    },
    {
      "transactionID": 6861313898,
      "transactionType": 5,
      "timeStamp": "2017-02-07, 21:49",
      "amount": "-604.46",
      "message/KID": "Varekjøp Joeandthejuice Nedre Slottsgate Oslo Dato 07.02 kl. 21.49"
    },
```
 *  
 */
const transactions = async (ctx) => {
  const customer = await fetch(getCustomerAccounts(demoCustomer));
  const account = current(customer.accounts);
  console.log(customer);
  const query = {
    customerID: customer.customerID,
    accountNumber: account.accountNumber,
    dateFrom: ctx.query.dateFrom,
    dateTo: ctx.query.dateTo,
  };
  const transactionsInInterval = await fetch(getTransactionsFromAccount(query));
  ctx.body = transactionsInInterval;
};

const lastWeek = async (ctx) => {
  const customer = await fetch(getCustomerAccounts(demoCustomer));
  const account = current(customer.accounts);
  console.log(customer);
  const query = {
    customerID: customer.customerID,
    accountNumber: account.accountNumber,
    dateFrom: ctx.query.dateFrom,
    dateTo: ctx.query.dateTo,
  };
  const transactionsInInterval = await fetch(getTransactionsFromAccount(query));
  ctx.body = transactionsInInterval;
};

export { balance, fetch, accounts, transactions };
