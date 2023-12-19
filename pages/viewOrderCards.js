import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewOrderCard = (orderCard) => {
  clearDom();
  let domString = '';

  orderCard.forEach((orders) => {
    domString += `
<div class="card border-light mb-3" style="width: 18rem;">
<div class="card-header bg-transparent border-success">
  <div class="card-body">
    <h5 class="card-title">${orders.order_name}</h5>
    <h6 class="card-subtitle mb text-body-secondary">${orders.order_status}</h6>
    <p class="card-text">Customer Phone #: ${orders.customer_phone}</p>
    <p class="card-text">Customer Email: ${orders.customer_email}</p>
    <p class="card-text">Order Type: ${orders.order_type}</p>
    <a href="#" id="details-btn--${orders.order_id}" class="card-link">Details</a>
    <a href="#" id="edit-btn--${orders.order_id}"  class="card-link">Edit</a>
    <a href="#" id="delete-btn--${orders.order_id}" class="card-link">Delete</a>
  </div>
  </div>
</div>`;
  });
  renderToDOM('#view', domString);
};
export default viewOrderCard;
