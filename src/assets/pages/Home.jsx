import React from "react";
import Banner from "../components/home/Banner";
import About from "../components/home/About";
import Projects from "../components/home/Projects";
import SkillSection from "../components/home/SkillSection";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Projects />
      <SkillSection />
    </>
  );
};

export default Home;
