"use client";
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  {
    question: "What programs does SPJIMR offer?",
    answer:
      "SPJIMR offers PGDM, PGPM, GMP, and several executive education programs, along with specialized courses in finance, marketing, and operations.",
  },
  {
    question: "Where is SPJIMR located?",
    answer:
      "The institute is located in Andheri West, Mumbai, on a 45-acre green campus with state-of-the-art infrastructure.",
  },
  {
    question: "What is the average placement package?",
    answer:
      "The average placement package for 2025 was ₹22.9 LPA, with top recruiters including Bain & Co, BCG, Amazon, and Deloitte.",
  },
  {
    question: "Does SPJIMR provide hostel facilities?",
    answer:
      "Yes, modern hostel facilities are available on campus for both male and female students.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" xl:mx-10 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold ">Frequently Asked Question(s)</h2>
        <div className="text-gray-600 text-sm">Your questions, answered!</div>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="  p-2 ">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="font-semibold text-sm  text-gray-800">
                {item.question}
              </span>
              {openIndex === index ? (
                <FiMinus
                  className="text-gray-400 border-2 border-gray-400 rounded-full cursor-pointer"
                  size={20}
                />
              ) : (
                <FiPlus
                  className="text-gray-400 border-2 border-gray-400 rounded-full  cursor-pointer"
                  size={20}
                />
              )}
            </button>

            {openIndex === index && (
              <p className="mt-3 text-gray-600 text-sm">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-blue-50 rounded-xl p-6 mt-6 shadow-sm">
  <div className="md:text-left mb-4 md:mb-0">
    <h3 className="text-lg font-semibold text-blue-500 mb-2">
      Still have questions?
    </h3>
    <p className="text-sm text-gray-600">
      Can&#39;t find what you&#39;re looking for? Let us help you.
    </p>
  </div>

  <button className="px-6 py-2 rounded-3xl text-sm font-medium cursor-pointer bg-[#3B71FE] text-white hover:bg-blue-700 transition">
    Get in touch
  </button>
</div>

    </div>
  );
}

export default FAQ;
