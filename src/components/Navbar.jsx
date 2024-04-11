import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdMoon } from "react-icons/io";
import { LuSunMedium } from "react-icons/lu";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, SetNav] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const isDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const location = useLocation();

  const pathName = location.pathname;
  console.log(typeof pathName);
  const links = [
    {
      id: 1,
      link: "home",
      to: "/",
    },
    {
      id: 2,
      link: "About",
      to: "/about",
    },
    {
      id: 3,
      link: "projects",
      to: "/projects",
    },
    {
      id: 4,
      link: "Skills",
      to: "/skills",
    },
    {
      id: 5,
      link: "contact",
      to: "/contact",
    },
  ];
  return (
    <div className="flex justify-between  w-full  py-3 fixed text-white bg-black px-4">
      <div>
        <h1 className="text-4xl font-signature ml-2">Yash</h1>
      </div>
      <div>
        <ul className="hidden md:flex">
          {links.map(({ id, link, to }) => (
            <li
              key={id}
              className={`relative font-medium px-4 text-gray-500 cursor-pointer capitalize hover:text-white duration-200`}
            >
              <Link to={to}>
                {link}
                <span
                  className={`absolute inline-block left-5 -bottom-1  h-[1.8px] w-[45%]  transition-all duration-500 ease-in-out 
                  ${to === pathName && " bg-black dark:bg-white "}`}
                ></span>
              </Link>
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
            {links.map(({ id, link, to }) => (
              <li
                key={id}
                className="font-medium py-6 text-gray-500 cursor-pointer capitalize hover:text-white duration-200"
              >
                <Link to={to}>{link}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <button
          onClick={() => {
            isDarkMode();
          }}
        >
          {darkMode ? (
            <IoMdMoon className="text-black-shade dark:text-white-light  mx-3 text-3xl  block cursor-pointer hover:bg-white-trans" />
          ) : (
            <LuSunMedium className="text-black-shade dark:text-white-light mx-3 text-3xl  block cursor-pointer hover:bg-grey-shade" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
