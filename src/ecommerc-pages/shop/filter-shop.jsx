'use client';
import React, { useState } from 'react';

function FilterShop({ onFilterChange,onSearch }) {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleApply = () => {
    onFilterChange({ category, minPrice, maxPrice });
  };


  // product search bar

    const [keyword, setKeyword] = useState("")
    const handleSearch = (e) => {
      e.preventDefault();
      onSearch(keyword);
    };

  return (
    <div className="flex py-10 bg-gray-50">
      <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-5 text-center">
          Product Filter
        </h1>

        <div className="flex flex-col gap-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">All Products</option>
            <option value="food">Food</option>
            <option value="vegetables">Vegetables</option>
            <option value="beverages">Beverages</option>
            <option value="drinks">Drinks</option>
          </select>

          <div className="flex gap-3">
            <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-1/2 border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-1/2 border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

        
          <button
            onClick={handleApply}
            className="w-full bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 transition-all duration-200"
          >
            Apply Filters
          </button>
        </div>
  {/* products search form */}

 <div className="flex justify-center items-center py-10 bg-gray-100">
  <form onSubmit={handleSearch} className=" gap-y-3 bg-white shadow-lg p-4 rounded-2xl">
    <input
      type="text"
      onChange={(e)=>setKeyword(e.target.value)}
      placeholder="Search Product Name"
      className="border w-full border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
    />
    <button 
      type="submit"
      className="w-full mt-10 bg-blue-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300"
    >
      Search
    </button>
  </form>
</div>


      </div>


    </div>
  );
}

export default FilterShop;
