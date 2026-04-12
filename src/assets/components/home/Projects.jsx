import React from "react";
import { Link } from "react-router-dom";
import usePageTransition from "../../hooks/usePageTransition";

const Projects = () => {
  const goTo = usePageTransition();
  return (
    <section
      id="projects"
      className="py-8 md:py-20 max-w-7xl mx-auto px-4 md:px-8"
    >
      <h4 className="text-3xl md:text-6xl font-regular pb-6 md:pb-12">
        <span className="font-bold">SELECTED</span> PROJECTS
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 ">
        <div
          onClick={() => goTo("/projects/musehub")}
          className="aspect-square 
                bg-[url('/images/projects/bg-project.png')] 
                bg-cover bg-center 
                flex flex-col overflow-hidden cursor-pointer transform transition-transform duration-300 ease-out hover:scale-102"
        >
          {/* Image Section */}
          <div className="flex-1 flex items-center justify-center p-6 min-h-0">
            <img
              src="/images/projects/musehub.png"
              alt="MuseHub"
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="text-secondary bg-white/20 px-4 md:px-8 py-3 md:py-6 shrink-0">
            <h3 className="text-2xl md:text-5xl font-black pb-1 md:pb-2">
              MuseHub
            </h3>
            <p className="text-lg md:text-2xl uppercase">Museum booking app</p>
          </div>
        </div>
        {/* <Link to="Project/Trisa">
          <div
            className="aspect-square 
                bg-[url('/images/projects/bg-project.png')] 
                bg-cover bg-center 
                flex flex-col overflow-hidden"
          >
            <div className="flex-1 flex items-center justify-center p-6 min-h-0">
              <img
                src="/images/projects/musehub.png"
                alt="MuseHub"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="text-secondary bg-white/20 px-4 md:px-8 py-3 md:py-6 shrink-0">
              <h3 className="text-2xl md:text-5xl font-black pb-1 md:pb-2">
                MuseHub
              </h3>
              <p className="text-lg md:text-2xl uppercase">
                Museum booking app
              </p>
            </div>
          </div>
        </Link> */}
      </div>
    </section>
  );
};

export default Projects;
