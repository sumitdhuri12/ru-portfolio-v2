import { useEffect, useRef } from "react";

const ResumeButton = () => {
  const buttonRef = useRef(null);

  return (
    // <button
    //   ref={buttonRef}

    //   className="group relative right-0 size-32 flex items-center justify-center transition-transform duration-300"
    // >
    <a
      href="https://drive.google.com/file/d/1d3ZE6w7_Fpux5K6Rj7FvuBWpi-47cVfX/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      ref={buttonRef}
      className="group relative right-0 size-32 flex items-center justify-center transition-transform duration-300"
    >
      {/* Background Circle */}
      <svg className="absolute inset-0 size-full" viewBox="0 0 158.997 158.997">
        <circle
          cx="79.4985"
          cy="79.4985"
          r="79.4985"
          className="fill-[#CCAAFF] group-hover:fill-[#b899ee] transition-colors"
        />
      </svg>

      <svg
        className="absolute inset-0 size-full animate-spin-slow"
        viewBox="0 0 200 200"
      >
        <defs>
          {/* Top text path */}
          <path id="topPath" d="M100,100 m-70,0 a70,70 0 1,1 140,0" />

          {/* Bottom text path */}
          <path id="bottomPath" d="M100,100 m70,0 a70,70 0 1,1 -140,0" />
        </defs>

        {/* Top text */}
        <text className="text-[19px] fill-black font-bold">
          <textPath href="#topPath" startOffset="50%" textAnchor="middle">
            VIEW FULL RESUME
          </textPath>
        </text>

        {/* Bottom text */}
        <text className="text-[19px] fill-black font-bold">
          <textPath href="#bottomPath" startOffset="50%" textAnchor="middle">
            VIEW FULL RESUME
          </textPath>
        </text>

        {/* Left dot */}
        <circle cx="25" cy="100" r="4" fill="black" />

        {/* Right dot */}
        <circle cx="175" cy="100" r="4" fill="black" />
      </svg>

      {/* Center Arrow */}
      <span className="arrow relative z-10 text-2xl transition-transform duration-300 group-hover:scale-110 ">
        <img className="w-16 h-auto" src="/images/cursor_white.png" alt="" />
      </span>
      {/* // </button> */}
    </a>
  );
};

export default ResumeButton;
