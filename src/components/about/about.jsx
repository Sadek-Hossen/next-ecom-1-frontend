'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-gray-900 min-h-screen  items-center px-6 py-12">
      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2 w-full max-w-6xl">
        {/* Left Side - Text */}
        <div className="p-10 flex flex-col justify-center text-white">
          <h3 className="text-orange-400 text-sm uppercase font-semibold tracking-wider">
            Buy Everything You Need
          </h3>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-2 leading-tight">
            AMAR <br /> SHOPPING
          </h1>

          <p className="text-gray-300 mt-4 leading-relaxed">
            Craving something delicious? Order your favorite meals online and enjoy hot, 
            fresh food delivered right to your door.
          </p>

          <Link href="/shop">
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all">
              Order Now
            </button>
          </Link>

          <div className="flex gap-4 mt-6 text-gray-400 text-lg">
            <i className="fa-brands fa-facebook-f hover:text-white cursor-pointer"></i>
            <i className="fa-brands fa-twitter hover:text-white cursor-pointer"></i>
            <i className="fa-brands fa-instagram hover:text-white cursor-pointer"></i>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative flex justify-center items-center bg-gray-700">
          <Image
            src="https://cinebuzztimes.com/wp-content/uploads/2022/08/photo-2-2.jpg"
            alt="Online Shopping"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />

          {/* Discount Box */}
          <div className="absolute bottom-8 left-8 bg-orange-500 text-white p-4 rounded-lg text-center shadow-lg">
            <h3 className="text-lg font-semibold">SALE UP TO</h3>
            <h2 className="text-3xl font-extrabold">50% OFF</h2>
            <p className="text-xs mt-1 opacity-90">Holiday Purchase Only</p>
          </div>
        </div>
      </div>

      {/* About Description Section */}
      <div className="bg-gray-800 mt-4 rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2 w-full max-w-6xl">
        <section className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-4">
            About Amar Shop
          </h2>
          <p className="leading-relaxed text-gray-300">
            Welcome to <span className="font-semibold text-white">Amar Shop</span>, your trusted online
            destination for fresh food and groceries. We bring the best ingredients,
            delicious meals, and everyday essentials right to your doorstep. Our goal is
            simple — to make your shopping easy, fast, and enjoyable, so you can focus on
            what matters most: enjoying great food with the people you love.
          </p>
        </section>

        <section className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-4">
            Our Mission
          </h2>
          <p className="leading-relaxed text-gray-300">
            At <span className="font-semibold text-white">Amar Shop</span>, we believe food should be fresh, fast, and
            full of flavor. From farm-fresh vegetables to mouthwatering dishes, we deliver
            everything you need to make your meals special. With a 100% freshness guarantee,
            secure payment options, and quick delivery, we make online food shopping simple
            and reliable.
          </p>
        </section>
      </div>
    </div>
  );
}
