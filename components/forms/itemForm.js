import renderToDOM from '../../utils/renderToDom';

const itemForm = () => {
  const domString = `
<div style="display:flex; justify-content:center; align-items:center; heigth:400px; width:600px;">
    <div style="position: absolute; top: 50%; left: 40%;">
    <form style="color:white;">
        <label for="itemName">Order Item</label><br>
        <input type="text" id="itemName" name="itemName" required><br>
        <label for="itemPrice">Item Price</label><br>
        <input type="text" id="itemPrice" name="itemPrice" required><br>
        <button type="submit">Create/Edit Order Item</button>
    </form>
    </div>
</div>`;

  renderToDOM('#app', domString);
};

export default itemForm;
