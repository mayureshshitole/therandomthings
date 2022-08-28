import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsappSquare } from "react-icons/fa";
import Image from "next/image";
const Navbar = () => {
  let links = [
    { id: "0", name: "Home", link: "/" },
    { id: "2", name: "Advice", link: "/Advice" },
    { id: "3", name: "Facts", link: "/Uselessfacts" },
    { id: "4", name: "Excuses", link: "/Excuses" },
    { id: "5", name: "Word", link: "/Word" },
    { id: "1", name: "Jokes", link: "/Jokes" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="shadow-md w-full sticky top-0 left-0 z-10">
        <div className="md:flex items-center justify-between bg-gray-100 py-4 px-7 md:px-10">
          <Link passHref href={"/"}>
            <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
              <span className="px-2 transform hover:scale-125 transition-all delay-500 ease-in-out">
                <Image
                  src={"/logo.png"}
                  width={50}
                  height={50}
                  layout="intrinsic"
                  alt="Logo image for Random Things website"
                />
              </span>{" "}
              <span className="hidden md:inline-block">Random Things</span>
            </div>
          </Link>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {!open ? (
              <svg
                className="w-6 h-6 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
          <ul
            className={`md:flex md:items-center bg-gray-100 md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${
              open
                ? "top-16 opacity-100 "
                : "top-[-490px] opacity-0 md:opacity-100"
            }`}
          >
            {links.map((links) => (
              <Link passHref href={links.link} key={links.id}>
                <li
                  onClick={() => setOpen(!open)}
                  key={links.name}
                  className="md:ml-8 md:my-0 my-7 text-xl  font-semibold capitalize hover:text-indigo-500 transition duration-300 ease-in-out"
                >
                  {links.name}
                </li>
              </Link>
            ))}
            <div className="w-20"></div>
            <a href="https://www.buymeacoffee.com/mayuresh" target="blank">
              <div className="flex justify-center items-center cursor-pointer">
                <Image
                  src={"/bmc-button.svg"}
                  width={130}
                  height={50}
                  layout="intrinsic"
                  alt="buy me coffee page link of Mayuresh Shitole"
                />
              </div>
            </a>
          </ul>
        </div>
      </div>{" "}
    </>
  );
};

export default Navbar;
