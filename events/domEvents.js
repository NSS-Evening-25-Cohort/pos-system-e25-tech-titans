import { signOut } from '../utils/auth';
import formOrder from '../components/forms/formOrder';
import itemForm from '../components/forms/itemForm';
import { showCards } from '../pages/showItemCards';
import { getOrderItemCards, deleteSingleItem, getSingleItem } from '../api/itemData';
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

      // Use resolvedOrders and resolvedCustomers as needed
      viewOrderCard(resolvedOrders, resolvedCustomers);
      console.warn('CLICKED VIEW ORDERS button', resolvedOrders, resolvedCustomers);
    } catch (error) {
      // Handle errors here
      console.error('Error fetching data:', error);
    }
  });

  // get order item cards by order_id also Firebase key
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('details-btn-')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderItemCards(firebaseKey).then((showCards));
    }

    // getting the item to edit
    if (e.target.id.includes('edit-card-btn')) {
      console.warn('working to edit item, getting the order fb key, but not the item');
      const [, firebaseKey] = e.target.id.split('--');
      getSingleItem(firebaseKey).then((itemObj) => itemForm(itemObj));
    }

    if (e.target.id.includes('delete-card-btn-')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ITEM', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deleteSingleItem(firebaseKey).then(() => {
          getOrderItemCards(firebaseKey).then((showCards));
        });
      }
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
    itemForm();
  });
};

export default domEvents;
