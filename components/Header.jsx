"use client";

import { FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "About", path: "about" },
    { label: "Breads", path: "breads" },
    { label: "Menu", path: "menu" },
    { label: "Testimonials", path: "testimonials" },
    { label: "Contact", path: "contact" },
  ];

  return (
    <nav className="w-full flex bg-black justify-between items-center gap-1 lg:px-16 px-6 py-3 sticky top-0 z-50">
      <Image
        src="/logo.png"
        width={90}
        height={90}
        className="invert"
        alt="Logo"
      />
      <ul className="lg:flex justify-center items-center gap-6 hidden">
        {navItems.map(({ label, path }) => (
          <li key={path}>
            <Link
              smooth={true}
              to={path}
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-teal-700 hover:text-white transform hover:scale-105 transition"
              spy={true}
              offset={-100}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <button className="bg-teal-600 text-white rounded-full p-2 px-10 font-bold transform hover:scale-105 transition-transform cursor-pointer duration-300 uppercase">
        Order Now
      </button>

      {/* Menu for mobile devices */}
      <div
        className="flex justify-center items-center lg:hidden mt-3"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <FaXmark className="text-white text-3xl cursor-pointer" />
        ) : (
          <FaBars className="text-white text-3xl cursor-pointer" />
        )}
      </div>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col w-full h-fit bg-black p-4 absolute top-[80px] left-0`}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ label, path }) => (
            <Link
              smooth={true}
              key={path}
              to={path}
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-teal-700 hover:text-white w-full text-center transform hover:scale-105 transition"
              spy={true}
              offset={-100}
            >
              {label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
