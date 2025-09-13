"use client";
import React, { useState } from "react";
import { collegeUpdates, SingleEntry, CombinedEntry } from "../../data";
import { FaArrowDownWideShort } from "react-icons/fa6";
import { LuFolderOpenDot } from "react-icons/lu";
import { PiSpeakerHighFill } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";

function Updates() {
  const [showAll, setShowAll] = useState(false);
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (idx: number) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const news = collegeUpdates.filter(
    (item): item is SingleEntry => "date" in item && "description" in item
  );
  const combined = collegeUpdates.find(
    (item): item is CombinedEntry => "announcements" in item
  );

  return (
    <div className="xl:ml-20 p-6 space-y-2 ">
   
      <div className="flex justify-between items-center p-2">
        <h2 className="text-sm font-semibold">Latest News</h2>
        <div className="text-gray-600 flex text-sm items-center gap-2">
          <div>Newest First</div>
          <FaArrowDownWideShort className="text-gray-600" size={18} />
        </div>
      </div>


      <div className="border-l-2 border-gray-200 relative ml-3 pl-3 pt-3">
        <div className="space-y-4">
          {(showAll ? news : news.slice(0, 3)).map((n, idx) => {
            const isExpanded = expanded[idx] || false;
            return (
              <div key={idx} className="pb-2">
                <div className="flex gap-2">
                  <div className="absolute left-[-10px] bg-blue-100 rounded-full p-1 text-blue-400">
                    <LuFolderOpenDot />
                  </div>
                  <h3 className="text-sm font-semibold ml-2">{n.heading}</h3>
                </div>

                <p className="text-sm text-gray-500 ml-2">{n.date}</p>

               
                <p
                  className={`text-gray-700 mt-1 ml-2 text-sm ${
                    isExpanded ? "" : "line-clamp-2"
                  }`}
                >
                  {n.description}
                </p>

              
                {n.description.length > 80 && (
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="ml-2 mt-1 text-blue-500 text-xs cursor-pointer"
                  >
                    {isExpanded ? "Read Less..." : "Read More..."}
                  </button>
                )}
              </div>
            );
          })}
        </div>

    
        {combined && (
          <div className="p-4 space-y-4">
            <div className="flex gap-2">
              <div className="absolute left-[-10px] bg-blue-100 rounded-full p-1 text-blue-400">
                <PiSpeakerHighFill />
              </div>
              <h3 className="text-sm font-semibold">Announcement</h3>
            </div>
            <div className="border-2 border-gray-200 rounded-xl ml-[-50px] bg-[#ffffff] p-4">
              {(showAll
                ? combined.announcements
                : combined.announcements.slice(0, 2)
              ).map((a, idx) => (
                <div key={idx} className="pb-2">
                  <h4 className="font-semibold text-sm">{a.heading}</h4>
                  <p className="text-sm text-gray-500">{a.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>


      <div className="flex gap-2">
        <div className="text-gray-400 bg-gray-100 rounded-lg px-2 flex items-center">
          <BsThreeDots />
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm rounded-lg font-medium text-blue-500 transition cursor-pointer"
        >
          {showAll ? "Show Less" : "View All Updates"}
        </button>
      </div>
    </div>
  );
}

export default Updates;
