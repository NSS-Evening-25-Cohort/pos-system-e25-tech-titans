import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const showRevenue = (array) => {
  clearDom();

  let domstring = '';
  let total = 0;

  array.forEach((orders) => {
    if (orders.amount) {
      total += orders.amount;
    }
    console.warn('total', total);
  });
  domstring = `<div class="card border-success mb-3" style="max-width: 18rem;">
  <div class="card-header">Revenue</div>
  <div class="card-body text-success">
    <h5 class="card-title">Total Revenue: $ ${total}</h5>
    <h6>TOTAL TIPS: </h6>
    <h6>TOTAL CALL IN ORDERS: </h6>
    <h6>TOTAL WALK IN ORDERS: </h6>
    <ul>PAYMENT TYPES
    <li>CASH- </li>
    <li>CREDIT- </li>
    <li>MOBILE- </li>
    </ul>
  </div>
  </div>`;
  renderToDOM('#store', domstring);
};
export default showRevenue;
