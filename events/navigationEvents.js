import { signOut } from '../utils/auth';
import formOrder from '../components/forms/formOrder';
import viewOrderCard from '../pages/viewOrderCards';
// import { getAllOrders } from '../api/orderData';
// import { getOrderDetails } from '../api/mergedData';
import { getAllOrders } from '../api/orderData';
// import { getAllCustomers } from '../api/customerData';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // View Orders link
  document.querySelector('#view-orders').addEventListener('click', () => {
    getAllOrders().then(viewOrderCard);
  });

  // Create Orders link
  document.querySelector('#create-order').addEventListener('click', () => {
    console.warn('CLICKED CREATE ORDER');
    formOrder();
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
