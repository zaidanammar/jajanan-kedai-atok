import React, { useState } from "react";
import { logo } from "../../../assets";
import Image from "next/image";
import { Turn as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="relative z-30 flex flex-wrap items-center justify-between mt-1 w-full md:h-20 sm:h-16 h-12 ">
      <div className="w-full flex items-center justify-between">
        <div className="justify-between w-1/3 xl:inline-flex hidden px-6 md:px-12 xl:px-16">
          <Image
            src={logo}
            className="cursor-pointer"
            alt="menu"
            width={50}
            height={50}
            layout="fixed"
          />
        </div>

        <div className="items-center mx-auto w-2/3 justify-center xl:inline-flex hidden">
          <ul className="flex justify-evenly w-full text-white cursor-pointer">
            <li>
              <h1 className="text-softPink md:text-xl text-base text-center hover:text-yellow-400">
                Home
              </h1>
            </li>
            <li>
              <h1 className="text-softPink md:text-xl text-base text-center hover:text-yellow-400">
                Menu
              </h1>
            </li>
            <li>
              <h1 className="text-softPink md:text-xl text-base text-center hover:text-yellow-400">
                Profile
              </h1>
            </li>
            <li>
              <h1 className="text-softPink md:text-xl text-base text-center hover:text-yellow-400">
                About Us
              </h1>
            </li>
            <li>
              <h1 className="text-softPink md:text-xl text-base text-center hover:text-yellow-400">
                Contact
              </h1>
            </li>
          </ul>
        </div>

        <div
          className={
            "xl:hidden flex flex-col w-full items-end -mt-10 pt-10 " +
            (isOpen ? "transition ease-in-out duration-700 bg-opacity-30 bg-red-500" : "bg-transparent")
          }
        >
          <div className="px-2 sm:px-4 md:px-6">
            <Hamburger toggled={isOpen} toggle={setOpen} color={"white"} />
          </div>
          {/* {isOpen && ( */}
          <div
            className={
              "w-full absolute mt-12 ease-in-out transform duration-700 transition px-2 sm:px-4 md:px-6 pb-4 shadow-lg bg-opacity-30 bg-red-500 " +
              (!isOpen && "-translate-y-96")
            }
          >
            <ul className="w-full text-white cursor-pointer flex flex-col items-start px-6">
              <li className="my-1">
                <h1 className="text-softPink md:text-xl text-base text-center hover:text-yellow-400">
                  Home
                </h1>
              </li>
              <li className="my-1">
                <h1 className="text-softPink md:text-xl text-base text-center hover:text-yellow-400">
                  Menu
                </h1>
              </li>
              <li className="my-1">
                <h1 className="text-softPink md:text-xl text-base text-center hover:text-yellow-400">
                  Profile
                </h1>
              </li>
              <li className="my-1">
                <h1 className="text-softPink md:text-xl text-base text-center hover:text-yellow-400">
                  About Us
                </h1>
              </li>
              <li className="my-1">
                <h1 className="text-softPink md:text-xl text-base text-center hover:text-yellow-400">
                  Contact
                </h1>
              </li>
            </ul>
          </div>
          {/* )} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
