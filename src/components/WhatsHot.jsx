import React, { useState, useEffect } from "react";
import "./css/whatshot.css";

function WhatsHot() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGQ3NDEwMmQwYjNiOThmN2M5MDI3YjNjOTBiODI0ZSIsInN1YiI6IjY0YjQzZDc2MGU0ZmM4MDEzYjU0ZGRiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c3pC0-FJQpLl4H7z3H3d39PNPTJTwtyPpOqrl2i9cVo",
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

// const vanElements = vans.map((van) => (
//   <div key={van.id} className="van-tile">
//     <Link to={`/vans/${van.id}`}>
//       <img src={van.imageUrl} />
//       <div className="van-info">
//         <h3>{van.name}</h3>
//         <p>
//           ${van.price}
//           <span>/day</span>
//         </p>
//       </div>
//       <i className={`van-type ${van.type} selected`}>{van.type}</i>
//     </Link>
//   </div>
// ));
