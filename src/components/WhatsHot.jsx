import React, { useRef, useCallback, useState } from "react";
import useMovie from "../hooks/useMovie";
import "./css/whatshot.css";

function WhatsHot() {
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, movies, hasMore } = useMovie(pageNumber);

  const observer = useRef();
  const lastMovieElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      console.log("working");
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPageNumber((prevNum) => prevNum + 1);
          }
        },
        {
          threshold: 1,
        }
      );
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const movieElements = movies.map((movie, index) => {
    {
      if (movies.length === index + 1) {
        return (
          <div ref={lastMovieElementRef} key={index} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
              alt=""
              className="movie-poster"
            />
            <p className="movie-rating">
              {movie.vote_average}
              <i className="fa fa-star" style={{ color: "gold" }}></i>
            </p>
            <h3 className="movie-title">{movie.title}</h3>
          </div>
        );
      } else {
        return (
          <div key={index} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
              alt=""
              className="movie-poster"
            />
            <p className="movie-rating">
              {movie.vote_average}
              <i className="fa fa-star" style={{ color: "gold" }}></i>
            </p>
            <h3 className="movie-title">{movie.title}</h3>
          </div>
        );
      }
    }
  });

  return (
    <div className="movies-container">
      <div className="container-header">
        <h3 className="movies-container__title">What's Hot</h3>
      </div>
      <div className="movie-list">{movieElements}</div>
      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error">Error...</div>}
    </div>
  );
}

export default WhatsHot;
