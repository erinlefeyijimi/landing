import axios from "axios";
import React, { useEffect, useState } from "react";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./Movies.css";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);


  //   const slideLeft = () => {
  //     var slider = document.getElementById("slider" + rowID);
  //     slider.scrollLeft = slider.scrollLeft - 500;
  //   };
  //   const slideRight = () => {
  //     var slider = document.getElementById("slider" + rowID);
  //     slider.scrollLeft = slider.scrollLeft + 500;
  //   };

  return (
    <div className="movie__row--parent">
      <h2 className="movie__row--title">{title}</h2>
      <div id={"slider" + rowID} className="movies__row--parent">
        {movies.map((item, id) => (
          <div className="movie__row--children">
            <img
              className="movie__row--image"
              src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
              alt={item?.title}
            />

            <p className="movie__row--head">{item?.title}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Row;
