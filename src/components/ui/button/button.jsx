"use client";
import Link from "next/link";

export const Button1 = ({ title, url }) => {
  return (
    <Link href={url}>
      <button
        className="
          relative overflow-hidden rounded-lg px-8 py-3 font-semibold
          border-2 border-purple-500 text-purple-600
          transition-all duration-500 ease-out cursor-pointer
          group
        "
      >
        {/* Gradient background that slides in on hover */}
        <span
          className="
            absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
            translate-x-[-100%] group-hover:translate-x-0
            transition-transform duration-700 ease-out
          "
        ></span>

        {/* Text always visible, changes color on hover */}
        <span
          className="
            relative z-10 transition-colors duration-500
            group-hover:text-white
          "
        >
          {title}
        </span>
      </button>
    </Link>
  );
};
