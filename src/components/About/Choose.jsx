import React from "react";
import reviews from '../../assets/images/reviews.svg'

const Choose = () => {
  return (
    <section className="choose__container">
      <div className="choose__asset">
        <img src={reviews} alt="Reviews" />
      </div>
      <div className="choose__content">
        <h3>WHY CHOOSE US</h3>
        <p>
          Shestel takes pride in offering you as users a community platform to
          help you reignite to communal and sharing experience during your
          moment entertainment either from a movie, TV shows, Sports. We offer
          streaming services consolidation and help you track your subscriptions
          on a personalized social community platform.
        </p>
      </div>
    </section>
  );
};

export default Choose;
