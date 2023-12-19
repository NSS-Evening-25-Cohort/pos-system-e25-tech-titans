import formOrder from '../components/forms/formOrder';
import itemForm from '../components/forms/itemForm';
import { showCards } from '../pages/showItemCards';
import showRevenue from '../shared/revenueCard';
import getRevenue from '../api/revenueData';
import { getOrderItemCards, deleteSingleItem, getSingleItem } from '../api/itemData';
import viewOrderCard from '../pages/viewOrderCards';
import { getAllOrders, getSingleOrder } from '../api/orderData';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    console.warn('this is e', e);
    if (e.target.id.includes('view-orders')) {
      console.warn(e, user);
      getAllOrders(user).then(viewOrderCard);
    }
    if (e.target.id.includes('create-order')) {
      formOrder();
    }
    if (e.target.id.includes('view-revenue-btn')) {
      getRevenue().then(showRevenue);
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
      console.warn('this is e', e.target);
      const firebaseKey = '-NlzXH7rZF4_jDH-Paaz';
      getSingleOrder(firebaseKey).then((orderObj) => formOrder(orderObj, firebaseKey));
    }
  });
};
export default domEvents;
