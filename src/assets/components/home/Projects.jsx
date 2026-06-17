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
        <a
          href="https://portfolio-content-writer.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="aspect-square 
                bg-[#bfb2d3] 
                bg-cover bg-center rounded-lg
                flex flex-col overflow-hidden cursor-pointer transform transition-transform duration-300 ease-out hover:scale-102"
          >
            {/* Image Section */}
            <div className="flex-1 flex items-center justify-center p-10 min-h-0">
              <img
                src="/images/projects/banner_portfolio_website.png"
                alt="Portfolio Website"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Text Section */}
            <div className="text-secondary bg-white/20 px-4 md:px-8 py-3 md:py-6 shrink-0">
              <h3 className="text-2xl md:text-4xl font-black pb-1 md:pb-2">
                Portfolio Website
              </h3>
              <p className="text-base md:text-xl uppercase">
                React - Responsive UI Development
              </p>
            </div>
          </div>
        </a>

        <div
          onClick={() => goTo("/projects/saas-dashboard")}
          className="aspect-square 
                bg-[#B1D1A4] 
                bg-cover bg-center rounded-lg
                flex flex-col overflow-hidden cursor-pointer transform transition-transform duration-300 ease-out hover:scale-102"
        >
          {/* Image Section */}
          <div className="flex-1 flex items-center justify-center p-6 md:p-10 min-h-0">
            <img
              src="/images/projects/saas_dashboard.png"
              alt="SaaS Task Dashboard"
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="text-secondary bg-white/20 px-4 md:px-8 py-3 md:py-6 shrink-0">
            <h3 className="text-2xl md:text-4xl font-black pb-1 md:pb-2">
              SaaS Task Dashboard
            </h3>
            <p className="text-base md:text-xl uppercase">
              AI-Generated Dashboard – UX Redesign
            </p>
          </div>
        </div>

        <div
          onClick={() => goTo("/projects/musehub")}
          className="aspect-square 
                bg-[url('/images/projects/bg-project.png')] 
                bg-cover bg-center rounded-lg
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
            <h3 className="text-2xl md:text-4xl font-black pb-1 md:pb-2">
              MuseHub
            </h3>
            <p className="text-base md:text-xl uppercase">Museum booking app</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
