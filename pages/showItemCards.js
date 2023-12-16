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
      <div class="card" style="width: 80%; height: 120px; >
        <div class="card-body">
          <h5 class="card-title">${item.item_name}</h5>
          <h5 class="card-title">${item.item_price}</h5>
            <a id="edit-card-btn--${item.firebaseKey}" class="">Edit Card</a>
            <a id="delete-card-btn--${item.firebaseKey}" class="">Delete Card</a>
        </div>
      </div>`;
    });
  } else {
    domString = '<h2>No Cards to be displayed</h2>';
  }
  renderToDOM('#store', domString);
};

export { showCards, emptyCards };
