import React from "react";
import "./Hero.css";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <div className="hero">
      <HeroLeft />
      <HeroRight />
    </div>
  );
};

export default Hero;