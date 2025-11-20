import MovieCard from "./MovieCard";

const WatchList = ({ movies, watchlist, toggleWatchlist }) => {
  return (
    <>
      <div>
        {watchlist.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          return (
            <MovieCard
              key={id}
              movie={movie}
              toggleWatchlist={toggleWatchlist}
              isWatchlisted={true}
            />
          );
        })}
      </div>
    </>
  );
};

export default WatchList;
