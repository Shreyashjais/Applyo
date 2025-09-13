"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex justify-between items-center px-6 py-4 border border-gray-300 bg-[#FFFFFF]">
        <div className="flex items-center lg:ml-12 ">
          <Image src="/assets/logo.png" alt="Applyo" width={80} height={50} />
          <div className="hidden xl:flex gap-4 text-[#182230] lg:ml-8 font-medium">
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
          <div className="hidden lg:flex relative w-80">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              placeholder="Search college / degree / exam"
              className="pl-10 pr-10 py-2 border border-gray-300 rounded-3xl outline-none w-full"
            />
          </div>

          <button className="hidden md:block px-8 py-2 border-2 text-sm cursor-pointer font-semibold border-[#E6E8EC] rounded-3xl text-gray-700 transition">
            Login
          </button>

          <button className="px-6 py-2 rounded-3xl text-sm cursor-pointer bg-[#3B71FE] text-white hover:bg-blue-700 transition">
            Create Account
          </button>

          <div
            className="block lg:hidden text-3xl text-gray-700 cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          >
            <IoReorderThreeOutline />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-40 "
            onClick={() => setIsMenuOpen(false)}
          ></div>

          <div className="fixed top-0 left-0 w-80 h-full bg-white z-50 shadow-md gap-6 transform transition-transform duration-300">
            <div className="gap-4 flex flex-col border-b-2 pb-4 border-gray-200">
              <div className="flex justify-between p-6">
                {" "}
                <Image
                  src="/assets/logo.png"
                  alt="Applyo"
                  width={80}
                  height={50}
                />{" "}
                <button onClick={() => setIsMenuOpen(false)}>
                  <RxCross1 className="text-gray-500 cursor-pointer" />
                </button>
              </div>
              {["Home", "Dashboard", "Colleges", "Quiz"].map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer px-6 py-2 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-col mt-6 mx-3 gap-3">
              <button
                className="px-6 py-2 mt-auto rounded-lg text-sm cursor-pointer bg-[#3B71FE] text-white hover:bg-blue-700 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Create Account
              </button>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="
             px-8 py-2 border-2 text-sm cursor-pointer font-semibold border-[#E6E8EC] rounded-lg text-gray-700 transition"
              >
                Login
              </button>
            </div>
            <div className="flex absolute border-t-2 w-full border-gray-200  bottom-0 pt-3 flex-col justify-center items-center">
              <div className="flex justify-center items-center gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-gray-700 text-gray-400">
                  <FaLinkedinIn  size={20} />
                </a>
                <a href="#" className=" text-gray-400 hover:text-gray-700">
                  <FaInstagram   size={20}/>
                </a>
                <a href="#" className=" text-gray-400 hover:text-gray-700">
                  <FaFacebookF  size={20} />
                </a>
                <a href="#" className=" text-gray-400 hover:text-gray-700">
                  {" "}
                  <FaTwitter size={20} />
                </a>
                <a href="#" className= " text-gray-400 hover:text-gray-700">
                  {" "}
                  <FaGithub  size={20}/>
                </a>
              </div>

              <div className="text-gray-400 text-lg mt-2">All rights reserved.</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
