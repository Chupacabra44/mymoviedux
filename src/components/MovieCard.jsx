const MovieCard = ({ movie }) => {
  const handleError = (event) => {
    event.target.src = "images/default.jpg";
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
        <p className="movie__card-rating">{movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
