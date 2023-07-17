import React, { useState, useEffect } from "react";
import "./css/whatshot.css";

function WhatsHot() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        Authorization: "Bearer process.env.API_KEY",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results[0]);
      });
  }, []);

  const movieElements = movies.map((movie) => {
    return (
      <div key={movie.id} className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
          alt=""
          className="movie-poster"
        />
        <p className="movie-rating">
          {movie.vote_average}
          <i class="fa fa-star" style={{ color: "gold" }}></i>
        </p>
        <h3 className="movie-title">{movie.title}</h3>
      </div>
    );
  });

  return (
    <div className="movies-container">
      <div className="container-header">
        <h3 className="movies-container__title">What's Hot</h3>
      </div>
      <div className="movie-list">{movieElements}</div>
    </div>
  );
}

export default WhatsHot;
