import { getSingleCustomer } from './customerData';
import { getSingleOrder } from './orderData';

const customerOrder = (customerId, orderId) => new Promise((resolve, reject) => {
  getSingleCustomer(customerId)
    .then((customerObject) => {
      getSingleOrder(orderId)
        .then((orderObject) => resolve({ ...customerObject, ...orderObject }))
        .catch(reject); // Catch errors in the getSingleOrder call
    })
    .catch(reject); // Catch errors in the getSingleCustomer call
});

export default customerOrder;
