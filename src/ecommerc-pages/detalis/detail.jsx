"use client";

import React, { useEffect, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
// import { FiCpu, FiSmartphone } from "react-icons/fi";
// import { IoMdCamera } from "react-icons/io";
// import { MdBatteryChargingFull } from "react-icons/md";
// import { GoVerified } from "react-icons/go";
// import { IoStorefrontOutline } from "react-icons/io5";
// import { CiDeliveryTruck } from "react-icons/ci";
import { getProduct } from "@/lib/product-api";
import Link from "next/link";



const colors = [
  { name: "black", class: "bg-black" },
  { name: "purple", class: "bg-purple-600" },
  { name: "red", class: "bg-red-600" },
  { name: "yellow", class: "bg-yellow-500" },
  { name: "gray", class: "bg-gray-200" },
];



const ProductDetailsPage = ({ id }) => {
  
  const [selectedColor, setSelectedColor] = useState("black");
  const [isFavorite, setIsFavorite] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Product fetch failed:", error);
      }
    };
    fetchProduct();
  }, []);
  const product = products.find((p) => p._id === id);

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-500 dark:text-slate-400">
        Loading product details...
      </div>
    );
  }

  return (
    <div className="mx-auto md:px-8 md:py-12">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left side - Image gallery */}
        <div className="flex flex-col-reverse gap-[15px] md:gap-0 md:flex-row">
          {/* Thumbnails */}
         

          {/* Main image */}
          <div className="w-full md:w-[80%] dark:bg-slate-900 bg-gray-100 rounded-sm h-[280px] md:h-[400px] relative flex items-center justify-center">
            <img
              src={product.imageDefault}
              alt={product.name}
              className="object-cover w-[200px] md:w-[300px] rounded-lg"
            />
          </div>
        </div>

        {/* Right side - product details */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-[1.6rem] dark:text-[#abc2d3] md:text-[1.9rem] font-bold text-gray-800">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mt-2 md:mt-5">
              <span className="text-3xl dark:text-[#abc2d3] font-medium">
                BDT {product.price} TK
              </span>
            </div>
          </div>

          {/* Color selection */}
          <div className="flex float-start md:items-center flex-col md:flex-row gap-[10px]">
            <label className="text-sm dark:text-[#abc2d3] font-medium">
              Select color:
            </label>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-full ${color.class} ${
                    selectedColor === color.name
                      ? "ring-2 dark:ring-offset-slate-800 ring-offset-2 ring-[#0FABCA]"
                      : ""
                  }`}
                  aria-label={color.name}
                />
              ))}
            </div>
          </div>

          {/* Storage selection */}
        

          {/* Action buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="flex-1 py-3 px-4 dark:border-slate-700 dark:text-[#abc2d3] dark:hover:bg-slate-900 rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-50"
            >
              <div className="flex items-center justify-center gap-2">
                {isFavorite ? (
                  <BsHeartFill className="w-5 h-5 text-red-500" />
                ) : (
                  <BsHeart className="w-5 h-5" />
                )}
                Add to Wishlist
              </div>
            </button>
            <Link href="/pay">
            <button className="flex-1 py-3 px-4 rounded-lg bg-[#0FABCA] text-white hover:bg-[#0FABCA]/90">
              Add to card
            </button>
               </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
