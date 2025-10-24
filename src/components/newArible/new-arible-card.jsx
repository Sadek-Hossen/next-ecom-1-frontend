"use client";
import React, { useState } from "react";
import Image from "next/image";

// react icons
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagHandleOutline, IoEyeOutline } from "react-icons/io5";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const NewACard = ({ data }) => {
  const [rating, setRating] = useState(5);
  const [count, setCount] = useState(0);
  console.log({data})
  const [wishlistVisible, setWishlistVisible] = useState(false);
  const [quickViewVisible, setQuickViewVisible] = useState(false);
  const [productCardHover, setProductCardHover] = useState(false);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => Math.max(prev - 1, 0));
  const handleInputValueChange = (e) => setCount(Number(e.target.value));

  return (
    <div className="w-full md:w-[70%] mx-auto group">
      {/* image & action buttons */}
      <div
        onMouseOver={() => setProductCardHover(true)}
        onMouseOut={() => setProductCardHover(false)}
        className="w-full relative cursor-pointer overflow-hidden"
      >
        <Link href={`/details/${data._id}`}>
         <Image
          alt="product/image"
          src={productCardHover ? data.imageHover : data.imageDefault}
          width={800}
          height={800}
          className="w-full object-cover rounded-2xl"
        /> 
        </Link>
       
    

        <div className="absolute bottom-0 left-0 w-full">
          {/* quick action buttons */}
          <div className="flex items-center gap-[15px] justify-center">
            {/* Wishlist */}
            <div
              onMouseOver={() => setWishlistVisible(true)}
              onMouseOut={() => setWishlistVisible(false)}
              className="relative w-max group-hover:translate-y-0 translate-y-[50px] transition-all opacity-0 group-hover:opacity-100 duration-300"
            >
              <p className="rounded-full bg-white p-2 hover:bg-[#0FABCA] hover:text-white transition-all duration-200 cursor-pointer">
                <IoMdHeartEmpty className="text-[1.3rem]" />
              </p>

              {/* tooltip */}
              <p
                className={`${
                  wishlistVisible
                    ? "opacity-100 z-[100] translate-y-0"
                    : "opacity-0 z-[-1] translate-y-[20px]"
                } absolute top-[-50px] transform translate-x-[-50%] left-[50%] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}
              >
                Wishlist
                <span className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] bottom-[-10%]" />
              </p>
            </div>

            {/* Compare */}
         

            {/* Quick View */}
            <div
              onMouseOver={() => setQuickViewVisible(true)}
              onMouseOut={() => setQuickViewVisible(false)}
              className="relative w-max group-hover:translate-y-0 transition-all duration-700 opacity-0 group-hover:opacity-100 translate-y-[110px]"
            >
              <p className="rounded-full bg-white p-2 hover:bg-[#0FABCA] hover:text-white transition-all duration-200 cursor-pointer">
                <IoEyeOutline className="text-[1.3rem]" />
              </p>

              <p
                className={`${
                  quickViewVisible
                    ? "opacity-100 z-[100] translate-y-0"
                    : "opacity-0 z-[-1] translate-y-[20px]"
                } absolute top-[-50px] transform translate-x-[-50%] left-[50%] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}
              >
                Quick View
                <span className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] bottom-[-10%]" />
              </p>
            </div>
          </div>

          {/* quantity & add cart */}
          <div className="w-full flex mt-6 items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 translate-y-[60px] bg-[rgba(0,0,0,0.5)]">
            {/* quantity */}
            <div className="flex w-[50%] justify-center px-2 py-0.5 items-center border-r border-gray-400 text-white">
              <button
                className="active:bg-gray-100 p-[6px] rounded-full text-white transition-all duration-300 active:text-gray-700 text-[0.9rem]"
                onClick={handleDecrement}
              >
                <FiMinus />
              </button>
              <input
                type="number"
                value={count}
                className="w-[40px] py-2.5 outline-none border-none text-center text-[0.9rem] bg-transparent"
                onInput={handleInputValueChange}
              />
              <button
                className="active:bg-gray-100 p-[6px] rounded-full text-white transition-all duration-300 active:text-gray-700 text-[0.9rem]"
                onClick={handleIncrement}
              >
                <FiPlus />
              </button>
            </div>

            {/* add to cart */}
            <button className="py-[13px] overflow-hidden before:w-full before:h-full before:bg-[#0FABCA] before:absolute before:top-0 z-0 before:z-[-1] before:translate-x-[-150px] hover:before:translate-x-0 before:transition-all before:duration-300 before:left-0 relative flex items-center justify-center grow text-white">
              <IoBagHandleOutline className="text-[1.3rem]" />
            </button>
          </div>
        </div>
      </div>

      {/* product details */}
      <div className="mt-4">
        <div className="flex items-center justify-center gap-[10px] mt-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => {
              const starRating = index + 1;
              return (
                <FaStar
                  key={starRating}
                  className={`cursor-pointer ${
                    starRating <= rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  size={16}
                  onClick={() => setRating(starRating)}
                />
              );
            })}
          </div>
          <span className="text-[0.9rem] text-gray-500">(43)</span>
        </div>

        <h3 className="text-[1rem] font-medium text-center mt-0.5 text-gray-900">
          {data.name || "Drop-shoulder synthetic"}
        </h3>
        <p className="text-center mt-0.5 text-[0.9rem] text-gray-900">
          {data.price ? `Tk ${data.price}` : "Tk 1,800.00"}
        </p>

      
      </div>
    </div>
  );
};

export default NewACard;
