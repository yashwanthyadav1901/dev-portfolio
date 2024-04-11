import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/yashwanth-doddamoni-183a772a7/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithubSquare size={30} />
        </>
      ),
      href: "https://github.com/yashwanthyadav1901",
    },
    {
      id: 3,
      child: (
        <>
          Email <MdEmail size={30} />
        </>
      ),
      href: "mailto:yashwanthyadav481@gmail.com",
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex w-40 h-14 bg-gray-400  items-center ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 " +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex w-full px-5 justify-between items-center"
              target="_blank"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
