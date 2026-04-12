import React from "react";

const CaseStudy = () => {
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
              The primary problem was making group bookings clear and easy to
              understand by showing transparent pricing, minimum group size, and
              total cost upfront, reducing confusion and decision fatigue.
              Another challenge was maintaining a clean, accessible layout that
              allows users to confidently select attendee count and proceed
              without feeling overwhelmed.
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
            <p className="text-xl md:text-2xl font-medium leading-normal md:leading-relaxed text-secondary">
              The goal of this project was to design an intuitive and inclusive
              MuseHub app experience that helps users easily discover, plan, and
              book museum exhibitions and events. The app aims to support
              diverse user needs such as family-friendly discovery, group
              bookings, affordability, accessibility, and seamless scheduling.
            </p>
          </div>
        </div>

        {/* View Case Study Button */}
        <div className="mt-10 md:mt-20 flex flex-col md:flex-row justify-center md:justify-end gap-6 items-center">
          <a
            href="https://www.figma.com/proto/68JPHCvWaM4A1ZgSbiR4YN/HighFi-Design-MuseHub?node-id=1-25&t=r0YyHYgWP6WrdDO1-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A25"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-55 inline-block rounded-md border border-white px-6 py-3 text-lg text-center md:text-xl transform transition-transform duration-300 ease-out hover:scale-105 md:px-8 md:py-4"
          >
            View Prototype
          </a>
          <a
            href="https://docs.google.com/presentation/d/1c4aSN_I-jY6FLDSKDTznH2yJkiAKFPiDldKTI3hs5pY/edit?usp=sharing"
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

export default CaseStudy;
