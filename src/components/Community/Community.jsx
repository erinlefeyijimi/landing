import React from "react";
import "./Community.css";
import google from "../../assets/images/google-play-badge 1.svg";
import apple from "../../assets/images/app-store.svg";
import handPhone from "../../assets/images/shestelPhone.svg";

const Community = () => {
  return (
    <div className="community__parent">
      <div className="community__container">
        <div className="community__asset">
          <div className="community__asset--icon">
            <a
              href="https://play.google.com/store/apps/details?id=com.shestel.app"
              target="_blank"
              rel="noreferrer"
            >
              <img src={google} alt="download on google" />
            </a>
            <a
              href="https://apps.apple.com/in/app/shestel/id6444605218"
              target="_blank"
              rel="noreferrer"
            >
              <img src={apple} alt="download on apple" />
            </a>
          </div>
          <div className="community__asset--phone">
            <img src={handPhone} alt="sign up on google" />
          </div>
        </div>
        <div className="community__content">
          <h3>JOIN THE SHESTEL COMMUNITY</h3>
          <p>
            Consolidate your streaming service providers, track your
            subscription plan expenses, your favorite movies and TV shows, and
            connect with your friends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
