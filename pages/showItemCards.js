import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyCards = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDOM('#store', domString);
};

const showCards = (array) => {
  clearDom();
  let domString = '';
  if (array.length > 0) {
    array.forEach((item) => {
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
  domString += `
  <div>
    <button type="submit" id="addOrderItem" class="btn btn-success">Add Item</button>
    <button type="submit" id="gotoPayment" class="btn btn-primary">Go To Payment</button>
  </div>`;
  renderToDOM('#store', domString);
};

export { showCards, emptyCards };
