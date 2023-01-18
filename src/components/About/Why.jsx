import React from "react";
import "./index.css";
import phone from "../../assets/images/Iphone1.svg";
import iphone from "../../assets/images/Iphone.svg";
import centerImage from "../../assets/images/Ellipse 75.svg";
import bottomImage from "../../assets/images/Ellipse 70.svg";
import bannerImage from "../../assets/images/banner-image.svg";

const Why = () => {
  return (
    <section className="about__container">
      <div className="who__child-content">
        <h3>WHY WE DO IT</h3>
        <p>
          We are social creatures and we crave connection to share our unique
          interests. With Shestel, you can keep the promise of streaming
          services to experience personalized content but we also help you enjoy
          and share your interests that transcend from the art of discovery.
        </p>
      </div>
      <div className="about__child">
        <img src={bannerImage} alt="banner" />
      </div>
    </section>
  );
};

export default Why;
