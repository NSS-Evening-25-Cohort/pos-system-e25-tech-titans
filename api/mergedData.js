// import { getCustomers, getSingleCustomer } from './customerData';
// import { getAllOrders, getSingleOrder } from './orderData';

// const customerOrder = (customerId, orderId) => new Promise((resolve, reject) => {
//   getSingleCustomer(customerId)
//     .then((customerObject) => {
//       getSingleOrder(orderId)
//         .then((orderObject) => resolve({ ...customerObject, ...orderObject }))
//         .catch(reject); // Catch errors in the getSingleOrder call
//     })
//     .catch(reject); // Catch errors in the getSingleCustomer call
// });

// const getOrderDetails = () => new Promise((resolve, reject) => {
//   Promise.all([getAllOrders(), getCustomers()]).then((orders, customers) => {
//     console.warn(orders, customers);
//     const allCustomerOrders = customers.map((customer) => {
//       const orderRelationshipsArray
//     })
//     })

//     resolve(allCustomerOrders);
//   }).catch((error) => reject(error));
// });

// export { customerOrder, getOrderDetails };
