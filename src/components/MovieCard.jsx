const MovieCard = ({ movie }) => {
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
        <p className="movie__card-genre">{movie.genre}</p>
        <p className={`movie__card-rating ${getRatingClass(movie.rating)}`}>
          {movie.rating}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
