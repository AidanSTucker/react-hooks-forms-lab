import React from "react";
import items from "../data/items"

function Filter({ onCategoryChange }) {

  
  function handleSearch(e) {
    e.preventDefault();
    console.log("fsfsfg")
    if (e.target.value === items.name.value) {
      return(items)
    }
    
  }





  return (
    <div className="Filter">
      <input 
      type="text" 
      name="search" 
      placeholder="Search..." 
      onChange={handleSearch}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;