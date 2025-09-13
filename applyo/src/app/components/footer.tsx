"use client";
import Image from "next/image";
import React from "react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white border-t-2 border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src="/assets/logo.png" alt="Applyo" width={80} height={50} />
          </div>

          <div className="col-span-2 grid grid-cols-2" >
            <div>
              <h3 className="font-semibold mb-4">Applyq</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <a href="#">Homepage</a>
                </li>
                <li>
                  <a href="#">College</a>
                </li>
                <li>
                  <a href="#">How It Works?</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>

            <div >
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">T&C</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#">Top MBA Colleges</a>
              </li>
              <li>
                <a href="#">Top MBA Colleges in Maharashtra</a>
              </li>
              <li>
                <a href="#">Top MBA Colleges in Delhi/NCR</a>
              </li>
              <li>
                <a href="#">Top MBA Colleges accepting CAT</a>
              </li>
              <li>
                <a href="#">Best Private MBA Colleges in India</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-10 px-18 bg-gray-200 w-full  flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2025 Applyq. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-700">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-gray-700">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-700">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
