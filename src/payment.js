import request from 'request';
import rp from 'request-promise';
import { fetch, current } from './accounts';
import { putPayment, getAccount, getCustomerAccounts, contacts, demoCustomer } from './options';

const dateString = (date) => {
  let dd = date.getDate();
  if (dd.toString().length < 2) {
    dd = '0' + dd.toString();
  }
  let mm = date.getMonth() + 1;
  if (dd.toString().length < 2) {
    mm = '0' + mm.toString();
  }
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

const findReceiver = (name) => {
  const lowercase = name.toLowerCase();
  if (Object.keys(contacts).indexOf(lowercase) > -1) {
    return contacts[lowercase];
  }
  return false;
};

const payment = async (ctx) => {
  const values = ctx.request.body;
  const customerOptions = getCustomerAccounts(demoCustomer);
  console.log(customerOptions);
  const debitAccountNumber = await fetch(customerOptions);
  const creditAccountNumber = findReceiver(values.receiver);
  console.log(debitAccountNumber);
  const data = {
    debitAccountNumber: current(debitAccountNumber.accounts).accountNumber,
    creditAccountNumber,
    paymentDate: dateString(new Date()),
    amount: parseInt(values.amount, 10),
  };

  console.log(typeof data.paymentDate);

  data.message = message(data);
  console.log(data);
  const done = await fetch(putPayment(data));
  ctx.response.body = done;
};


export { payment };
