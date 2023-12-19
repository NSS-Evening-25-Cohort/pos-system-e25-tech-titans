import { signOut } from '../utils/auth';
import formOrder from '../components/forms/formOrder';
// import itemForm from '../components/forms/itemForm';
import { showCards } from '../pages/showItemCards';
import getOrderItemCards from '../api/itemData';
import showRevenue from '../shared/revenueCard';
import getRevenue from '../api/revenueData';

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
    getRevenue().then(showRevenue);
  });

  document.querySelector('#test-whateves-btn').addEventListener('click', () => {
    console.warn('CLICKED Test button');
    getOrderItemCards().then(showCards);
  });
};

export default domEvents;
