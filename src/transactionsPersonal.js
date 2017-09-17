import Globals from './globals';
import { fetch } from './accounts';
import { getTransactionsFromAccount, demoCustomer, getCustomerAccounts } from './options';

const ids = [parseInt(demoCustomer, 10)];


const getPeople = async () => {
  const results = [];
  for (let i = 0; i < ids.length; i += 1) {
    results.push( await fetch(getCustomerAccounts(ids[i])));
  }
  return results;
};

const getTransactions = async (fromDate, toDate) => {
  const transactions = [];
  const people = await getPeople();
  for (let i = 0; i < people.length; i += 1) {
    for (let j = 0; j < people[i].accounts.length; j += 1) {
      const data = {
        accountNumber: people[i].accounts[j].accountNumber,
        dateFrom: fromDate,
        dateTo: toDate,
        customerID: parseInt(people[i].customerID, 10),
      };
      let some = { transactions: [] };
      try {
        some = await fetch(getTransactionsFromAccount(data));
      } catch (e) {

      }
      transactions.push(some);
    }
  }
  return transactions;
};


const mergeTransactions = async (fromDate, toDate) => {
  const transactions = [];
  const transactionsSplitted = await getTransactions(fromDate, toDate);
  for (let i = 0; i < transactionsSplitted.length; i += 1) {
    for (let j = 0; j < transactionsSplitted[i].transactions.length; j += 1) {
      const transaction = transactionsSplitted[i].transactions[j];

      transaction.branch = '';
      transaction.firm = '';
      transaction.description = transaction['message/KID'];
      transactions.push(transaction);
    }
  }
  return transactions;
};

const getPersonalData = async (fromDate, toDate) => {
  console.log(fromDate + 'asdasd' + toDate);
  const data = await mergeTransactions(fromDate, toDate);
  Globals.personalTransactions = data;
  Globals.personalDone = true;
  console.log(data.length);
  return data;
};

export default getPersonalData;
