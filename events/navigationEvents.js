import { signOut } from '../utils/auth';
import formOrder from '../components/forms/formOrder';
// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // View Orders link
  document.querySelector('#view-orders').addEventListener('click', () => {
    console.warn('CLICKED VIEW ORDERS');
    formOrder();
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
