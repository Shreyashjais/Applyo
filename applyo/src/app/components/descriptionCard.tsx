import React from "react";
import PlacementChart from "./chart";
import { FaRegBookmark } from "react-icons/fa";

function DescriptionCard() {
  return (
    <div className="grid grid-cols-3 p-4 mx-24 ">
      <div className="flex flex-col items-center gap-4 border-2 border-gray-100 rounded-lg p-5  w-full">
        <div className="flex flex-col gap-3">
        <div className="flex items-center gap-6">
          <button className="px-18 py-2 rounded-3xl text-sm cursor-pointer bg-[#3B71FE] text-white hover:bg-blue-700 transition">
            Complete Application-27%
          </button>
          <FaRegBookmark
            size={40}
            className="border border-[#E6E8EC] rounded-full p-2 text-gray-400 cursor-pointer hover:bg-gray-100"
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
       
       

      
        <div className="w-full  h-94 flex justify-center ">
          <PlacementChart />
        </div>
      </div>
    </div>
  );
}

export default DescriptionCard;
