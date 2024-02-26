import React from "react";

const Header = () => {
  return (
    <div>
      <div>
        <input type="text" placeholder="Search.." />
        <button type="submit">Search</button>
      </div>

      <div>
      <div>
        <label htmlFor="filter">Filter : </label>
        <select name="filter" id="filter">
          <option value="Brand">Brand</option>
        </select>
        </div>
        <div>
        <label htmlFor="sort">Sort : </label>
        <select name="sort" id="sort">
          <option value="Price">Price</option>
        </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
