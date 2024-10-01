"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import logo from "@/../../public/logo.jpg";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen); // Toggles between true and false
  };

  return (
    <header className="bg-[#4a6480] text-white">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center space-x-8">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-3">
          <Image src={logo} alt="Logo" className="w-12 h-12" />
          <span className="text-2xl font-bold">STEEL MILL</span>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center w-full max-w-lg mx-auto space-x-2">
          <input
            type="text"
            placeholder="Enter your keywords..."
            className="px-4 py-2 w-full border rounded-l-md focus:outline-none text-gray-700"
          />
          <button className="bg-white text-[#4a6480] px-4 py-2 border rounded-r-md">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* Desktop Links (Register, Login, Cart) */}
        <div className="hidden lg:flex space-x-8 items-center">
          <Link href="#" className="hover:underline">
            REGISTER
          </Link>
          <Link href="#" className="hover:underline">
            LOG IN
          </Link>
          <Link href="#" className="hover:underline flex items-center">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-1" />
            <span>Cart</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            {mobileMenuOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg> // Close Icon when menu is open
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg> // Hamburger Icon when menu is closed
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        } bg-[#4a6480]`}
      >
        {mobileMenuOpen && (
          <div className="flex flex-col items-start w-full px-4 space-y-2 py-4">
            <Link
              href="#"
              className="w-full text-left hover:bg-white hover:text-[#4a6480] p-2 rounded-lg"
            >
              REGISTER
            </Link>
            <Link
              href="#"
              className="w-full text-left hover:bg-white hover:text-[#4a6480] p-2 rounded-lg"
            >
              LOG IN
            </Link>
            <Link
              href="#"
              className="w-full text-left hover:bg-white hover:text-[#4a6480] p-2 rounded-lg flex items-center"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="mr-1" />
              <span>Cart</span>
            </Link>

            {/* Mobile Search Bar */}
            <div className="flex items-center w-full px-4">
              <input
                type="text"
                placeholder="Enter your keywords..."
                className="px-4 py-2 w-full border rounded-l-md focus:outline-none"
              />
              <button className="bg-white text-[#4a6480] px-4 py-2 rounded-r-md">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Secondary Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          {/* Main Links */}
          <ul className="flex text-gray-900 space-x-2 sm:space-x-3 md:space-x-6 font-semibold">
            {["Home", "Products", "Blog", "About", "Contact"].map((page) => (
              <li
                key={page}
                className={`relative group ${
                  activePage === page ? "text-[#4a6480]" : "text-[#4a6480]"
                }`}
              >
                <Link
                  href="#"
                  className="hover:bg-[#4a6480] hover:text-white p-1 sm:p-1.5 md:p-2 rounded-lg transition"
                  onClick={() => setActivePage(page)}
                >
                  {page}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Link href="#" className="relative">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="w-5 h-5 border-2 border-[#4a6480] p-1.5 rounded-full text-[#4a6480] hover:bg-[#4a6480] hover:text-white"
              />
            </Link>
            <Link href="#" className="relative">
              <FontAwesomeIcon
                icon={faTwitter}
                className="w-5 h-5 border-2 border-[#4a6480] p-1.5 rounded-full text-[#4a6480] hover:bg-[#4a6480] hover:text-white"
              />
            </Link>
            <Link href="#" className="relative">
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-5 h-5 border-2 border-[#4a6480] p-1.5 rounded-full text-[#4a6480] hover:bg-[#4a6480] hover:text-white"
              />
            </Link>
            <Link href="#" className="relative">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-5 h-5 border-2 border-[#4a6480] p-1.5 rounded-full text-[#4a6480] hover:bg-[#4a6480] hover:text-white"
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;