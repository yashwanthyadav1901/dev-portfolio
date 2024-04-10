import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, SetNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 fixed text-white bg-black px-4">
      <div>
        <h1 className="text-4xl font-signature ml-2">Yash</h1>
      </div>
      <div>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="font-medium px-4 text-gray-500 cursor-pointer capitalize hover:text-white duration-200"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={() => {
          SetNav(!nav);
        }}
        className="cursor-pointer text-white duration-200 pr-4 z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        {nav && (
          <ul className="flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="font-medium py-6 text-gray-500 cursor-pointer capitalize hover:text-white duration-200"
              >
                {link}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
