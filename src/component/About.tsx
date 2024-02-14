import React from "react";
import {
  AboutFeature,
  AboutWorkingWith,
  AboutUnique,
  AboutUs,
} from "./AboutComponents";
const About = () => {
  return (
    <section
      id="About Us"
      className="max-lg:w-auto lg:max-w-[1200px] lg:mx-auto sm:mt-6"
    >
      {/* about description */}
      <AboutUs />
      <AboutFeature />
      <AboutWorkingWith />
      <AboutUnique />
    </section>
  );
};

export default About;
