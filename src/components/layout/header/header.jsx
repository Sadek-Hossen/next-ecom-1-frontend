"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// react icons
import BASE_URL from "@/constant/url";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { CiMenuFries } from "react-icons/ci";
//import { IoIosSearch } from "react-icons/io";

const Header = () => {
  const router = useRouter();

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "https://next-ecom-1-backend.vercel.app/api/user/get",
          {
            withCredentials: true,
          }
        );
        setUser(res.data.user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  // for logout

  const logout = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/user/logout`,
        {},
        { withCredentials: true }
      );

      if (res.status === 200) {
        toast.success("User logout success");
        setUser(null); // user state clear
        router.push("/");
        console.log("Logout button clicked");
      }
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed");
    }
  };

  return (
    <div>
      <nav className="flex items-center justify-between w-full relative dark:bg-slate-900 bg-pink-200 px-[10px] py-[8px]">
        {/* logo */}
        <Link href="/">
          <Image
            src="/img/logo.png"
            alt="logo"
            width={55}
            height={55}
            className="w-[65px] cursor-pointer"
          />
        </Link>

        {/* nav links */}
        <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
          <li className="group relative cursor-pointer px-5 py-2 rounded-md border border-gray-500 bg-gray-900 text-white overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
            <Link
              href="/"
              className="relative z-10 transition-all duration-500 group-hover:px-8"
            >
              Home
            </Link>
          </li>

          <li className="group relative cursor-pointer px-5 py-2 rounded-md border border-gray-500 bg-gray-900 text-white overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
            <Link
              href="/shop"
              className="relative z-10 transition-all duration-500 group-hover:px-8"
            >
              Shop
            </Link>
          </li>

          <li className="group relative cursor-pointer px-5 py-2 rounded-md border border-gray-500 bg-gray-900 text-white overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
            <Link
              href="/contruct"
              className="relative z-10 transition-all duration-500 group-hover:px-8"
            >
              Contact
            </Link>
          </li>

          <li className="group relative cursor-pointer px-5 py-2 rounded-md border border-gray-500 bg-gray-900 text-white overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
            <Link
              href="/about"
              className="relative z-10 transition-all duration-500 group-hover:px-8"
            >
              About
            </Link>
          </li>
        </ul>

        {/* cart icon */}
        <div className="flex gap-3 ml-4 ">
          <Link href="/shop">
            <li className="group relative cursor-pointer px-5 py-2 rounded-md border border-gray-500 bg-gray-900 text-white overflow-hidden list-none">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
              <span className="relative z-10 transition-all duration-500 group-hover:px-8">
                <ShoppingCartIcon />
              </span>
            </li>
          </Link>

          {/* <Link href="">
          <li className="group relative cursor-pointer px-5 py-2 rounded-md border border-gray-500 bg-gray-900 text-white overflow-hidden list-none">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
            <Link href={"/register"} className="relative z-10 transition-all duration-500 group-hover:px-8">
             Sign In
            </Link>
          </li>
        </Link> */}

          {user ? (
            <div className="flex gap-5 justify-between items-center mx-auto text-center">
              {/* User info */}
              <Link href={"/profileInfo"}>
                <div className="flex items-center gap-2 p-3 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 transition duration-300 hover:scale-105">
                  <h1 className="text-white">{user.name}</h1>
                  <span>👨🏽‍💼</span>
                </div>
              </Link>
              {/* Logout button */}
              <button
                onClick={logout}
                className="p-3 px-6 rounded-2xl text-white text-center bg-gradient-to-r from-red-500 to-pink-500 transition duration-300 hover:scale-105 cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login">
              <span className="relative z-10 transition-all duration-500 group-hover:px-8">
                <h1 className="p-3 px-6 rounded-2xl text-white text-center bg-gradient-to-r from-red-500 to-pink-500 transition duration-300 hover:scale-105 cursor-pointer">
                  {" "}
                  Login
                </h1>
              </span>
            </Link>
          )}
        </div>

        {/* mobile menu icon */}
        <div className="items-center gap-[10px] flex">
          <CiMenuFries
            className="text-[1.8rem] dark:text-[#abc2d3] mr-1 text-[#424242] cursor-pointer md:hidden flex"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          />
        </div>

        {/* mobile sidebar */}
        <aside
          className={`${
            mobileSidebarOpen
              ? "translate-x-0 opacity-100 z-20"
              : "translate-x-[200px] opacity-0 z-[-1]"
          } md:hidden bg-white p-4 text-center absolute top-[65px] dark:bg-slate-700 right-0 w-full sm:w-[50%] rounded-md transition-all duration-300`}
        >
          <div className="relative mb-5">
            {/* <input
              className="py-1.5 pr-4 dark:bg-slate-800 dark:text-[#abc2d3] dark:border-slate-900/50 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#3B9DF8]"
              placeholder="Search..."
            /> */}
            {/* <IoIosSearch className="absolute dark:text-slate-400 top-[8px] left-3 text-gray-500 text-[1.3rem]" /> */}
          </div>
          <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
            <li>
              <Link
                href="/"
                className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                   href="/shop"
                className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/contruct"
                className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize"
              >
                Contruct
              </Link>
            </li>
            <li>
              <Link
                   href="/about"
                className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize"
              >
                    about
              </Link>
            </li>
          </ul>
        </aside>
      </nav>
    </div>
  );
};

export default Header;
