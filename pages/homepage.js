import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewHomePage = (user) => {
  clearDom();

  const domString = `
  <div id="welcomePage">
  <h1 class="user-text">Welcome ${user.displayName}! </h1>
  </div>
  <div id="welcomePageButtons">
  <button class="homepage" id="view-orders-btn">View Orders</button>
  <button class="homepage" id="create-order-btn">Create an Order</button>
  <button class="homepage" id="view-revenue-btn">View Revenue</button>
  <button class="homepage" id="test-whateves-btn">test</button>
  </div>`;

  renderToDOM('#view', domString);
  // console.warn('user', user);
};

export default viewHomePage;
