import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa"; 

function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-4 border border-gray-300 bg-[#FFFFFF]">
     
      <div className="flex gap-6 items-center mx-10">
        <Image src="/assets/logo.png" alt="Applyo" width={80} height={50} />
        <div className="flex gap-4 text-[#182230]  ml-3 font-medium">
          <div className="cursor-pointer hover:text-blue-600 transition bg-gray-100 px-3 py-2 rounded-md border-0">
            Home
          </div>
          <div className="cursor-pointer hover:text-blue-600 transition px-3 py-2">
            Dashboard
          </div>
          <div className="cursor-pointer hover:text-blue-600 transition px-3 py-2">
            Daily Challenge
          </div>
        </div>
      </div>


      <div className="flex items-center gap-4">
      
        <div className="relative w-82">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            placeholder="Search college / degree / exam"
            className="pl-10 pr-10 py-2  border border-gray-300 rounded-3xl outline-none  w-full"
          />
        </div>

        <button className="px-8 py-2 border-2 text-sm cursor-pointer font-semibold border-[#E6E8EC] rounded-3xl text-gray-700  transition">
          Login
        </button>
        <button className="px-6 py-2 rounded-3xl text-sm cursor-pointer bg-[#3B71FE] text-white hover:bg-blue-700 transition">
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Navbar;
