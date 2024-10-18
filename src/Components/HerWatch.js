import React, { useState } from 'react';
import '../css/herWatch.css';
import { FaSearch, FaTimes } from 'react-icons/fa';
import FilterDropdown from '../Layout/FilterDropdown';
import watches from '../Data/herWatchData';

function  HerWatch() {
  // State for search visibility and dropdown
  const [showSearch, setShowSearch] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  // Handler for dropdown selection
  const handleDropdownSelection = (item) => {
    console.log(item);
    setShowDropdown(false);
  };

  return (
    <div className='herwatch'>
      {/* Search toggle icon */}
      <div className="search-toggle" onClick={() => setShowSearch(true)}>
        <FaSearch size={24} />
      </div>

      {/* Conditional rendering of search bar */}
      {showSearch && (
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search For A Product." className="search-input" />
          <FaTimes className="close-icon" onClick={() => setShowSearch(false)} />
        </div>
      )}

      {/* Filter dropdown component */}
      <FilterDropdown
        isOpen={showDropdown}
        toggle={() => setShowDropdown(!showDropdown)}
        onSelect={handleDropdownSelection}
      />

      {/* Watch grid */}
      <div className="watch-grid">
        {watches.map((watch) => (
          <div key={watch.id} className="watch-item">
            <img src={watch.image} alt={watch.specification} className="watch-image" />
            <p className="watch-spec">{watch.specification}</p>
          </div>
        ))}
      </div> 
    </div>
  );
}

export default  HerWatch;