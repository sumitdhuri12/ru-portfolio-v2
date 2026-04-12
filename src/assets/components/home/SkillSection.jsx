import React from "react";
import SkillItem from "../home/SkillItem";

const SkillSection = () => {
  const skillsData = [
    {
      title: "UX & Research",
      skills: [
        "User research and interviews",
        "Personas & Journey mapping",
        "Information architecture",
        "Usability testing",
        "Accessibility considerations",
      ],
    },
    {
      title: "UX & Interaction Design",
      skills: [
        "Wireframing & Prototyping",
        "Design systems",
        "Visual hierarchy & layout",
        "Micro-interactions",
        "Responsive design",
      ],
    },
    {
      title: "Tools & Production",
      skills: [
        "Figma (Auto layout, components)",
        "HTML, CSS, JavaScript",
        "Developer handoff",
        "Design-to-code collaboration",
        "ChatGPT, Gemini, Banani AI, Claude AI",
      ],
    },
  ];
  return (
    <section
      id="skills"
      className="px-4 md:px-8 max-w-7xl mx-auto pt-8 md:pt-20 pb-4 md:pb-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className=" text-3xl sm:text-4xl md:text-6xl mb-4 md:mb-6 uppercase">
          <span className="font-bold">SKILLS</span>
          <span className="font-extralight"> & CAPABILITIES</span>
        </h2>

        <p className="font-extralight text-xl md:text-2xl mb-12 md:mb-16 max-w-4xl">
          Focused on clarity, usability and building designs that ship.
        </p>
        <div className="grid grid-cols-1 md:grid-flow-col md:auto-cols-max w-full gap-6 md:gap-16">
          {skillsData.map((item, index) => (
            <SkillItem
              key={index}
              title={item.title}
              skills={item.skills}
              className="w-fit"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
