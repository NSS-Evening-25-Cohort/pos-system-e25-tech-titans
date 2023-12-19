import { createCustomer, updateCustomer, getCustomers } from '../api/customerData';
import { createOrder, updateOrder, getAllOrders } from '../api/orderData';
import viewOrderCard from '../pages/viewOrderCards';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.closest('#submit-order')) {
      console.warn(e.target, 'I am here', user.displayName);

      const payloadOrder = {
        order_name: document.querySelector('#orderName').value,
        order_type: document.querySelector('#orderType').value,
        customer_phone: document.querySelector('#customerPhone').value,
        customer_email: document.querySelector('#customerEmail').value,
        uid: user.uid
      };

      const payloadCustomer = {
        customer_phone: document.querySelector('#customerPhone').value,
        customer_email: document.querySelector('#customerEmail').value,
        uid: user.uid
      };

      // Create Customer
      createCustomer(payloadCustomer).then((customerResponse) => {
        const customerId = customerResponse.name;
        const patchPayloadCustomer = { customer_id: customerId };
        updateCustomer(patchPayloadCustomer);

        // Create Order
        createOrder(payloadOrder).then((orderResponse) => {
          const orderId = orderResponse.name;
          const patchPayloadOrder = { order_id: orderId };
          updateOrder(patchPayloadOrder);
          getCustomers(user).then(() => {
            getAllOrders(user).then(viewOrderCard);
          });
        });
      });
    }
  });
};

export default formEvents;
