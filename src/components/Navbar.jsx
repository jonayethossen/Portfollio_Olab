import { useState } from "react";
import { Link, NavLink } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";
import Container from "./Container"; // আপনার প্রোজেক্টের Container কম্পোনেন্ট
import logo from "../assets/logo.jpg";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // রাউটিং পাথ (Path) অনুযায়ী লিংকগুলো সাজানো হয়েছে
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Service", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#f9f9f9] border-b border-gray-200/50 sticky top-0 z-50 py-4 md:py-6">
      <Container>
        {/* মেইন ফ্লেক্স কন্টেইনার */}
        <div className="flex items-center justify-between md:grid md:grid-cols-3 px-4 md:px-0 w-full">
          {/* ১. লোগো সেকশন - বাম পাশে থাকবে */}
          <div className="text-2xl font-semibold text-gray-900 tracking-tight flex justify-start">
            <Link to="/">
              <img src={logo} alt="logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* ২. ডেক্সটপ নেভিগেশন লিংকসমূহ - একদম সেন্টারে থাকবে */}
          <ul className="hidden md:flex items-center justify-center gap-8 lg:gap-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-medium transition-colors duration-200 text-base ${
                      isActive
                        ? "text-blue-600 font-semibold" // একটিভ পেজের কালার ব্লু হবে
                        : "text-gray-700 hover:text-blue-600"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ৩. ডান পাশের ফাঁকা অংশ - ডেক্সটপে ডান দিক খালি রাখার জন্য গ্রিডের শেষ কলাম স্পেসার হিসেবে কাজ করবে */}
          <div className="hidden md:block"></div>

          {/* মোবাইল মেনু বাটন (Hamburger Icon) - মোবাইলে এটি ডান পাশে দেখাবে */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-1 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* মোবাইল ড্রপডাউন মেনু */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)} // লিংকে ক্লিক করলে মোবাইল মেনু বন্ধ হয়ে যাবে
                  className={({ isActive }) =>
                    `font-medium block text-sm transition-colors py-1 ${
                      isActive
                        ? "text-blue-600 font-semibold"
                        : "text-gray-600 hover:text-blue-600"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
}
