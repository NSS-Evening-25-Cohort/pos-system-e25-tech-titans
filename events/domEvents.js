import viewOrderCard from '../pages/viewOrderCards';
import { getAllOrders, getSingleOrder } from '../api/orderData';
import { getCustomers } from '../api/customerData';
import formOrder from '../components/forms/formOrder';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    console.warn('this is e', e);
    if (e.target.id.includes('view-orders')) {
      console.warn(e, user);
      getCustomers(user).then(() => {
        getAllOrders(user).then(viewOrderCard);
      });
    }

    if (e.target.id.includes('create-order')) {
      formOrder();
    }

    if (e.target.id.includes('edit-btn')) {
      console.warn('this is e', e.target);
      const firebaseKey = '-Nln4Nd0Kv6yBapTGykg';
      getSingleOrder(firebaseKey).then((orderObj) => formOrder(orderObj, firebaseKey));
    }
  });
};

export default domEvents;
