import { createCustomer, updateCustomer } from '../api/customerData';
import { createOrder, updateOrder } from '../api/orderData';
import { customerOrder } from '../api/mergedData';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-order')) {
      console.warn(e.target, 'I am here', user.displayName);

      const payloadOrder = {
        order_name: document.querySelector('#orderName').value,
        order_type: document.querySelector('#orderType').value,
        uid: user.uid
      };

      const payloadCustomer = {
        order_name: document.querySelector('#orderName').value,
        customer_phone: document.querySelector('#customerPhone').value,
        customer_email: document.querySelector('#customerEmail').value,
        uid: user.uid
      };

      // Create Order
      createOrder(payloadOrder).then(({ name: orderId }) => {
        const patchPayLoadOrder = { order_id: orderId };
        updateOrder(patchPayLoadOrder);

        // Create Customer
        createCustomer(payloadCustomer).then(({ name: customerId }) => {
          const patchPayLoadCustomer = { customer_id: customerId };
          updateCustomer(patchPayLoadCustomer);

          // Use customerOrder function
          customerOrder(customerId, orderId)
            .then((combinedData) => {
              // Handle the combined customer and order data here
              console.warn('Combined Data:', combinedData);
            })
            .catch((error) => console.error('Error with customerOrder:', error));
        })
          .catch((error) => console.error('Error creating customer:', error));
      })
        .catch((error) => console.error('Error creating order:', error));
    }
  });
};

export default formEvents;
