const baseURL = 'https://dnbapistore.com/hackathon/';


const baseCustomerURL = 'customers/1.0/customer/';
const demoCustomer = '12039296822';


const baseAccountURL = 'accounts/1.0/account/';
// const accounts = ['12084348562', '12084059280', '12084941549', '12084749713', '12084191063'];


const getAccountsURL = 'customer/';
const authorizationToken = 'Bearer 5cdc9b46-b248-3cf3-ba15-aba91ce75f46';

const getCustomer = {
  uri: baseURL + baseCustomerURL + demoCustomer,
  method: 'GET',
  headers: {
    'Authorization': authorizationToken,
    'Accept': 'application/json',
  },
  json: true, // Automatically parses the JSON string in the response
};

const getCustomerAccounts = {
  uri: baseURL + baseAccountURL + getAccountsURL + demoCustomer,
  method: 'GET',
  headers: {
    'Authorization': authorizationToken,
    'Accept': 'application/json',
  },
  json: true, // Automatically parses the JSON string in the response
};

const getAccount = {
  uri: baseURL + baseCustomerURL + demoCustomer,
  method: 'GET',
  headers: {
    'Authorization': authorizationToken,
    'Accept': 'application/json',
  },
  json: true, // Automatically parses the JSON string in the response
};


export { getCustomer, getAccount, getCustomerAccounts };
