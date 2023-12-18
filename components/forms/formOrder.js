import renderToDOM from '../../utils/renderToDom';
import clearDom from '../../utils/clearDom';

const formOrder = (data = {}, firebaseKey) => {
  console.warn(data);
  clearDom();
  const orderObj = data[firebaseKey];
  console.warn('this is the object inside the form', data);

  const domString = `<div class="container mt-5 ">
  <form id="${orderObj.order_id ? `update-order-form--${orderObj.order_id}` : 'submit-order'}">
    <div class="form-group" >
      <label for="orderName" class="text-white">Order Name</label>
      <input type="text" class="form-control" id="orderName"  value ="${orderObj.order_name || ''}" name="orderName" required>
    </div>

    <div class="form-group">
      <label for="customerPhone" class="text-white">Customer Phone</label>
      <input type="tel" class="form-control" id="customerPhone" value ="${orderObj.customer_phone || ''}" name="customerPhone" required>
    </div>

    <div class="form-group">
      <label for="customerEmail" class="text-white" >Customer Email</label>
      <input type="email" class="form-control" id="customerEmail" value ="${orderObj.customer_email || ''}" name="customerEmail" required>
    </div>

    <div class="form-group">
      <label for="orderType" class="text-white" >Order Type</label>
      <select class="form-control" id="orderType" name="orderType" required>
        <option value="">Select an Order Type</option>
        <option value="phone">by phone </option>
        <option value="in-person">in person </option>
        <option value="online">online </option>
      </select>
    </div>

    <button  type="submit" class="btn btn-success">Create/Edit Order</button>
  </form>
</div>`;

  renderToDOM('#view', domString);
};

export default formOrder;
