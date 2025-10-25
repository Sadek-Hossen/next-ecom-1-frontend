"use client";

import React from "react";
import Image from "next/image";

// react icons
import { CiSearch } from "react-icons/ci";
import { FaCircleCheck } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="w-full h-full bg-[#FBFBFB] rounded-md">

      {/* header */}
      <header className="flex lg:flex-row flex-col gap-[50px] lg:gap-10 items-center p-8">
  
    <div className="w-full sm:w-[40%] relative h-[400px] sm:h-[500px]">
          <Image
            src="/img/heroman.png"
            alt="image"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-full lg:w-[55%]">
          <h1 className="text-[40px] dark:text-[#abc2d3] sm:text-[60px] font-[600] leading-[45px] sm:leading-[70px]">
            <span className="text-3xl lg:text-6xl font-bold text-green-500">Amar Shop</span> <br />
            Let your <span className="text-[#F38160]">groceries</span> come to you
          </h1>
          <p className="text-[18px] text-gray-400 dark:text-slate-400 mt-2">
            Get fresh groceries online without stepping out to make delicious food with the freshest ingredients
          </p>
        

          <div className="grid grid-cols-1 mt-4 text-gray-800 400px:grid-cols-2 gap-[15px] w-full sm:w-[80%]">
            <p className="flex items-center dark:text-slate-400 gap-[5px] text-gray-600 text-[1rem]">
              <FaCircleCheck className="text-[#F0B70D] text-[1.2rem]" /> Fresh Vegetables
            </p>
            <p className="flex items-center dark:text-slate-400 gap-[5px] text-gray-600 text-[1rem]">
              <FaCircleCheck className="text-[#F0B70D] text-[1.2rem]" /> 100% Guarantee
            </p>
            <p className="flex items-center dark:text-slate-400 gap-[5px] text-gray-600 text-[1rem]">
              <FaCircleCheck className="text-[#F0B70D] text-[1.2rem]" /> Cash on Delivery
            </p>
            <p className="flex items-center dark:text-slate-400 gap-[5px] text-gray-600 text-[1rem]">
              <FaCircleCheck className="text-[#F0B70D] text-[1.2rem]" /> Fast Delivery
            </p>
          </div>
        </div>

      
      </header>


         <h1 className="text-center mt-16 font-semibold text-2xl bg-blue-300 w-[200px] mx-auto rounded-2xl p-3">Category</h1>
      <section className="p-8 pl-18  grid sm:grid-cols-2 gap-[60px] grid-cols-2 lg:grid-cols-5  flex-wrap">
              
        <div className="flex border-gray-300 hover:border-2 transition-all border rounded-2xl hover:bg-gray-200 flex-col items-center justify-center">
          <Image src="https://img.freepik.com/free-vector/vegetables-realistic-composition-white-background-with-tomato-onion-sweet-hot-pepper-eggplant_1284-16242.jpg?semt=ais_hybrid&w=740&q=80" alt="Honey" width={60} height={60} className="rounded-2xl" />
          <h4 className="px-3 lg:text-[18px] dark:text-[#abc2d3] font-[500]">vagitabls</h4>
         
        </div>

        <div className="flex  border-gray-300 hover:border-2 transition-all border rounded-2xl hover:bg-gray-200 flex-col items-center justify-center">
          <Image src="https://media.istockphoto.com/id/1304354152/photo/large-set-of-isolated-vegetables-on-a-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=712GWiQHwN6A6Lf3Kd82ZvDYO1OqzIUdRDts7wD_2mk=" alt="Spices & Seasonings" width={60} height={60} />
          <h4 className="px-3 lg:text-[18px] dark:text-[#abc2d3] font-[500]">Spices & Seasonings</h4>
        
        </div>

        <div className="flex flex-col items-center justify-center  border-gray-300 hover:border-2 transition-all border rounded-2xl hover:bg-gray-200">
          <Image src="https://t3.ftcdn.net/jpg/08/30/54/58/360_F_830545851_gzulBf4vUiDF12EM1tBCC07DhNxmM00B.jpg" alt="Dairy Products" width={60} height={60} />
          <h4 className="px-3 lg:text-[18px] dark:text-[#abc2d3] font-[500]">Dairy Products</h4>
         
        </div>

        <div className="flex flex-col items-center justify-center  border-gray-300 hover:border-2 transition-all border rounded-2xl hover:bg-gray-200">
          <Image src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvb2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="Flour" width={60} height={60} />
          <h4 className="px-3 lg:text-[18px] dark:text-[#abc2d3] font-[500]">brackfasts</h4>
         
        </div>

        <div className="flex flex-col items-center justify-center  border-gray-300 hover:border-2 transition-all border rounded-2xl hover:bg-gray-200">
          <Image src="https://i.ibb.co/y5ZTLHv/Fruits-and-vegetables.png" alt="Vegetables & Fruits" width={60} height={60} />
          <h4 className="px-3 lg:text-[18px] dark:text-[#abc2d3] font-[500]">Vegetables & Fruits</h4>
         
        </div>

      </section>
    </div>
  );
};

export default HeroSection;
