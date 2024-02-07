import React from "react";

const SearchItem = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="task-search">
      <input
        className="outline-none"
        type="text"
        id="searchInput"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Type to search..."
      />
    </div>
  );
};

export default SearchItem;
