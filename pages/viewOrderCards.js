import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewOrderCard = (user) => {
  clearDom();

  const domString = `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${user.order_name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Order Status</h6>
    <p class="card-text">Customer Phone #: ${user.customer_phone}</p>
    <p class="card-text">Customer Email: ${user.customer_email}</p>
    <p class="card-text">Order Type: ${user.order_type}</p>
    <a href="#" class="card-link">Edit</a>
    <a href="#" class="card-link">Delete</a>
  </div>
</div>`;

  renderToDOM('#view', domString);
};

export default viewOrderCard;
