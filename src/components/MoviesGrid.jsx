import { useState, useEffect } from "react";

const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("movies.json");
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="container">
      <div className="movie__container">
        {movies.map((movie) => (
          <div className="movie__card">
            <img
              className="movie__image"
              src={`/images/${movie.image}`}
              alt="title"
            />
            <p className="movie__title">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesGrid;
