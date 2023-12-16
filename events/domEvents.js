import { signOut } from '../utils/auth';
import formOrder from '../components/forms/formOrder';
// import itemForm from '../components/forms/itemForm';
import { showCards } from '../pages/showItemCards';
import getOrderItemCards from '../api/itemData';
import { getAllOrders } from '../api/orderData';
import viewOrderCard from '../pages/viewOrderCards';
import { getCustomers } from '../api/customerData';

const domEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // View Orders link
  document.querySelector('#view-orders-btn').addEventListener('click', () => {
    console.warn('CLICKED VIEW ORDERS button', getAllOrders(user));
    getCustomers(user).then(() => {
      getAllOrders(user).then(viewOrderCard);
    });
  });

  // Create Orders link
  document.querySelector('#create-order-btn').addEventListener('click', () => {
    console.warn('CLICKED CREATE ORDER button');
    formOrder();
  });

  document.querySelector('#view-revenue-btn').addEventListener('click', () => {
    console.warn('CLICKED View Revenue button');
  });

  document.querySelector('#test-whateves-btn').addEventListener('click', () => {
    console.warn('CLICKED Test button');
    getOrderItemCards().then(showCards);
  });
};

export default domEvents;
