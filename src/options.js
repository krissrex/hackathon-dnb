const baseURL = 'https://dnbapistore.com/hackathon/';

// Customers
const baseCustomerURL = 'customers/1.0/customer/';
const demoCustomer = '12039296822';


// Accounts
const baseAccountURL = 'accounts/1.0/account/';
// const accounts = ['12084348562', '12084059280', '12084941549', '12084749713', '12084191063'];
const getAccountsURL = 'customer/';


//Payments
const basePaymentURL = 'http://dnbapistore.com/hackathon/payments/1.0/';
const putPaymentURL = 'payment/';

const authorizationToken = 'Bearer 5cdc9b46-b248-3cf3-ba15-aba91ce75f46';


const contacts = {
  lars: 123123,
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

const putPayment = {
  uri: baseURL + basePaymentURL,
  method: 'PUT',
  headers: {
    'Authorization': authorizationToken,
    'Accept': 'application/json',
  },
  json: true,
};


export { getCustomer, getAccount, getCustomerAccounts, putPayment, contacts, demoCustomer };
