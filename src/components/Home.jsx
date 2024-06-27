import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b  from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg h-full mx-auto flex flex-col items-center justify-center h-full px-4 gap-14 pt-24 md:flex-row">
        <div className="w-96 object-fill">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto h-96  md:w-full"
          />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            Bringing Ideas to Life
          </h2>
          <p className="text-gray-500 py-4 max-w-lg">
            I'm a full-stack developer passionate about translating innovative
            concepts into dynamic web solutions. Specializing in ReactJS, I
            merge code with creativity to produce engaging and responsive
            websites. Explore my portfolio to witness how I combine ReactJS
            prowess with design finesse to transform ideas into digital
            realities.
          </p>

          <div>
            <Link
              to="/projects"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
