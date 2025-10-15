"use client";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/favicon.ico";

export default function Footer() {
  return (
    <footer className="bg-[#1c1818] w-full mt-10 text-gray-300">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-700 pb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-500">
            Where to Buy
          </h2>
          <Link href="/contact-us">
            <button className="mt-4 cursor-pointer md:mt-0 border border-white px-5 py-2 text-white hover:bg-yellow-500 hover:text-black transition">
              STORE LOCATOR
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-2  md:grid-cols-4 gap-8 py-10">
          <div>
            <h3 className="text-yellow-500 font-semibold mb-3">Categories</h3>
            <ul className="space-y-2">
              <li>Dairy Blog Post</li>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-500 font-semibold mb-3">Our Products</h3>
            <ul className="space-y-2">
              <Link href="/our-products">
                <li>Bilona Ghee</li>
              </Link>
              <Link href="/our-products">
                <li>Cow Ghee</li>
              </Link>
              <Link href="/our-products">
                <li>Milk</li>
              </Link>
              <Link href="/our-products">
                <li>Chach</li>
              </Link>
              <Link href="/our-products">
                <li>Shrikhand</li>
              </Link>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-500 font-semibold mb-3">About us</h3>
            <ul className="space-y-2">
              <Link href="/about-us">
                <li>About Us</li>
              </Link>
              <Link href="/contact-us">
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-500 font-semibold mb-3">Pages</h3>
            <ul className="space-y-2">
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/our-products">
                <li>Our Products</li>
              </Link>
              <Link href="/about-us">
                <li>About Us</li>
              </Link>
              <Link href="/contact-us">
                <li>Contact Us</li>
              </Link>
              <Link href="/contact-us">
                <li>Distributor Inquiry</li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-t border-gray-700 pt-6">
          <div className="flex items-center space-x-4">
            <Image width={70} height={70} alt="logo" src={logo} />
            <div className="text-sm">
              <p>
                26,Phool Colony, Monu Goras Bhandar, Near Mahima Public School
                ,Sanganer , Jaipur, (302029) Rajasthan
              </p>
              <p>
                Phone:{" "}
                <span className="text-yellow-500">9252139481 , 9887700428</span>
              </p>
              <p>
                Email:{" "}
                <Link
                  target="_blank"
                  href="ravindrasinghrss2004@gmail.com"
                  className="text-yellow-500"
                >
                  ravindrasinghrss2004@gmail.com
                </Link>
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-500 text-black"
            >
              <FacebookOutlinedIcon />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-500 text-black"
            >
              <XIcon />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-500 text-black"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 text-sm border-t border-gray-700">
        Monu Goras Bhandar © 2025. All rights reserved.
      </div>
    </footer>
  );
}
