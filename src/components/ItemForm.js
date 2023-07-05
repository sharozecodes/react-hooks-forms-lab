import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ setItems }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    const itemName = e.target[0].value;
    const itemCategory = e.target[1].value;
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    };
    console.log(newItem);
    setItems((previous) => [...previous, newItem]);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
