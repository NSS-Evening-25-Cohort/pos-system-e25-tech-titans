// import { signOut } from '../utils/auth';
import formOrder from '../components/forms/formOrder';
import itemForm from '../components/forms/itemForm';
import { showCards } from '../pages/showItemCards';
import { deleteSingleItem, getSingleItem, getOrderItemCards } from '../api/itemData';
import showRevenue from '../shared/revenueCard';
import getRevenue from '../api/revenueData';
import viewOrderCard from '../pages/viewOrderCards';
import { getAllOrders, getSingleOrder } from '../api/orderData';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('view-orders')) {
      console.warn(e, user);
      getAllOrders(user).then(viewOrderCard);
    }
    if (e.target.id.includes('create-order')) {
      formOrder();
    }

    // get order item cards by order_id also Firebase key
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
    if (e.target.id.includes('view-revenue-btn')) {
      console.warn('CLICKED View Revenue button');
      getRevenue().then(showRevenue);
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

    if (e.target.id.includes('edit-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(firebaseKey);
      getSingleOrder(firebaseKey).then((orderObj) => formOrder(orderObj));
    }
  });
};

export default domEvents;
