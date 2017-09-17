const baseURL = 'https://dnbapistore.com/hackathon/';

// Customers
const baseCustomerURL = 'customers/1.0/customer/';
const demoCustomer = '12039296822';


// Accounts
const baseAccountURL = 'accounts/1.0/account/';
// const accounts = ['12084348562', '12084059280', '12084941549', '12084749713', '12084191063'];
const getAccountsURL = 'customer/';

const baseTransactionURL = 'accounts/1.0/account?';

//Payments
const basePaymentURL = 'http://dnbapistore.com/hackathon/payments/1.0/';
const putPaymentURL = 'payment';

const authorizationToken = 'Bearer 5cdc9b46-b248-3cf3-ba15-aba91ce75f46';

const dass = 'https://dnbapistore.com/hackathon/payments/1.0/payment';
const contacts = {
  kevin: 12084941549,
  morten: 321123,
};

const getCustomer = (customer) => {
  return {
    uri: baseURL + baseCustomerURL + customer,
    method: 'GET',
    headers: {
      'Authorization': authorizationToken,
      'Accept': 'application/json',
    },
    json: true,
  };
};

const getCustomerAccounts = (customer) => {
  return {
    uri: baseURL + baseAccountURL + getAccountsURL + customer,
    method: 'GET',
    headers: {
      'Authorization': authorizationToken,
      'Accept': 'application/json',
    },
    json: true,
  };
};

const getAccount = (account) => {
  return {
    uri: baseURL + baseAccountURL + account,
    method: 'GET',
    headers: {
      'Authorization': authorizationToken,
      'Accept': 'application/json',
    },
    json: true,
  };
};


/* eslint-disable prefer-template */
const getTransactionsFromAccount = (data) => {
  return {
    uri: baseURL + baseTransactionURL + 'accountNumber=' + data.accountNumber + '&customerID=' + data.customerID + '&dateFrom=' + data.dateFrom + '&dateTo=' + data.dateTo,
    method: 'GET',
    headers: {
      'Authorization': authorizationToken,
      'Accept': 'application/json',
    },
    json: true,
  };
};

const putPayment = (data) => {
  return {
    uri: dass,
    method: 'PUT',
    headers: {
      'Authorization': authorizationToken,
      'Accept': 'application/json',
    },
    json: true,
    body: data,
  };
};

const putPayment1 = (data) => {
  return { uri: dass,
    method: 'PUT',
    headers: {
      'Authorization': authorizationToken,
      'Accept': 'application/json',
    },
    json: true,
    body: {
      debitAccountNumber: 12084059280,
      creditAccountNumber: 12084941549,
      paymentDate: '2017-9-17',
      amount: 1000,
      message: '1000 kr sendt fra 12084059280 til 12084941549' },
  };
};


export { getTransactionsFromAccount, getCustomer, getAccount, getCustomerAccounts, putPayment, contacts, demoCustomer };
