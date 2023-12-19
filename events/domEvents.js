import { signOut } from '../utils/auth';
import formOrder from '../components/forms/formOrder';
// import itemForm from '../components/forms/itemForm';
import { showCards } from '../pages/showItemCards';
import getOrderItemCards from '../api/itemData';
import { getAllOrders } from '../api/orderData';
import viewOrderCard from '../pages/viewOrderCards';
import { getAllCustomers } from '../api/customerData';

const domEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#view-orders-btn').addEventListener('click', async () => {
    try {
      const [resolvedOrders, resolvedCustomers] = await Promise.all([
        getAllOrders(),
        getAllCustomers()
      ]);
      viewOrderCard(resolvedOrders, resolvedCustomers);
      console.warn('CLICKED VIEW ORDERS button', resolvedOrders, resolvedCustomers);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
