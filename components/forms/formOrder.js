import renderToDOM from '../../utils/renderToDom';

const formOrder = () => {
  const domString = `<form>
<label for="orderName">Order Name</label>
<input type="text" id="orderName" name="orderName" required>

<label for="customerPhone">Customer Phone</label>
<input type="tel" id="customerPhone" name="customerPhone" required>

<label for="customerEmail">Customer Email</label>
<input type="email" id="customerEmail" name="customerEmail" required>

<label for="orderType">Order Type</label>
<select id="orderType" name="orderType" required>
  <option value="">Select an Order Type</option>
  <!-- Add options here -->
</select>

<button type="submit">Create/Edit Order</button>
</form>`;

  renderToDOM('#app', domString);
};

export default formOrder;
