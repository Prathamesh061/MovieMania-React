import React, { useEffect, useState } from "react";
import "./css/newreleases.css";

function NewReleases() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/now_playing", {
      headers: {
        Authorization: "Bearer process.env.API_KEY",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <main className="main">
      <h3>New Releases</h3>
      <div>NewReleases</div>
    </main>
  );
}

export default NewReleases;
