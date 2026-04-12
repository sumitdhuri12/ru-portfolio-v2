import React from "react";

const Footer = () => {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24 pt-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-black text-3xl sm:text-4xl md:text-6xl leading-tight mb-8 md:mb-16">
          FEEL LIKE
          <br />
          COLLABORATING?
        </h2>

        <p className="text-sm md:text-xl text-[#9b9b9b] mb-2 md:mb-6 uppercase tracking-wider">
          CONTACT ME
        </p>

        <a
          href="mailto:rutuja.sawant.work@gmail.com"
          className="text-xl sm:text-2xl md:text-3xl lg:text-[48px] inline-block break-all"
        >
          rutuja.sawant.work@gmail.com
        </a>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 md:gap-8 mt-12 md:mt-20">
          <a
            href="https://www.instagram.com/designedbyrutuja/"
            target="_blank"
            rel="noopener noreferrer"
            className="size-10 md:size-12 lg:size-11.25 hover:scale-110 transition-transform"
            aria-label="Instagram"
          >
            <img
              className="size-10 md:size-12 lg:size-11.25"
              src="/images/icons/instagram.png"
              alt=""
            />
          </a>

          <a
            href="https://www.linkedin.com/in/rutuja-sawant-002781193/"
            target="_blank"
            rel="noopener noreferrer"
            className="size-10 lg:size-11.25 hover:scale-110 transition-transform"
            aria-label="LinkedIn"
          >
            <img
              className="size-10 lg:size-11.25"
              src="/images/icons/linkedin.png"
              alt=""
            />
          </a>
        </div>

        <p className="font-secondary font-black text-3xl sm:text-4xl md:text-6xl mt-16 md:mt-24 tracking-wider">
          THANK YOU!
        </p>
      </div>
    </section>
  );
};

export default Footer;
