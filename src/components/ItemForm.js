import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import itemData from "../data/items";


function ItemForm(props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce"); 

  /////////////////////////////////////////////////////////////////

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(itemData)
    

    const newItem = {
      id: uuid(),
      name,
      category,
    };

    props.onItemFormSubmit(newItem);

    setName("");
    setCategory("Produce");
  };

  /////////////////////////////////////////////////////////////////


  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);

    console.log("User input in Name field:", newName);
  };

  /////////////////////////////////////////////////////////////////

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);

    console.log("User input in Category field:", newCategory);
  };



  /////////////////////////////////////////////////////////////////

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={handleCategoryChange}
        >
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
