"use client";
import React, { useState } from "react";
import PlacementChart from "./chart";
import { FaRegBookmark } from "react-icons/fa";
import DescriptionData from "./descriptionData";
import Updates from "./news";
import FAQ from "./faq";
import { AiOutlineDownload, AiOutlineLoading3Quarters } from "react-icons/ai";
import { LuBell } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";

interface DescriptionCardProps {
  isMenuUp: boolean; // receive the menu state from Home
}

const tabs = ["Overview", "Placements", "Courses", "Contact"];

const DescriptionCard: React.FC<DescriptionCardProps> = ({ isMenuUp }) => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="lg:mx-24">

      {/* Hide this sticky section when side menu is open */}
      {!isMenuUp && (
        <div className="lg:hidden sticky top-0 z-50 flex justify-between bg-white px-3 py-2 ">
          <div className="flex gap-2">
            <button className="px-6 py-2 rounded-3xl text-sm cursor-pointer bg-[#3B71FE] text-white hover:bg-blue-700 transition">
              Continue application
            </button>
            <LuBell
              size={32}
              className="border border-gray-400 rounded-full p-2 font-medium text-gray-400 cursor-pointer hover:bg-gray-100"
            />
          </div>
          <div>
            <div className="gap-2 flex items-center">
              <IoShareSocialOutline
                size={32}
                className="border border-gray-400 rounded-full p-2 font-medium text-gray-400 cursor-pointer hover:bg-gray-100"
              />
              <AiOutlineDownload
                size={32}
                className="border border-gray-400 rounded-full p-2 font-medium text-gray-400 cursor-pointer hover:bg-gray-100"
              />
              <FaRegBookmark
                size={32}
                className="border border-gray-400 rounded-full p-2 font-medium text-gray-400 cursor-pointer hover:bg-gray-100"
              />
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-2 lg:gap-4 border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 cursor-pointer transition 
              ${activeTab === tab
                ? "border-orange-500 border-b-2 text-gray-700 font-semibold"
                : " text-gray-600 hover:text-orange-500"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Rest of your content stays unchanged */}
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 xl:grid-cols-6 p-4">
          <div className="xl:col-span-2">
            <div className="sticky top-20 flex flex-col items-center gap-4 border-2 border-gray-100 rounded-lg p-5 w-full">
              {/* Left column content remains the same */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-6 md:gap-3 max-lg:gap-3 lg:gap-6">
                  <button className="px-10 lg:px-15 py-2 flex gap-3 items-center rounded-3xl text-sm cursor-pointer bg-[#3B71FE] text-white hover:bg-blue-700 transition">
                    Complete Application-27% <AiOutlineLoading3Quarters />
                  </button>
                  <FaRegBookmark
                    size={40}
                    className="border border-[#E6E8EC] rounded-full p-2 h-full text-gray-400 cursor-pointer hover:bg-gray-100"
                  />
                </div>

                <div className="flex items-center gap-6 px-4 py-2 rounded-xl">
                  <span className="text-gray-600 font-medium">Your Chances</span>
                  <button className="px-4 border-2 text-sm font-medium border-[#E6E8EC] rounded-3xl text-gray-700 hover:bg-gray-50 transition">
                    Predict Chances of Shortlisting
                  </button>
                </div>

                <div className="flex items-center gap-6 px-4 py-2 rounded-xl">
                  <div className="text-gray-500">NIRF Ranking</div>
                  <div className="font-medium">#7</div>
                </div>

                <div className="flex items-center gap-6 px-4 py-2 rounded-xl">
                  <div className="text-gray-500">Available Courses</div>
                  <div className="font-medium">PGDM, PGMP, GMP, +2 more</div>
                </div>

                <div className="flex items-center gap-6 px-4 py-2 rounded-xl">
                  <div className="text-gray-500">Placement</div>
                  <div className="font-medium">600+</div>
                </div>
              </div>

              <div className="w-full h-94 flex justify-center">
                <PlacementChart />
              </div>
            </div>
          </div>

          <div className="xl:col-span-4">
            <DescriptionData />
            <Updates />
            <FAQ />
          </div>
        </div>

        <div className="w-full h-full flex flex-row justify-between items-center px-3 xl:px-6 border-2 border-gray-200 rounded-xl bg-white">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-sm xl:text-lg font-semibold text-gray-800">
              All you need to know about the college — just one click away!
            </h3>
          </div>

          <div className="flex relative flex-col items-center h-30 w-60 xl:w-90">
            <button className="px-4 xl:px-8 absolute right-10 xl:right-15 top-10 flex z-100 py-2 border-2 text-sm cursor-pointer bg-[#ffffff] font-semibold border-[#E6E8EC] rounded-3xl text-gray-700 hover:bg-gray-100 transition">
              <div>Download </div>
              <div className="hidden lg:flex">Brochure</div>
            </button>

            <div className="w-full h-full flex">
              <div className="w-1/2 h-full bg-[url('/assets/patternLeft.png')] bg-cover bg-center"></div>
              <div className="w-1/2 h-full bg-[url('/assets/patternRight.png')] bg-cover bg-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
