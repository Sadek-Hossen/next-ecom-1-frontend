"use client";

import Link from "next/link";
import React from "react";

// Marquee Data
const MarqueeData = [

 { title: "Pizza" },
  { title: "Burger" },
  { title: "Pasta" },
  { title: "Sushi" },
  { title: "Sandwich" },
  { title: "Taco" },
  { title: "Salad" },
  { title: "Fries" },
  { title: "Ice Cream" },
  { title: "Doughnut" },
  { title: "Steak" },
  { title: "Chicken Wings" },
  { title: "Hot Dog" },
  { title: "Cupcake" },
  { title: "Pancake" },
  { title: "Waffles" },
  { title: "Soup" },
  { title: "Biryani" },
  { title: "Noodles" },
  { title: "Ramen" },
  { title: "Curry" },
  { title: "Samosa" },
  { title: "Spring Roll" },
  { title: "Muffin" },
  { title: "Pie" },
  { title: "Lasagna" },
  { title: "Chocolate" },
  { title: "Donut" },
  { title: "Burger Combo" },
  { title: "Falafel" },
  { title: "Tandoori Chicken" },
  { title: "Paneer Tikka" },
  { title: "Fried Rice" },
  { title: "Fish Curry" },
  { title: "Shawarma" },

];

const HorizontalMarquee = () => {
  const doubledComponents = [...MarqueeData, ...MarqueeData];

  return (
    <div className="w-full space-y-2 py-2">
      {/* Left marquee */}
      <div className="slider-container overflow-hidden relative [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="marqueeSliderLeft flex items-center gap-5">
          {doubledComponents.map((item, index) => (
            <Link
              key={index}
              href={"/"}
              className=" px-2 bg-[#0FABCA] dark:bg-[#0FABCA]/90 border border-[#0FABCA] dark:border-[#0FABCA]/90 text-white rounded font-medium whitespace-nowrap capitalize"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Right marquee */}
      <div className="slider-container overflow-hidden relative [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="marqueeSliderRight flex items-center gap-5 w-[50%] 1404px:w-[100%] justify-center">
          {MarqueeData.map((item, index) => (
            <Link
              key={index}
              href={"/"}
              className=" px-2 bg-[#0FABCA] dark:bg-[#0FABCA]/90 border border-[#0FABCA] dark:border-[#0FABCA]/90 text-white rounded font-medium whitespace-nowrap capitalize"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marqueeSliderLeft {
          display: flex;
          animation: marqueeLeft 20s linear infinite;
        }

        .marqueeSliderRight {
          display: flex;
          animation: marqueeRight 20s linear infinite;
        }

        .slider-container:hover .marqueeSliderLeft,
        .slider-container:hover .marqueeSliderRight {
          animation-play-state: paused;
        }

        @keyframes marqueeLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeRight {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(50%);
          }
        }
      `}</style>
    </div>
  );
};

export default HorizontalMarquee;
