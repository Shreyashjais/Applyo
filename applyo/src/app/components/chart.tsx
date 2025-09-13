"use client";
import Image from "next/image";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  // Tooltip,
  ResponsiveContainer,
  
} from "recharts";

const data = [
  { year: 2020, highest: 0.8, avg: 7, median: 10 },
  { year: 2021, highest: 0.9, avg: 7.5, median: 10.5 },
  { year: 2022, highest: 1.0, avg: 8, median: 10.8 },
  { year: 2023, highest: 1.05, avg: 8.5, median: 10.9 },
  { year: 2024, highest: 1.08, avg: 8.8, median: 11 },
  { year: 2025, highest: 1.1, avg: 9, median: 11 },
];

const TOOLTIP_CONFIG: Record<
  string,
  { label: string; color: string }
> = {
  highest: { label: "Highest - CTC", color: "#5B21B6" },
  avg: { label: "Average - CTC", color: "#5B21B6" },
  median: { label: "Median - CTC", color: "#5B21B6" },
};

// Define the types for payload entry
interface PayloadEntry {
  dataKey: keyof typeof TOOLTIP_CONFIG; // Ensure the key matches one of the keys in TOOLTIP_CONFIG
  value: number | string; // Assuming value is a number or string representing CTC
}

interface CustomTooltipProps {
  active: boolean;
  payload: PayloadEntry[]; // payload should be an array of PayloadEntry objects
  label: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border p-2 rounded shadow-lg text-sm">
        <p className="font-semibold">{label}</p>
        {payload.map((entry) => (
          <p key={entry.dataKey} style={{ color: TOOLTIP_CONFIG[entry.dataKey].color }}>
            {TOOLTIP_CONFIG[entry.dataKey].label}: {entry.value} LPA
          </p>
        ))}
      </div>
    );
  }
  return null;
};





function PlacementChart() {
  return (
    <div className="h-80 w-full ">
    {/* // <div className=" w-120 max-xl:w-100 xl:w-120 h-80 "> */}
      <ResponsiveContainer >
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          content={CustomTooltip}
          <Line
            type="monotone"
            dataKey="highest"
            stroke="#5B21B6"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="avg"
            stroke="#9D7EDB"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="median"
            stroke="#C4B5FD"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>

    
      <div className="flex  justify-between mt-4 gap-2 px-4 ">
  {[
    { src: "/assets/pwc.svg", alt: "pwc" },
    { src: "/assets/kpmg.png", alt: "kpmg" },
    { src: "/assets/microsoft.jpg", alt: "microsoft" },
    { src: "/assets/adobe.png", alt: "adobe" },
    { src: "/assets/goldman.png", alt: "goldman" },
    { src: "/assets/itc.png", alt: "itc" },
  ].map((img) => (
    <div
      key={img.alt}
      className="relative w-20 h-10 overflow-hidden flex items-center justify-center"
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-contain"
      />
    </div>
  ))}
      </div>


    </div>
  );
}

export default PlacementChart;
