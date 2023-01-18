import React from "react";
import eclipise from '../../assets/images/eclipise.svg'
import phone from '../../assets/images/phone.svg'
import './index.css'

const Who = () => {
  return (
    <div className="who__container">
      <div className="who__child-asset">
        <img src={eclipise} alt="phone tablet" className="who__eclipse"/>
        <img src={phone} alt="Phone tablet" className="who__phone"/>
      </div>
      <div className="who__child-content">
        <h3>WHO WE ARE</h3>
        <p>
          Shestel is a content community platform dedicated to bringing online
          on demand videos to TV and movie lovers. Shestel is a place where
          consumers can explore the content they like, track their streaming
          habits, and most importantly, connect with friends with similar
          interests.
        </p>
      </div>
    </div>
  );
};

export default Who;
