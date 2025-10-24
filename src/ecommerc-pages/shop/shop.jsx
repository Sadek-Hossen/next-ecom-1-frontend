'use client';
import React, { useEffect, useState } from 'react';
import FilterShop from './filter-shop';
import ShopCard from './shop-card';
import { topProductGet, filteredProduct, searchProduct } from '@/lib/product-api';

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await topProductGet();
      // console.log("this is top products", result);
      // console.log(result?.topProducts);
      setProducts(result?.topProducts || []);
    } catch (err) {
      console.error("Product fetch failed:", err);
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };
  fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  const handleFilterChange = async (filters) => {
    setLoading(true);
    setError(null);
    try {
      const result = await filteredProduct(filters);
      setProducts(result || []);
    } catch (err) {
      console.error("Product filter failed:", err);
      setError("Failed to load filtered products");
    } finally {
      setLoading(false);
    }
  };

// search bar function here
 const handleSearch = async (keyword) => {
  console.log("Searching for:", keyword);
  setLoading(true);
  setError(null);

  try {
    const data = await searchProduct(keyword);

    console.log("🔍 this is search result", data);

    
    setProducts(data?.serchProducts || []);
  } catch (err) {
    console.error(" Product search failed:", err);
    setError("Failed to load search products");
  } finally {
    setLoading(false);
  }
};
 
  return (
    <div className="my-20 grid grid-cols-1 md:grid-cols-3 gap-10">
      <FilterShop onSearch={handleSearch} onFilterChange={handleFilterChange} className="col-span-1" />
      <div className="col-span-2">
        {loading && <p>Loading products...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
            {products.map((product) => (
              <ShopCard key={product._id} data={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;
