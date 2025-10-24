"use client";

import React, { useState } from "react";
import Image from "next/image";
import Loader from "@/loaders/loader/loader";

const ContructPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  //loaders
  const {isLoader,setIsLoader} = useState(false);
  if(isLoader){
    return <Loader />
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !message) {
      setError("Please fill in all fields");
      return;
    }

    // Clear error
    setError("");

    // Handle form submission (for now just alert)
    alert("Form submitted successfully!");

    // Clear form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    
    <section className="w-full lg:flex-row flex items-center gap-[30px] flex-col justify-between bg-[#0A0D17] p-[40px] rounded-xl">
        

      {/* form area */}
      <form className="lg:w-[60%] text-center w-full" onSubmit={handleSubmit}>
         <span className="text-3xl lg:text-6xl font-bold text-green-500">Amar Shop</span>
        <div className="lg:w-[80%] w-full mx-auto">
          <div className="text-white">
            <h1 className="text-[1.7rem] font-[600] leading-[35px]">
              Let’s connect constellations
            </h1>
            <p className="text-[0.9rem] mt-2 mb-8">
              Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.
            </p>
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="flex sm:flex-row flex-col items-center gap-[20px]">
            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="peer border-[#383844] border rounded-md outline-none px-4 py-3 w-full bg-[#22222f] text-gray-400 transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer border-[#383844] border rounded-md outline-none px-4 py-3 w-full bg-[#22222f] text-gray-400 transition-colors duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[5px] w-full mt-[20px]">
            <textarea
              placeholder="Write message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="peer min-h-[200px] border-[#383844] border rounded-md outline-none px-4 bg-[#22222f] py-3 w-full text-gray-400 transition-colors duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="py-2.5 px-6 bg-gradient-to-r from-[#763AF5] to-[#A604F2] text-white rounded-md text-[1rem] mt-[10px] w-full"
          >
            Send it to the moon
          </button>
        </div>
      </form>

      {/* image */}
      <div className="lg:w-[40%] w-full">
        <Image
          src="https://i.ibb.co/h7rjVJS/Image.png"
          alt="Contact illustration"
          width={600}
          height={400}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default ContructPage;
