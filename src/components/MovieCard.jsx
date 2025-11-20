const MovieCard = ({ movie, isWatchlisted, toggleWatchlist }) => {
  const handleError = (event) => {
    event.target.src = "images/default.jpg";
  };

  const getRatingClass = (rating) => {
    if (rating >= 8) {
      return "movie__card-rating--good";
    } else if (rating >= 5 && rating < 8) {
      return "movie__card-rating--ok";
    } else if (rating < 4) {
      return "movie__card-rating--bad";
    }
  };

  return (
    <div className="movie__card">
      <img
        className="movie__image"
        src={`/images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie__card-info">
        <h3 className="movie__card-title">{movie.title}</h3>
        <div className="watchlist">
          <span className="movie__card-genre">{movie.genre}</span>
          <span
            className={`movie__card-rating ${getRatingClass(movie.rating)}`}
          >
            {movie.rating}
          </span>
        </div>
        <label>
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => toggleWatchlist(movie.id)}
          />
          <span>
            <span className="watchlist">
              {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default MovieCard;
