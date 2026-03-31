import React from "react";

const Description = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-8 md:py-20">
      <div className="mx-auto max-w-6xl space-y-12 md:space-y-16">
        {/* Duration */}
        <div>
          <h2 className="mb-4 text-2xl md:text-4xl font-semibold leading-tight">
            Duration
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            3 Months
          </p>
        </div>

        {/* My role & responsibilities */}
        <div>
          <h2 className="mb-4 text-2xl md:text-4xl font-semibold leading-tight">
            My role & responsibilities
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            I worked as the UX/UI Designer and UX Researcher on the MuseHub app,
            leading the design process from research to final UI. I conducted
            user research, created personas, defined information architecture
            and user flows, and translated insights into wireframes and
            high-fidelity prototypes using Figma. Through usability testing and
            iterative design, I focused on building an accessible, user-friendly
            experience that helps visitors seamlessly discover museum events,
            exhibitions, and amenities.
          </p>
        </div>

        {/* Context */}
        <div>
          <h2 className="mb-4 text-2xl md:text-4xl font-semibold leading-tight">
            Context
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            MuseHub is a mobile app and responsive website that helps museum
            visitors discover, plan, and attend exhibitions and events, offering
            easy booking, group visits, and accessibility features for a wide
            range of users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;
