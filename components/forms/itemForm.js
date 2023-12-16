import renderToDOM from '../../utils/renderToDom';

const itemForm = () => {
  const domString = `<div class="container mt-5 ">
<form>
  <div class="form-group">
    <label for="itemName" class="text-white">Order Item</label><br>
    <input type="text" class="form-control" id="itemName" name="itemName" required><br>
  <div>
  <div class="form-group">
    <label for="itemPrice" class="text-white">Item Price</label><br>
    <input type="text" class="form-control" id="itemPrice" name="itemPrice" required><br>
  </div>
    <button type="submit" id="orderItem" class="btn btn-success">Create/Edit Order Item</button>
</form>
</div>`;

  renderToDOM('#app', domString);
};

export default itemForm;
