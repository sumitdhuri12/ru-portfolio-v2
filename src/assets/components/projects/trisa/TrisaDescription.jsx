import React from "react";

const TrisaDescription = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-8 md:py-20">
      <div className="mx-auto max-w-6xl space-y-12 md:space-y-16">
        {/* Duration */}
        <div>
          <h2 className="mb-4 text-2xl md:text-4xl font-semibold leading-tight">
            Duration
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            1 Week
          </p>
        </div>

        {/* My role & responsibilities */}
        <div>
          <h2 className="mb-4 text-2xl md:text-4xl font-semibold leading-tight">
            Users & Context
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Primary users:
          </p>
          <ul className="text-xl md:text-2xl font-light leading-relaxed list-disc pl-10 mb-6">
            <li>Project Managers</li>
            <li>Team Members</li>
          </ul>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Key goals:
          </p>
          <ul className="text-xl md:text-2xl font-light leading-relaxed list-disc pl-10">
            <li>Quickly view tasks</li>
            <li>Take actions (update, assign, track)</li>
            <li>Reduce time spent navigating</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrisaDescription;
