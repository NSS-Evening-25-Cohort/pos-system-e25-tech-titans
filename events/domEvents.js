import { signOut } from '../utils/auth';
import formOrder from '../components/forms/formOrder';

// navigation events
const domEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // View Orders link
  document.querySelector('#view-orders-btn').addEventListener('click', () => {
    console.warn('CLICKED VIEW ORDERS button');
  });

  // Create Orders link
  document.querySelector('#create-order-btn').addEventListener('click', () => {
    console.warn('CLICKED CREATE ORDER button');
    formOrder();
  });

  document.querySelector('#view-revenue-btn').addEventListener('click', () => {
    console.warn('CLICKED View Revenue button');
  });
};

export default domEvents;
