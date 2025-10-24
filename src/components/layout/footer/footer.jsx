"use client";

import Link from "next/link";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-blue-950 rounded-xl w-full p-6 lg:p-9">
      <div className="flex justify-between gap-[30px] flex-wrap w-full">
        {/* About the Store */}
        <div className="lg:w-[25%]">
          <h3 className="text-[1.2rem] font-semibold text-white mb-2">
            About The Store
          </h3>
          <div className="flex flex-col gap-[8px] text-white">
            <Link href="/" className="text-[0.9rem] hover:text-blue-400 cursor-pointer">
              Home
            </Link>
            <Link href="/customer" className="text-[0.9rem] hover:text-blue-400 cursor-pointer">
              Become a customer
            </Link>
            <Link href="/about" className="text-[0.9rem] hover:text-blue-400 cursor-pointer">
              About us
            </Link>
            <Link href="/faq" className="text-[0.9rem] hover:text-blue-400 cursor-pointer">
              FAQ
            </Link>
            <Link href="/returns" className="text-[0.9rem] hover:text-blue-400 cursor-pointer">
              Return policy
            </Link>
            <Link href="/contact" className="text-[0.9rem] hover:text-blue-400 cursor-pointer">
              Contact us
            </Link>
          </div>
        </div>

        {/* Language Section */}
        <div className="lg:w-[45%]">
          <h3 className="text-[1.2rem] font-semibold text-white mb-2">
            Products
          </h3>
          <div className="flex text-white flex-wrap gap-2">
            {["Chicken Curry", "Salad", "Soup", "Sandwich", "Chicken", "Dessert", "Burger", "Pizza"].map(
              (lang, i) => (
                <button
                  key={i}
                  className="text-[0.9rem] py-1.5 px-3 hover:bg-blue-400 rounded-md transition-all duration-200"
                >
                  {lang}
                </button>
              )
            )}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="lg:w-[20%]">
          <h3 className="text-[1.2rem] font-semibold text-white mb-2">
            Get in touch
          </h3>
          <div className="flex gap-[7px] text-white">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:bg-blue-400 transition-all duration-200"
            >
              <CgFacebook />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:bg-blue-400 transition-all duration-200"
            >
              <BsTwitter />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:bg-blue-400 transition-all duration-200"
            >
              <BsInstagram />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:bg-blue-400 transition-all duration-200"
            >
              <BsLinkedin />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Links */}
      <div className="sm:flex-row flex-col flex sm:items-center gap-[15px] w-full justify-center mt-8">
        <Link href="/terms" className="text-gray-400 cursor-pointer text-[0.8rem] hover:text-blue-300">
          Terms of purchase
        </Link>
        <Link href="/privacy" className="text-gray-400 cursor-pointer text-[0.8rem] hover:text-blue-300">
          Security and privacy
        </Link>
        <Link href="/newsletter" className="text-gray-400 cursor-pointer text-[0.8rem] hover:text-blue-300">
          Newsletter
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
