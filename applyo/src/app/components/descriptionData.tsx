"use client";
import React, { useState } from "react";
import { Tags } from "./mainCard";

const collegeData = {
  heading: "Description",
  description:
    "SP Jain Institute of Management and Research, founded in 1981, is a premier B-school situated on a sprawling 45-acre campus in Andheri (Mumbai). Renowned for its rigorous PGDM & PGPM programs, SPJIMR delivers excellent career outcomes, boasting an impressive average placement of ₹22.9 LPA. Students enjoy vibrant campus life, modern hostels, extensive sports facilities, and strong industry connections with recruiters like Bain & Co, BCG, and Amazon.SP Jain Institute of Management and Research, founded in 1981, is a premier B-school situated on a sprawling 45-acre campus in Andheri (Mumbai). Renowned for its rigorous PGDM & PGPM programs, SPJIMR delivers excellent career outcomes, boasting an impressive average placement of ₹22.9 LPA. Students enjoy vibrant campus life, modern hostels, extensive sports facilities, and strong industry connections with recruiters like Bain & Co, BCG, and Amazon.",
};

const tags= [
  "Hostel Available",
  "Private Institution",
  "NBA Accredited",
  "AICTE Approved",
  "Sports Facilities",
  "Industry Tie-ups",
  "Modern Library",
  "Placement Assistance"
]

const accredations= [
  "AICTE Approved",
  "NBA Accredited",
  "AACSB Accredited",
  "AMBA Accredited",
  "AIU Member",
  "EFMD EQUIS Accredited",
  "UGC Recognized",
  "NIRF Ranked"
]


function DescriptionData() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="max-w-3xl lg:mx-20 p-4">
      <h2 className="text-md font-medium mb-3">{collegeData.heading}</h2>

      <p
        className={`text-gray-700 text-sm leading-relaxed transition-all duration-300 ${
          expanded ? "" : "line-clamp-5"
        }`}
      >
        {collegeData.description}
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 text-gray-400 text-sm font-medium border-b-2 border-gray-300 cursor-pointer"
      >
        {expanded ? "Show Less" : "Show More"}
      </button>

      <div className=" flex flex-col mt-4">
        <div className="text-md font-medium mb-2">Tags</div>
        <Tags tags= {tags}/>
      </div>

      <div className=" flex flex-col mt-4">
        <div className="text-md font-medium mb-2">Accredations</div>
        <Tags tags= {accredations}/>
      </div>
      <div>

      </div>
    </div>
  );
}

export default DescriptionData;
