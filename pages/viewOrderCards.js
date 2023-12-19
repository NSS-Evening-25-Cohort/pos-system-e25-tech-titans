import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewOrderCard = (orders, customers) => {
  clearDom();
  console.warn('ord n custtt', orders, customers);
  let domString = '';

  for (let i = 0; i < customers.length; i++) {
    const customer = customers[i];
    const order = orders[i];
    domString += `
<div class="card" style="width: 18rem;">
  <div class="card-body">
 <!--   <h5 class="card-title">${order.order_name}</h5> -->
    <h6 class="card-subtitle mb-2 text-body-secondary">Order Status</h6>
    <p class="card-text">Customer Phone #: ${customer.customer_phone}</p>
    <p class="card-text">Customer Email: ${customer.customer_email}</p>
    <p class="card-text">Order Type: ${order.order_type}</p>
    <a href="#" id="details-btn--${order.order_id}" class="card-link">Details</a>
    <a href="#" id="edit-btn--${order.order_id}""  class="card-link">Edit</a>
    <a href="#" id="delete-btn--${order.order_id}"" class="card-link">Delete</a>
  </div>
</div>`;
  }
  renderToDOM('#view', domString);
};
export default viewOrderCard;
