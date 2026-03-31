import React from "react";
import ResumeButton from "./ResumeButton";

const About = () => {
  return (
    <section id="about" className="py-8 md:py-20 px-4 md:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h5 className="text-2xl md:text-4xl font-regular text-[#9b9b9b] pb-6">
          About me
        </h5>
        <p className="text-xl md:text-3xl font-semibold uppercase md:leading-11.25">
          I design research-driven experiences that solve real user problems.
          <br />
          With a web development background, I create designs that translate
          smoothly into production.
        </p>
      </div>
      <div className="flex justify-center md:justify-end pr-0 md:pr-10 pt-10">
        <ResumeButton />
      </div>
    </section>
  );
};

export default About;
