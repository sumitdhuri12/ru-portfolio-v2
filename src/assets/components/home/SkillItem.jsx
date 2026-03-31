import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const SkillItem = ({ title, skills }) => {
  const wrapperRef = useRef(null);
  const lineRef = useRef(null);
  const contentRef = useRef(null);
  const tl = useRef(null);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    if (isMobile) return;
    const height = contentRef.current.scrollHeight + 56;

    tl.current = gsap.timeline({ paused: true });

    tl.current
      .fromTo(
        lineRef.current,
        { height: 56 },
        {
          height: height,
          transformOrigin: "top",
          duration: 0.5,
          ease: "power2.out",
        },
      )
      .fromTo(
        contentRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        "-=0.3",
      );
  }, []);

  const handleEnter = () => {
    if (isMobile) return;
    tl.current.play();
  };

  const handleLeave = () => {
    tl.current.reverse();
  };

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative"
    >
      <div
        ref={lineRef}
        className="hidden md:block absolute right-0 top-0.5 w-0.5 bg-white h-14"
      />
      <h2 className="text-2xl md:text-3xl font-normal py-1 pr-16">{title}</h2>

      <ul
        ref={contentRef}
        className="flex flex-col pt-2 md:pt-4 md:opacity-0 md:-translate-y-2"
      >
        {skills.map((skill, index) => (
          <li
            key={index}
            className="pl-0 md:pl-1 space-y-4 pb-1.5 font-normal text-base"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillItem;
