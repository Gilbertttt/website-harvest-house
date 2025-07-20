import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      href: "Home",
    },
    {
      name: "About",
      href: "About",
    },
    {
      name: "Activities",
      href: "Activities",
    },
    {
      name: "Events",
      href: "Events",
    },
  ];
  return (
    <div>
      <nav className="w-full py-4 px-5 top-0 text-black flex justify-around items-center inset-0 z-10">
        <div>
          <div className="flex items-center justify-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
              <span className="ml-3 text-xl font-bold">Harvest House</span>
            </div>
        </div>
        <ul className="hidden md:visible md:flex md:gap-8 cursor-pointer">
          {navLinks.map((item) => (
            <div key={item.href}
            className="">
              <li className="hover:text-[#199A58]" >
                <a href={item.href}>{item.name}</a>
              </li>
            </div>
          ))}
        </ul>
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" md:hidden hover:text-[#199A58] p-2 cursor-pointer"
          >
            <GiHamburgerMenu />
          </button>
        </div>

        <div>
          <button className="bg-[#199A58] py-2 px-4 rounded-full text-white   hidden md:inline-block">
            Sign Up
          </button>
        </div>
        {/* Mobile Responsiveness */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 text-center text-black">
            <div>
                <button
                onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl z-50">
              <MdCancel className="text-[#199A58] cursor-pointer"/>
                </button>
            </div>
            <ul className="flex flex-col">
                {navLinks.map((item) => (
                  <div key={item.key} 
                  className="">
              <li className="hover:bg-[#199A58] rounded-lg transition duration-100 ease-in-out hover:text-white cursor-pointer p-3">
                <a href={item.href}>{item.name}</a>
              </li>
            </div>
                ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
