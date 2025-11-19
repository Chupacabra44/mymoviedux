import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

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

  const handleSearch = (event) => {
    setSearchMovie(event.target.value);
  };

  const filteredMovie = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchMovie) ||
      movie.genre.toLowerCase().includes(searchMovie)
  );

  return (
    <div className="container">
      <input
        onChange={handleSearch}
        className="input"
        type="text"
        placeholder="Search movies ..."
        value={searchMovie}
      />
      <div className="movie__container">
        {filteredMovie.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesGrid;
