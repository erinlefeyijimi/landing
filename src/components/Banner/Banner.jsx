import React from "react";
import "./Banner.css";
import bannerImage from "../../assets/images/banner-image.svg";
import Googleplay from "../../assets/images/google-play-badge 1.png";
// import {BsApple} from 'react-icons/bs'
import appstore from "../../assets/images/app-store.svg";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <div className="banner__container">
      <div className="banner__content">
        <h1>
          <span className="u-purple-color">EXPLORE</span> MORE CONTENT, <br />
          SAVE TIME <span className="u-purple-color">DISCOVERING</span> <br />
          YOUR PREFERENCES
        </h1>
        <p>
          Don't get overwhelmed when searching for movies, TV shows and sports
          schedules. Stay in control of where your movies and TV shows are,
          expand your horizons, and engage with your social circle to share your
          love for good entertainment.
        </p>

        <div className="banner__button">
          <Button title="Learn More" url="/blog" />
          <button className="banner--btn-google">
            <a
              href="https://play.google.com/store/apps/details?id=com.shestel.app"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Googleplay} alt="Googleplay icon" />
            </a>
          </button>
          <button className="banner--btn-apple">
            <a
              href="https://apps.apple.com/in/app/shestel/id6444605218"
              target="_blank"
              rel="noreferrer"
            >
              <img src={appstore} alt="AppStore icon" />
            </a>
          </button>
        </div>
      </div>
      <div className="banner__media">
        <img src={bannerImage} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
