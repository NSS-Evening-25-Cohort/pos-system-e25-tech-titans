import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewHomePage = (user) => {
  clearDom();

  const domString = `
  <h1 class="welcome-text">Welcome!</h1>
  <button id="view-orders-btn">View Orders</button>
  <button id="create-order-btn">Create an Order</button>
  <button id="view-revenue-btn">View Revenue</button>
  <button id="test-whateves-btn">test</button>`;

  renderToDOM('#view', domString);
  console.warn('user', user);
};

export default viewHomePage;
