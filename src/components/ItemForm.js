import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import itemData from "../data/items";


function ItemForm(props) {
  // Create state variables for the form inputs
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce"); // Default to "Produce"

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submit successful")
    console.log(itemData)

    // Create a new food item object
    const newItem = {
      id: uuid(),
      name,
      category,
    };

    // Call the function passed from the parent component to add the new item


    // Reset the form inputs
    setName("");
    setCategory("Produce");
  };

  // Function to handle changes in the name input field
  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);

    // Log the user input for the name field to the console
    console.log("User input in Name field:", newName);
  };

  // Function to handle changes in the category select field
  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);

    // Log the user input for the category field to the console
    console.log("User input in Category field:", newCategory);
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange} // Call handleNameChange on input change
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={handleCategoryChange} // Call handleCategoryChange on select change
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
