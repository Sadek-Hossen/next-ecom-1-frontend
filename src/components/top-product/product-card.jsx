"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";
import Link from "next/link";

const ProductCard = ({ data }) => {
  console.log("this is product data", data);
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const getOffset = (depth = 1) => {
    const offset = 25 * depth;
    return {
      x: (mousePos.x - 0.5) * offset,
      y: (mousePos.y - 0.5) * offset,
    };
  };

  const parallax = isHovered ? getOffset(1) : { x: 0, y: 0 };
  const imageZoom = isHovered ? 1.1 : 1;

  // Default image fallback
  const imageSrc = isHovered && data.imageHover ? data.imageHover : data.image || "/default-product.png";

  // Dynamic rating
  const rating = data.rating || 0;
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="w-full flex justify-center">
      <div
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className="relative w-full sm:w-72 md:w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-5 overflow-hidden transition-all duration-300 hover:shadow-2xl"
      >
        {/* Floating image */}
        <motion.div
          animate={{ x: parallax.x, y: parallax.y }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
          className="relative flex justify-center z-10"
        >
          <motion.div
            animate={{ scale: imageZoom, x: parallax.x, y: parallax.y }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
            className="absolute -top-10 pointer-events-none"
          >
        <Link href={''}>
              <Image
              src={imageSrc}
              alt={data.name || "Product"}
              width={180}
              height={180}
              className="rounded-xl object-cover"
            />
        </Link>
          </motion.div>
        </motion.div>

        {/* Product details */}
        <div className="relative z-20 pt-28 text-center">
          <h2 className="text-lg font-semibold bg-gray-600 w-[50%] md:w-[80%] mx-auto text-white rounded-2xl dark:text-[#d2e5f5] mb-2">
            {data.name || "Unknown Product"}
          </h2>

          {/* Rating */}
          <div className="flex justify-center mb-2">
            {Array(fullStars).fill(0).map((_, i) => <FaStar key={`full-${i}`} className="text-yellow-400" />)}
            {halfStar && <FaStar key="half" className="text-yellow-200" />}
            {Array(emptyStars).fill(0).map((_, i) => <FaRegStar key={`empty-${i}`} className="text-gray-400" />)}
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-300 mb-3">
            {data.sizes || "One Size"}
          </p>
           
           <div> 
            <h1>{data.category || "Unknown Category"}</h1>
           </div>
          <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-3 rounded-xl">
            <div className="flex items-center gap-1">
              <p className="text-[#0FABCA] font-bold text-lg">{data.price || "0"}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">BDT</p>
            </div>
           <Link href={`/top-productDetails/${data._id}`}>
            <button className="bg-[#0FABCA] hover:bg-[#0ca0b9] text-white px-4 py-2 rounded-lg text-sm transition-all duration-300">
              More Details
            </button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
