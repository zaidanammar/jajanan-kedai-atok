import React, { useState } from "react";
import { logo } from "../../../assets";
import Image from "next/image";
import { Turn as Hamburger } from "hamburger-react";
import Link from "next/link";

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
              <Link href="/" passHref>
                <h1 className="text-softPink md:text-xl text-base text-center hover:text-yellow-400">
                  Home
                </h1>
              </Link>
            </li>
            <li>
              <Link href="#profile" passHref>
                <h1 className="text-softPink md:text-xl text-base text-center hover:text-yellow-400">
                  Profile
                </h1>
              </Link>
            </li>
            <li>
              <Link href="#menu" passHref>
                <h1 className="text-softPink md:text-xl text-base text-center hover:text-yellow-400">
                  Menu
                </h1>
              </Link>
            </li>
            <li>
              <Link href="#about" passHref>
                <h1 className="text-softPink md:text-xl text-base text-center hover:text-yellow-400">
                  About Us
                </h1>
              </Link>
            </li>
            <li>
              <Link href="#contanct" passHref>
                <h1 className="text-softPink md:text-xl text-base text-center hover:text-yellow-400">
                  Contact
                </h1>
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={
            "xl:hidden flex flex-col w-full items-end -mt-10 pt-10 " +
            (isOpen
              ? "transition ease-in-out duration-700 bg-opacity-30 bg-red-500"
              : "bg-transparent")
          }
        >
          <div className="px-2 sm:px-4 md:px-6">
            <Hamburger toggled={isOpen} toggle={setOpen} color={"white"} />
          </div>
          <div
            className={
              "w-full absolute mt-12 ease-in-out transform duration-700 transition px-2 sm:px-4 md:px-6 pb-4 shadow-lg bg-opacity-30 bg-red-500 " +
              (!isOpen && "-translate-y-96")
            }
          >
            <ul className="w-full text-white cursor-pointer flex flex-col items-start px-6">
              <li className="my-1" onClick={() => setOpen(false)}>
                <Link href="/" passHref>
                  <h1 className="text-softPink md:text-xl text-base text-center hover:text-yellow-400">
                    Home
                  </h1>
                </Link>
              </li>
              <li className="my-1" onClick={() => setOpen(false)}>
                <Link href="#profile" passHref>
                  <h1 className="text-softPink md:text-xl text-base text-center hover:text-yellow-400">
                    Profile
                  </h1>
                </Link>
              </li>
              <li className="my-1" onClick={() => setOpen(false)}>
                <Link href="#menu" passHref>
                  <h1 className="text-softPink md:text-xl text-base text-center hover:text-yellow-400">
                    Menu
                  </h1>
                </Link>
              </li>
              <li className="my-1" onClick={() => setOpen(false)}>
                <Link href="#about" passHref>
                  <h1 className="text-softPink md:text-xl text-base text-center hover:text-yellow-400">
                    About Us
                  </h1>
                </Link>
              </li>
              <li className="my-1" onClick={() => setOpen(false)}>
                <Link href="#contact" passHref>
                  <h1 className="text-softPink md:text-xl text-base text-center hover:text-yellow-400">
                    Contact
                  </h1>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
