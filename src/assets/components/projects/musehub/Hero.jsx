import React from "react";

const Hero = () => {
  return (
    <section className="relative px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="relative">
          <h1 className="mx-auto max-w-5xl text-center text-3xl md:text-6xl font-black leading-tight font-regular">
            MuseHub: Discovering Events, Exhibitions & Amenities Effortlessly
          </h1>
          {/* <DecorativeIcon /> */}
        </div>

        {/* App Screenshots */}
        <div className="relative mx-auto mt-12 flex max-w-2xl items-center justify-center gap-4 md:mt-16 md:gap-8">
          <div className="relative h-auto w-58.75 shrink-0 md:w-120">
            <img
              alt="MuseHub app screenshot showing exhibition details"
              className="h-full w-full object-cover"
              src="/images/projects/banner_musehub.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
