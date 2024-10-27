import React from "react";
import Kamal from "../assets/kamal.png";
import Tool from "../static/tools";
import Project from "../static/project";
import Timeline from "../static/timeline";
import RightArrow from "../assets/icons/rightarrow.svg";

const Landing = () => {
  return (
    <div>
      <div className="w-full h-28"></div>
      <div className="flex justify-center items-center h-96 ">
        <div className="flex lg:flex-row-reverse flex-col">
          <img src={Kamal} alt="Kamal" className="h-[20rem]" />
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-white">Hi im Kamal</h1>
            <h1 className="text-3xl font-bold text-white">
              a Software Developer
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-20 bg-gradient-to-t from-gray-900 to-[#131313]">
        <div className="lg:w-[70vw] w-[90vw] flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-white">Tools that I use</h1>
          <div className="flex justify-evenly mt-3 flex-wrap">
            {Tool.map((tool) => (
              <div className="flex flex-col items-center m-2">
                <img
                  src={tool.photo}
                  alt={tool.name}
                  className="h-16 w-16 rounded-full bg-white"
                  key={tool.name}
                />
                <h1 className="text-white">{tool.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-10 bg-gray-900 lg:p-20">
        <div className="lg:w-[70vw] w-[90vw] mx-auto">
          <h1 className="text-3xl font-bold text-white mb-10">
            My Experiences
          </h1>
          <ol className="relative border-s bg-gray-900">
            {Timeline.map((item) => (
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-800 p-1 rounded-full -start-3 ring-4 ring-white">
                  <img src={item.icon} />
                </span>
                <h3 className="mb-1 text-lg font-semibold text-white">
                  {item.name}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {item.time}
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {item.position}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex justify-center items-center p-10 lg:py-20 bg-gradient-to-t from-[#131313] to-gray-900">
        <div className="lg:w-[70vw] w-[90vw] flex flex-col justify-center">
          <div className="flex flex-col p-2">
            <h1 className="text-3xl font-bold text-white">
              Projects I worked on
            </h1>
            <button
              className="flex flex-row justify-between mt-4 text-sm bg-gray-700 p-2 rounded-lg mr-auto hover:scale-105 transform transition-transform"
              onClick={() => (window.location.href = "/projects")}
            >
              <p className="text-gray-300">See All</p>
              <img
                src={RightArrow}
                alt="Right Arrow"
                className="h-4 w-4 my-auto bg-gray-500 rounded-full ml-2"
              />
            </button>
          </div>
          <div className="flex flex-wrap justify-center md:justify-normal">
            {Project.slice(0, 3).map((project) => (
              <div
                className="flex flex-col bg-gray-800 p-5 rounded-lg mt-3 w-[20rem] h-[24rem] mx-2 hover:scale-105 transform transition-transform hover:cursor-pointer"
                onClick={() =>
                  (window.location.href = "/projects/" + project.name)
                }
              >
                <div className="flex rounded-xl">
                  <img
                    src={project.photos[0]}
                    alt={project.name}
                    className="rounded-xl h-[10rem] mx-auto my-auto"
                  />
                </div>
                <div className="flex flex-col ml-2 h-full">
                  <h1 className="text-2xl font-bold text-white">
                    {project.name}
                  </h1>
                  <h1 className="text-white">{project.description}</h1>
                  <div className="flex flex-wrap mt-auto">
                    {project.tools.map((tool) => (
                      <img
                        src={tool.photo}
                        alt={tool.name}
                        className="h-8 w-8 rounded-full bg-white m-1"
                        key={tool.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
