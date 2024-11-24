"use client";

import React, { useState } from "react";
import Link from "next/link";
import Menu from "@/assets/menu.svg.png";
import Close from "@/assets/close.png";
import Image from "next/image";

const menus = [
  { icon: "", label: "About Me", route: "about" },
  { icon: "", label: "Skills", route: "skills" },
  { icon: "", label: "Accomplishments", route: "accomplishments" },
  { icon: "", label: "Experiences", route: "experiences" },
  { icon: "", label: "Contact Me", route: "contact" },
];

function NavBarSection() {
  const [selectedMenu, setSelectedMenu] = useState<string>("About Me");
  const [closeMenu, setCloseMenu] = useState<boolean>(false);

  return (
    <>
      <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 rounded-full w-[80%] h-16 bg-white shadow-xl xs:hidden md:flex justify-between items-center font-bold p-5 z-10">
        <h1 className="text-xl">Karn's Portfolio</h1>
        <ul className="flex space-x-5">
          {menus.map((ele, idx) => (
            <li
              className={`rounded-2xl transition-all duration-500 translate-y-0 hover:bg-secondary hover:-translate-y-1 hover:text-black hover:rounded-3xl hover:shadow-lg px-4 py-3 ${
                selectedMenu === ele.label
                  ? "bg-black text-white rounded-3xl"
                  : "bg-white text-black"
              }`}
              key={idx}
            >
              <Link
                href={`#${ele.route}`}
                onClick={() => setSelectedMenu(ele.label)}
              >
                {ele.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 rounded-full w-[90%] h-16 bg-white shadow-xl md:hidden flex justify-between items-center font-bold p-5 z-10">
        <h1 className="text-xl">Karn's Portfolio</h1>
        <div className="cursor-pointer">
          <Image
            src={Menu}
            alt="menu"
            width={25}
            height={25}
            quality={100}
            onClick={() => setCloseMenu(true)}
          />
        </div>
      </nav>
      <div
        className={`divide-y-2 divide-secondary fixed top-0 left-1/2 transform -translate-x-1/2 w-full h-screen bg-black shadow-xl md:hidden flex flex-col justify-start items-center font-bold p-5 z-20 transition-transform duration-500 ${
          closeMenu ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-[90%] flex justify-between items-center mt-5 mb-5">
          <h1 className="text-xl text-white">Karn's Portfolio</h1>
          <Image
            src={Close}
            alt="menu"
            width={20}
            height={20}
            quality={100}
            onClick={() => setCloseMenu(false)}
          />
        </div>
        <ul className="w-full">
          {menus.map((ele, idx) => (
            <li
              className={`rounded-2xl transition-all duration-500 translate-y-0 py-3 mt-10 pl-5 ${
                selectedMenu === ele.label
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
              key={idx}
            >
              <Link
                href={`#${ele.route}`}
                onClick={() => {
                  setSelectedMenu(ele.label);
                  setCloseMenu(false);
                }}
              >
                {ele.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NavBarSection;
