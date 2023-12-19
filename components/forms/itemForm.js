import renderToDOM from '../../utils/renderToDom';

const itemForm = (obj = {}) => {
  const domString = `<div class="container mt-5 ">
<form id="${obj.item_id ? `update-item--${obj.item_id}` : 'submit-item'}">
  <div class="form-group">
    <label for="itemName" class="text-white">Order Item</label><br>
    <input type="text" class="form-control" id="itemName" name="itemName" placeholder="Enter Item Name" value="${obj.item_name || ''}" required><br>
  <div>
  <div class="form-group">
    <label for="itemPrice" class="text-white">Item Price</label><br>
    <input type="text" class="form-control" id="itemPrice" name="itemPrice" placeholder="Enter Item Price" value="${obj.item_price || ''}" required><br>
  </div>
    <button type="submit" id="update-Item--${obj.order_id}" class="btn btn-success">Create/Edit Order Item</button>
</form>
</div>`;

  renderToDOM('#app', domString);
};

export default itemForm;
