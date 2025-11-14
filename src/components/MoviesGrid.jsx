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
          <div key={movie.id} className="movie__card">
            <img
              className="movie__image"
              src={`/images/${movie.image}`}
              alt={movie.title}
            />
            <div className="movie__card-info">
              <h3 className="movie__card-title">{movie.title}</h3>
              <p className="movie__card-genre">{movie.genre}</p>
              <p className="movie__card-rating">{movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesGrid;
