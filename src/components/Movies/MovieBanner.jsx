import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../../Requests";
import "./Movies.css";

const MovieBanner = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestTrending).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  //   console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="movie__banner--container">
      <div className="movie__banner--assets">
        <img
          className="movie__banner--image"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="movie__banner--content">
         <h2 className="movie__headline">{movie?.title}</h2>
          <p className="movie__details">
            {truncateString(movie?.overview, 150)}
          </p>
          <p className="movie__para">
            <b>Released: {movie?.release_date}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieBanner;
