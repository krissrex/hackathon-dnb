import request from 'request';
import rp from 'request-promise';
import { fetchBalance } from './balance';
import { putPayment, getAccount, getCustomerAccounts, options } from './options';

const doPayment = async ({
  debitAccountNumber,
  creditAccountNumber,
  paymentDate,
  amount,
  message }) => {
  const options = putPayment;
  options.body = {
    debitAccountNumber,
    creditAccountNumber,
    paymentDate,
    amount,
    message,
  };
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

const findReceiver = async (name) => {
  const lowercase = name.toLowerCase();

}

const payment = async (ctx) => {
  const values = ctx.request.body;
  const debitAccountNumber = await getCustomerAccounts();
  const payment = await doPayment(accountDemoCustomer, );

};


export { payment };