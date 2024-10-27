import React from "react";
import { useParams } from "react-router-dom";
import projects from "../static/project";
import Github from "../assets/github.png";

const ProjectDetail = () => {
  const { projectName } = useParams();
  const project = projects.find((p) => p.name === projectName);

  if (!project) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold text-red-600">
          Project not found
        </h2>
      </div>
    );
  }

  return (
    <div>
      <div className="w-full h-40 bg-gradient-to-t from-gray-900 to-[#131313]"></div>

      <div className="mx-auto pb-10 pr-10 pl-10 bg-gray-900">
        <h1 className="text-4xl font-bold text-white mb-6">{project.name}</h1>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white">Description</h2>
          <p className="text-gray-400 mt-2">{project.description}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white">Type</h2>
          <p className="text-gray-400 mt-2">{project.type.join(", ")}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white">Worked By</h2>
          <p className="text-gray-400 mt-2">
            {project.individual ? "Myself" : "Group"}
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white">Tools Used</h2>
          <ul className="flex flex-wrap mt-2">
            {project.tools.map((tool, index) => (
              <li key={index} className="flex items-center mr-6 mb-4">
                <img
                  src={tool.photo}
                  alt={tool.name}
                  className="w-10 h-10 mr-2 bg-white rounded-full"
                />
                <span className="text-gray-400">{tool.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white">
            Features I Implement
          </h2>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            {project.features.map((feature, index) => (
              <li key={index} className="mb-1">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Repositories
          </h2>
          <ul className="space-y-3">
            {project.repo.map((repo, index) => (
              <li
                key={index}
                className="flex items-center bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition duration-200 hover:cursor-pointer"
                onClick={() => window.open(repo, "_blank")}
              >
                <img src = {Github} className="w-5 h-5 rounded-md mr-2">
                </img>
                <span className="text-gray-300">{repo.split('/').pop()}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white">Photos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
            {project.photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`${project.name} screenshot ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
