import { useState, useEffect } from "react";
import Project from "../static/project";
import Tool from "../static/tools";

const Projects = () => {
  const [shownProjects, setShownProjects] = useState(Project);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedTool, setSelectedTool] = useState();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    if (selectedType === "All") {
      setShownProjects(Project);
    } else {
      setShownProjects(
        Project.filter((project) => project.type.includes(selectedType))
      );
    }
  }, [selectedType]);

  useEffect(() => {
    if (!selectedTool) {
      setShownProjects(Project);
    } else {
      setShownProjects(
        Project.filter((project) => project.tools.includes(selectedTool))
      );
    }
  }, [selectedTool]);

  return (
    <div>
      <div className="w-full h-28"></div>

      <div className="flex justify-center items-center pt-10">
        <div className="lg:w-[70vw] w-[90vw] flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-white">Filter</h1>
          <div className="flex justify-start mt-3 flex-wrap">
            {Tool.map((tool) => (
              <div className="flex flex-col items-center m-2" key={tool.name}>
                <img
                  src={tool.photo}
                  alt={tool.name}
                  className="h-12 w-12 rounded-full bg-white hover:cursor-pointer hover:scale-105 transform transition-transform"
                  onClick={() => setSelectedTool(tool)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-5 justify-start items-center bg-gradient-to-t from-gray-900 to-[#131313]">
        <div className="lg:w-[70vw] w-[90vw] relative inline-block text-left mx-auto">
          <button
            id="dropdownDefaultButton"
            onClick={toggleDropdown}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            type="button"
          >
            Type
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div
              id="dropdown"
              className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-2"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:cursor-pointer"
                  onClick={() => {
                    setSelectedType("All");
                    setIsDropdownOpen(false);
                  }}
                >
                  All
                </li>
                <li
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:cursor-pointer"
                  onClick={() => {
                    setSelectedType("Backend");
                    setIsDropdownOpen(false);
                  }}
                >
                  Backend
                </li>
                <li
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:cursor-pointer"
                  onClick={() => {
                    setSelectedType("Frontend");
                    setIsDropdownOpen(false);
                  }}
                >
                  Frontend
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center items-center pb-10 bg-gray-900">
        <div className="lg:w-[70vw] w-[90vw] flex flex-col justify-center">
          <div className="flex flex-wrap justify-center md:justify-normal">
            {shownProjects.map((project) => (
              <div
                className="flex flex-col bg-gray-800 p-5 rounded-lg mt-3 w-[20rem] h-[24rem] mx-2 hover:scale-105 transform transition-transform hover:cursor-pointer"
                onClick={() =>
                  (window.location.href = "/projects/" + project.name)
                }
                key={project.name}
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

export default Projects;
