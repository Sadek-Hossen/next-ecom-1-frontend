"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/user/get", {
          withCredentials: true,
        });
        setUser(res.data.user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-8 w-full max-w-md text-white">
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-pink-400 to-purple-500 flex items-center justify-center text-4xl font-bold">
            {user?.name?.[0]?.toUpperCase() || "U"}
          </div>
          <h1 className="mt-4 text-2xl font-semibold">{user?.name || "Loading..."}</h1>
          <p className="text-sm text-gray-300">Welcome to your profile</p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between border-b border-white/20 pb-2">
            <span className="font-medium">Email:</span>
            <span className="text-gray-200">{user?.email || "N/A"}</span>
          </div>

          <div className="flex justify-between border-b border-white/20 pb-2">
            <span className="font-medium">User ID:</span>
            <span className="text-gray-200">{user?._id || "N/A"}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Login Time:</span>
            <span className="text-gray-200">
              {user?.createdAt ? new Date(user.createdAt).toLocaleString() : "N/A"}
            </span>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
         <Link href={"/"}>
          <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg hover:opacity-90 transition-all duration-300">
           Home 
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
