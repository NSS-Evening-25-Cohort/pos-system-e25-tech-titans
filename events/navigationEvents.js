import { signOut } from '../utils/auth';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // View Orders link
  document.querySelector('#view-orders').addEventListener('click', () => {
    console.warn('CLICKED VIEW ORDERS');
  });

  // Create Orders link
  document.querySelector('#create-order').addEventListener('click', () => {
    console.warn('CLICKED CREATE ORDER');
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
