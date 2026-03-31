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
        <div className="mt-10 md:mt-20 flex justify-center md:justify-end">
          <button className="rounded-md border border-white px-6 py-3 text-lg md:text-xl transition-colors hover:bg-white hover:text-body-bg md:px-8 md:py-4">
            View full case study
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
