"use client";
import React, { useEffect, useState } from 'react';
import ProductCard from './product-card';
import { Button1 } from '../ui/button/button';
import { topProductGet } from '@/lib/product-api';

function TopProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(() => {
  const fetchProducts = async () => {
    try {
      const result = await topProductGet();
      console.log("this is our top products",result);          // এখানে দেখবে: { message, topProducts: [...] }
      console.log(result.topProducts); // এখানে দেখতে হবে আসল array
      setProducts(result.topProducts || []); // এটাই সঠিক ✅
      setLoading(false);
    } catch (err) {
      console.error("Product fetch failed:", err);
      setError("Failed to load products");
      setLoading(false);
    }
  };
  fetchProducts();
}, []);


  return (
    <div className='px-8 mt-4 mb-3'>
      <h1 className='text-2xl font-semibold font-serif px-10 mb-12'>Our Top Products</h1>

      {loading && <p className="text-center text-gray-500">Loading products...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>
            {products.slice(0, 8).map((product) => (
              <div key={product._id || product._id}>
                <ProductCard data={product} />
              </div>
            ))}
          </div>
          <div className='flex justify-center items-center mt-6'>
            <Button1 title={"See more"} url={"/shop"} />
          </div>
        </>
      )}
    </div>
  );
}

export default TopProducts;
