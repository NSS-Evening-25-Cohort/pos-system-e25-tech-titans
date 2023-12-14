import renderToDOM from '../../utils/renderToDom';

const formOrder = () => {
  const domString = `<div class="container mt-5 ">
  <form id="submit-order">
    <div class="form-group" >
      <label for="orderName" class="text-white">Order Name</label>
      <input type="text" class="form-control" id="orderName" name="orderName" required>
    </div>

    <div class="form-group">
      <label for="customerPhone" class="text-white">Customer Phone</label>
      <input type="tel" class="form-control" id="customerPhone" name="customerPhone" required>
    </div>

    <div class="form-group">
      <label for="customerEmail" class="text-white" >Customer Email</label>
      <input type="email" class="form-control" id="customerEmail" name="customerEmail" required>
    </div>

    <div class="form-group">
      <label for="orderType" class="text-white" >Order Type</label>
      <select class="form-control" id="orderType" name="orderType" required>
        <option value="">Select an Order Type</option>
        <option value="">walking </option>
        <option value="">by phone </option>
        <option value="">online </option>
      </select>
    </div>

    <button  type="submit" class="btn btn-success">Create/Edit Order</button>
  </form>
</div>`;

  renderToDOM('#view', domString);
};

export default formOrder;
