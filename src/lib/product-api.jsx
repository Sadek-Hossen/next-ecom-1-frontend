
import axios from "axios";

export const getProduct = async ()  => {
  try {
   const res = await axios.get("http://localhost:5000/api/product/getProduct");
   return res.data;
  } catch (error) {
  console.error("error fetching product data", error);
  throw error;
  }
};


export const topProductGet = async ()=>{
  try {
    const res = await axios.get("http://localhost:5000/api/product/getTopProducts");
    return res.data;

  } catch (error) {
    console.error("error fetching top products", error);
    throw error;
  }
}




// lib/product-api.js




// Correct spelling: 
export const filteredProduct = async (filters) => {
  const { category, minPrice, maxPrice } = filters;
  const params = {};

  if (category) params.category = category;
  if (minPrice) params.minPrice = Number(minPrice);
  if (maxPrice) params.maxPrice = Number(maxPrice);

  const res = await axios.get("http://localhost:5000/api/product/filterProducts", {
    params,
  });
  console.log('this is filtered data', res.data)

  return res.data.products;
};

export const searchProduct = async (keyword) => {
  try {
    const res = await axios.get("http://localhost:5000/api/product/searchProducts", {
      params: { keyword }
    });
    return res.data;
  } catch (error) {
    console.error("error fetching search products", error);
    throw error;
  }
};
