import {
  getOrderItemCards, updateSingleItem, createItem,
} from '../api/itemData';
import { showCards } from '../pages/showItemCards';
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

    // form portion of editing and adding items

    if (e.target.id.includes('orderItem')) {
      const payload = {
        item_name: document.querySelector('#itemName').value,
        item_price: document.querySelector('#itemPrice').value,
        // order_id: // get id from order
      };
      createItem(payload).then(({ name }) => {
        const patchPayload = { item_id: name };
        updateSingleItem(patchPayload).then(() => {
          getOrderItemCards().then(showCards);
        });
      });
    }

    if (e.target.id.includes('update-Item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        item_name: document.querySelector('#itemName').value,
        price: document.querySelector('#itemPrice').value,
        firebaseKey,
        item_id: firebaseKey,
      };

      updateSingleItem(payload).then(() => {
        getOrderItemCards(/* by order_id */).then(showCards);
      });
    }
  });
};

export default formEvents;
