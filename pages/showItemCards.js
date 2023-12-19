import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyCards = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDOM('#store', domString);
};

const showCards = (array) => {
  clearDom();
  let domString = '';
  let orderId = '';
  if (array.length > 0) {
    array.forEach((item) => {
      orderId = item.item_id;
      domString += `
      <div class="card" style="width: 80%; height: 120px; background-color:white;">
        <div class="card-body">
          <h5 class="card-title" style="color:black;">${item.item_name}</h5>
          <h5 class="card-title" style="color:black;">${item.item_price}</h5>
            <a id="edit-card-btn--${item.item_id}" class="">Edit Item</a>
            <a id="delete-card-btn--${item.item_id}" class="">Delete Item</a>
        </div>
      </div>`;
    });
  } else {
    domString = '<h2>No Cards to be displayed</h2>';
  }
  domString += `<br>
  <div>
    <button type="submit" id="addOrderItem--${orderId}" class="btn btn-success">Add Item</button>
    <button type="submit" id="gotoPayment--${orderId}" class="btn btn-primary">Go To Payment</button>
  </div>`;
  renderToDOM('#store', domString);
};

export { showCards, emptyCards };
