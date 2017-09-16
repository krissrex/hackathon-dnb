import request from 'request';
import rp from 'request-promise';
import { fetch, current } from './accounts';
import { putPayment, getAccount, getCustomerAccounts, contacts, demoCustomer } from './options';

const doPayment = async (info) => {
  const options = putPayment;
  options.body = info;
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

const dateString = (date) => {
  const dd = date.getDate();
  const mm = date.getMonth() + 1;
  const xxxx = date.getFullYear();
  const space = '-';
  return xxxx + space + mm + space + dd;
};
/* eslint-disable prefer-template */
const message = (data) => {
  return (data.amount +
    ' kr sendt fra ' +
    data.debitAccountNumber +
    ' til ' + data.creditAccountNumber);
};
/* eslint-enable prefer-template */

const findReceiver = async (name) => {
  const lowercase = name.toLowerCase();
  if (contacts.indexOf(lowercase) > -1) {
    return contacts[lowercase];
  }
  return false;
};

const payment = async (ctx) => {
  console.log('asd');
  console.log(ctx);
  const values = ctx.request.body;
  const debitAccountNumber = await getCustomerAccounts(demoCustomer);
  const creditAccountNumber = findReceiver(values.receiver);

  const data = {
    debitAccountNumber,
    creditAccountNumber,
    paymentDate: dateString(new Date()),
    amount: values.amount,
  };

  data.message = message(data);
  const done = await doPayment(data);
  ctx.response.body = done;
};


export { payment };