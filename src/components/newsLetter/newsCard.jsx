"use client";

import { useState } from "react";
import Image from "next/image";

const NewsLetterForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Email validation function
  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // simple regex
    return pattern.test(email);
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email address.");
    } else if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
    } else {
      setMessage("✅ Thank you for subscribing!");
      setEmail(""); // clear input
    }
  };

  return (
    <section className="w-full rounded- mt-[200px] p-[20px]">
      <div className="flex lg:flex-row flex-col items-center justify-between gap-[50px] lg:gap-[20px]">
        {/* Left image */}
        <div className="w-full sm:w-[80%] lg:w-[50%]">
          <Image
            src="https://i.ibb.co/vPgN7fq/dizzy-messages-1.png"
            alt="Newsletter illustration"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Right form */}
        <div className="w-full lg:w-[50%]">
          <h1 className="text-[2rem] dark:text-[#abc2d3] sm:text-[3rem] font-[500] capitalize text-text leading-[50px]">
            Join Us!
          </h1>
          <p className="text-[1.1rem] dark:text-slate-400 mt-3">
            Subscribe to our weekly newsletter and be a part of our journey to
            self discovery and love.
          </p>

          <form onSubmit={handleSubmit} className="mt-12 relative">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-4 pl-4 dark:bg-transparent dark:placeholder:text-slate-500 dark:text-[#abc2d3] pr-[120px] outline-none focus:ring-0 border rounded-full border-[#00b0ff]"
            />

            <button
              type="submit"
              className="px-8 py-3 absolute top-0 right-0 h-full rounded-full rounded-tl-[0px] hover:bg-[#02aaf2] bg-[#00b0ff] text-white"
            >
              Submit
            </button>
          </form>

          {/* Validation message */}
          {message && (
            <p
              className={`mt-4 text-sm ${
                message.startsWith("✅") ? "text-green-600" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsLetterForm;
