import React from "react";
import MovieBanner from "../../components/Movies/MovieBanner";
import Navbar from "../../components/Navbar/Navbar";
import Row from "../../components/Movies/Row";
import requests from "../../Requests";
import './TvShows.css'
import Footer from '../../components/Footer/Footer'

const TvShows = () => {
  return (
    <div>
      <Navbar />
      <MovieBanner />
      <div className="tvshows__section">
        <h2 className="tvshows__headline">STREAMING SERVICES</h2>
        <Row rowID="1" title="Upcoming TV Shows & Movies" fetchURL={requests.requestUpcoming} />
        <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
        <Row rowID="3" title="Latest TV Shows & Movies" fetchURL={requests.requestTrending} />
        <Row rowID="4" title="Most Watched" fetchURL={requests.requestTopRated} />
      </div>
      <Footer/>
    </div>
   
  );
};

export default TvShows;
