import React, { useState } from "react";
import items from "../data/items"



function Filter({ onCategoryChange  }) {
 
  const [searchText, setSearchText] = useState("");


  const handleSearchChange = (event) => {
    const newText = event.target.value;

    const filteredItems = items.filter(item => item.name.includes(newText));


    if (filteredItems.length > 0) {
      console.log(filteredItems);
      
      
        }

    else {
      console.log("No results matching");
    };

    setSearchText(newText); 
    
  };



  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchText} 
        onChange={handleSearchChange} 
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
