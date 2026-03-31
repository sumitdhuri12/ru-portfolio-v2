import React from "react";

const Banner = () => {
  return (
    <section className="relative px-4 sm:px-8 md:px-12 py-8 md:py-20 lg:py-32 overflow-hidden">
      <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
        <div className="relative flex flex-col items-center justify-center min-h-55 md:min-h-100">
          <div className="w-full h-full">
            <img src="/images/banner.png" alt="" />
          </div>

          {/* Small purple dot */}
          <div className="absolute right-8 md:right-32 top-20 md:top-32 size-2 md:size-3.75 hidden md:block">
            {/* <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 15 15"
            >
              <circle cx="7.5" cy="7.5" fill="#CAA8FD" r="7.5" />
            </svg> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
