import { useState } from "react";
import MovieCard from "./MovieCard";

const MoviesGrid = ({ movies, watchlist, toggleWatchlist }) => {
  const [searchMovie, setSearchMovie] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  const handleSearch = (event) => {
    setSearchMovie(event.target.value);
  };

  const handleGenre = (event) => {
    setGenre(event.target.value);
  };

  const handleRating = (event) => {
    setRating(event.target.value);
  };

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchesSearch = (movie, searchMovie) => {
    return movie.title.toLowerCase().includes(searchMovie.toLowerCase());
  };

  const matchesRating = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;
      case "Good":
        return movie.rating >= 8;
      case "Ok":
        return movie.rating >= 5 && movie.rating < 8;
      case "Bad":
        return movie.rating < 5;
      default:
        return false;
    }
  };

  const filteredMovie = movies.filter(
    (movie) =>
      matchesGenre(movie, genre) &&
      matchesSearch(movie, searchMovie) &&
      matchesRating(movie, rating)
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
      <div className="filter">
        <div className="filter__slot">
          <label className="filter__label">Genre</label>
          <select value={genre} onChange={handleGenre}>
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter__slot">
          <label className="filter__label">Rating</label>
          <select value={rating} onChange={handleRating}>
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movie__container">
        {filteredMovie.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            toggleWatchlist={toggleWatchlist}
            isWatchlisted={watchlist.includes(movie.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesGrid;
