import { signOut } from '../utils/auth';
import formOrder from '../components/forms/formOrder';
import viewOrderCard from '../pages/viewOrderCards';
import { getAllOrders, getOrders } from '../api/orderData';
import viewHomePage from '../pages/homepage';

// import { getAllCustomers } from '../api/customerData';

// navigation events
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // LOGO HOME
  document.querySelector('#logoHome')
    .addEventListener('click', () => {
      viewHomePage(user);
    });

  // View Orders link
  document.querySelector('#view-orders').addEventListener('click', () => {
    getAllOrders().then(viewOrderCard);
  });

  // Create Orders link
  document.querySelector('#create-order').addEventListener('click', () => {
    console.warn('CLICKED CREATE ORDER');
    formOrder();
  });

  document.querySelector('#search').addEventListener('keyup', (e) => {
    console.warn(user.uid);
    const searchOrders = (searchValue) => getOrders(user.uid)
      .then((orderArray) => {
        console.warn('received orders:', orderArray);
        return orderArray.filter((order) => order.order_name.toLowerCase().includes(searchValue.toLowerCase()));
      });

    if (e.keyCode === 13) {
      const searchValue = document.querySelector('#search').value;
      console.warn(searchValue);
      searchOrders(searchValue)
        .then((data) => {
          console.warn('Filtered data:', data);
          console.warn(typeof data);
          viewOrderCard(data);
        })
        .then(() => {
          document.querySelector('#search').value = '';
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  });
};

export default navigationEvents;
