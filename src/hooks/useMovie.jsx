import { useEffect, useState } from "react";
import axios from "axios";

function useMovie(pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular",
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
      params: { page: pageNumber },
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        Accept: "application/json",
      },
    })
      .then((res) => {
        setHasMore(res.data.results.length > 0);
        setMovies((prevMovies) => [...prevMovies, ...res.data.results]);
        console.log(res);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [pageNumber]);

  return { loading, error, movies, hasMore };
}

export default useMovie;
