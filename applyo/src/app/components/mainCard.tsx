"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuBell, LuBellRing } from "react-icons/lu";

interface BreadcrumbProps {
  items: string[];
}

function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex flex-wrap items-center space-x-1 sm:space-x-2 text-xs sm:text-sm md:text-base mt-4">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} className="flex items-center">
            <span
              className={`${
                isLast
                  ? "text-black font-medium"
                  : "text-gray-500 hover:text-blue-600 transition"
              } truncate max-w-[100px] sm:max-w-none`}
            >
              {item}
            </span>
            {!isLast && (
              <span className="mx-1 sm:mx-2 text-gray-400">
                <IoIosArrowForward />
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
export function Tags({ tags }: { tags: string[] }) {
  const [showAll, setShowAll] = useState(false);

  const visibleTags = showAll ? tags : tags.slice(0, 3);
  const remainingCount = tags.length - 3;

  return (
    <div className="flex flex-wrap items-center  gap-2 ">
      {visibleTags.map((tag, index) => (
        <span
          key={index}
          className="border border-gray-300 text-gray-700 text-xs px-2 py-1 rounded-2xl"
        >
          {tag}
        </span>
      ))}

      {tags.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="border border-gray-400 text-gray-600 text-xs px-2 py-1 cursor-pointer rounded-2xl hover:bg-gray-100"
        >
          {showAll ? "Show less" : `+${remainingCount} more`}
        </button>
      )}
    </div>
  );
}

function MainCard() {
  const breadcrumbItems = [
    "Home",
    "Colleges",
    "S.P. Jain Institute of Management & Research",
  ];

  const college = {
    name: "S.P. Jain Institute of Management & Research",
    establishedYear: 1981,
    location: "Mumbai, Maharashtra",
    programsOffered: 15,
    type: "Private",
    landArea: "45 acres",
    tags: ["AACSB", "AMBA", "NAAC", "PGDM", "Global Programs"],
    images: [
      "/assets/image1.png",
      "/assets/image2.png",
      "/assets/image3.png",
      "/assets/image4.png",
    ],
  };

  const [clicked, setClicked] = useState(false);

  return (
    <div className="p-4 relative lg:mx-26">
      <Breadcrumb items={breadcrumbItems} />
      {/* Mobile Sticky Section */}



      <div className="mt-6  rounded-lg p-4  bg-white">
        <div className="flex justify-between">
          <h2 className="text-3xl font-semibold mb-2">{college.name}</h2>{" "}
          <div className="hidden lg:flex gap-3 items-center">
            <IoShareSocialOutline
              size={40}
              className="border border-gray-400 rounded-full p-2 text-gray-400  cursor-pointer hover:bg-gray-100"
            />
            <AiOutlineDownload
              size={40}
              className="border  border-gray-400 rounded-full p-2 text-gray-400  cursor-pointer hover:bg-gray-100"
            />
            <FaRegBookmark
              size={40}
              className="border  border-gray-400 rounded-full p-2 text-gray-400 cursor-pointer hover:bg-gray-100"
            />
          </div>
        </div>

        <p className="text-gray-600 text-sm font-semibold flex items-center gap-2">
          Est. {college.establishedYear}
          <span className="text-lg leading-none text-gray-300">•</span>
          {college.location}
        </p>

        <div className="text-gray-600 text-sm  flex items-center gap-2 flex-wrap mt-6">
          <div>{college.programsOffered}+ Programs Offered</div>
          <span className="text-lg leading-none text-gray-300">•</span>
          <div>{college.type} Institute</div>
          <span className="text-lg leading-none text-gray-300">•</span>
          <div>{college.landArea}</div>

          <Tags tags={college.tags} />
        </div>
        <div className="hidden lg:flex gap-3 mt-6">
          <button className="px-6 py-2 rounded-3xl text-sm cursor-pointer bg-[#3B71FE] text-white hover:bg-blue-700 transition">
            Continue application
          </button>
          {!clicked ? (
            <button
              onClick={() => setClicked(true)}
              className="px-3 py-2 border-2 text-sm flex items-center gap-2 cursor-pointer font-semibold border-[#E6E8EC] rounded-3xl text-gray-700 transition"
            >
              <LuBell className="text-gray-500" size={18} />
              Keep me notified
            </button>
          ) : (
            <button className="px-3 flex items-center gap-2 py-2 border-2 text-sm cursor-pointer font-semibold border-green-600 rounded-3xl text-green-600 transition">
              <LuBellRing size={18} />
              <p>We&apos;ll notify you</p>
            </button>
          )}
        </div>

        <div className="flex flex-col">
          <div className="flex gap-3 mt-4 overflow-x-auto w-full scrollbar-hide">
            {college.images.map((src, index) => (
              <div
                key={index}
                className={`relative flex-shrink-0 overflow-hidden rounded-lg 
        ${
          index === 0
            ? " h-35 lg:h-70 w-80 lg:w-170 aspect-video"
            : " h-35 lg:h-70 w-60"
        } 
      `}
              >
                <Image
                  src={src}
                  alt={`college-${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

   
      </div>
      <div>
     
      </div>
     
    </div>
  );
}

export default MainCard;
