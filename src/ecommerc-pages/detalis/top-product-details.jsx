"use client";

import React, { useEffect, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { topProductGet } from "@/lib/product-api";
import Link from "next/link";

const colors = [
  { name: "black", class: "bg-black" },
  { name: "purple", class: "bg-purple-600" },
  { name: "red", class: "bg-red-600" },
  { name: "yellow", class: "bg-yellow-500" },
  { name: "gray", class: "bg-gray-200" },
];

const TopProductDetails = ({ id }) => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [isFavorite, setIsFavorite] = useState(false);
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await topProductGet();
        setTopProducts(data.topProducts || []);
      } catch (error) {
        console.error("Product fetch failed:", error);
      }
    };
    fetchProduct();
  }, []);

  const product = topProducts.find((p) => p._id === id);

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-500 dark:text-slate-400">
        Loading product details...
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-12 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[480px]">
        {/* Left side - Image */}
        <div className="flex justify-center items-center bg-gray-100 dark:bg-slate-900 rounded-lg h-[280px] sm:h-[350px] md:h-[450px] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain rounded-lg"
          />
        </div>

        {/* Right side - product details (centered) */}
        <div className="flex flex-col items-center justify-center text-center gap-6 h-full">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-[#abc2d3]">
              {product.name}
            </h1>
            <p className="text-2xl sm:text-3xl mt-3 font-semibold text-gray-900 dark:text-[#abc2d3]">
              BDT {product.price} TK
            </p>
          </div>

          {/* Color selection */}
          <div>
            <label className="block mb-2 text-sm font-medium dark:text-[#abc2d3]">
              Select color:
            </label>
            <div className="flex justify-center flex-wrap gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-full ${color.class} ${
                    selectedColor === color.name
                      ? "ring-2 ring-[#0FABCA] ring-offset-2 dark:ring-offset-slate-800"
                      : ""
                  }`}
                  aria-label={color.name}
                />
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="flex-1 py-3 px-4 border border-gray-200 dark:border-slate-700 rounded-lg flex items-center justify-center gap-2 text-gray-800 dark:text-[#abc2d3] hover:bg-gray-50 dark:hover:bg-slate-900"
            >
              {isFavorite ? (
                <BsHeartFill className="w-5 h-5 text-red-500" />
              ) : (
                <BsHeart className="w-5 h-5" />
              )}
              Add to Wishlist
            </button>
          <Link href="/pay">
              <button className="flex-1 py-3 px-4 rounded-lg bg-[#0FABCA] text-white hover:bg-[#0FABCA]/90">
              Add to Cart
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProductDetails;
