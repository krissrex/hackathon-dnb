const baseURL = 'https://dnbapistore.com/hackathon/';
const baseCustomerURL = 'customers/1.0/customer/';
const demoCustomer = '12039296822';

const authorizationToken = 'Bearer 5cdc9b46-b248-3cf3-ba15-aba91ce75f46';


const getCustomerOptions = {
  uri: baseURL + baseCustomerURL + demoCustomer,
  method: 'GET',
  headers: {
    'Authorization': authorizationToken,
    'Accept': 'application/json',
  },
  json: true, // Automatically parses the JSON string in the response
};

const getAccountOptions = {
  uri: baseURL + baseCustomerURL + demoCustomer,
  method: 'GET',
  headers: {
    'Authorization': authorizationToken,
    'Accept': 'application/json',
  },
  json: true, // Automatically parses the JSON string in the response
};


export { getCustomerOptions, getAccountOptions };
