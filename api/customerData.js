import client from '../utils/client';

const endpoint = client.databaseURL;

const createCustomer = (payLoad) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/customers.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payLoad),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
const updateCustomer = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/customers/${payload.customer_id}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// get single customer
const getSingleCustomer = (customerId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/customers.json?orderBy="customer_id"&equalTo="${customerId}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});
// get customers
const getCustomers = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/customers.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// delete Customer
const deleteSingleCustomers = (customerId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/customers/${customerId}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  createCustomer, updateCustomer, getSingleCustomer, getCustomers, deleteSingleCustomers
};
