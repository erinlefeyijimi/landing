import React from "react";
import Who from "./Who";
import Why from "./Why";
import Choose from "./Choose";
import './index.css'

const About = () => {
  return (
    <>
      <Who />
      <div className="about__background">
        <Why />
        <Choose />
      </div>
    </>
  );
};

export default About;
