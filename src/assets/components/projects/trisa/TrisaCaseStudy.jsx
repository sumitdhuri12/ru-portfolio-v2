import React from "react";

const TrisaCaseStudy = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 pt-8 md:pt-20 pb-20 md:pb-40">
      <div className="max-w-6xl mx-auto ">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {/* The Problem Card */}
          <div className="relative rounded-lg bg-white p-6 md:p-12">
            <img
              src="/images/projects/problem_icon.png"
              alt="Problem Icon"
              className="w-22.5 h-auto mb-8"
            />
            <h2 className="mb-6 text-3xl md:text-4xl font-semibold text-secondary">
              The problem
            </h2>
            <p className="text-xl md:text-2xl font-medium leading-normal md:leading-relaxed text-secondary">
              The existing dashboard presented too much information at once,
              leading to high cognitive load and reduced usability. Key actions
              such as task management and filtering were not clearly
              prioritized, and role clarity within the system was missing.
            </p>
          </div>

          {/* The Solution Card */}
          <div className="relative rounded-lg bg-white p-6 md:p-12">
            <img
              src="/images/projects/solution_icon.png"
              alt="Solution Icon"
              className="w-22.5 h-auto mb-8"
            />
            <h2 className="mb-6 text-3xl md:text-4xl font-semibold text-secondary">
              The solution
            </h2>
            <ul className="text-xl md:text-2xl font-medium leading-normal text-secondary list-disc pl-8">
              <li>Reducing cognitive load</li>
              <li>Improving task readability and scannability</li>
              <li>Clarifying user roles and responsibilities</li>
              <li>Improving accessibility</li>
              <li>Making primary actions more obvious</li>
            </ul>
          </div>
        </div>

        {/* View Case Study Button */}
        <div className="mt-10 md:mt-20 flex flex-col md:flex-row justify-center md:justify-end gap-6 items-center">
          <a
            href="https://www.figma.com/design/N084r9djEjwCYabroJf2j8/Task-Management-Dashboard-%E2%80%93-UX-Redesign?node-id=0-1&t=g4Ck0lK82eFUg9y9-1"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-55 inline-block rounded-md border border-white px-6 py-3 text-lg text-center md:text-xl transform transition-transform duration-300 ease-out hover:scale-105 md:px-8 md:py-4"
          >
            View Prototype
          </a>
          <a
            href="https://docs.google.com/presentation/d/1VxzLc8HpyI2DYPnsR7iRAE5jMrsAU3xaaEnslHrfsvw/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-55 inline-block rounded-md border border-white px-6 py-3 text-lg md:text-xl bg-white text-body-bg transform transition-transform duration-300 ease-out hover:scale-105 md:px-8 md:py-4"
          >
            View full case study
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrisaCaseStudy;
