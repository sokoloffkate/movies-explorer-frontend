import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList({
  filterMovies,
  notFoundMovies,
  mp,
  mpm,
  restMoreMovies,
  showMoreMovies,
  shortMovies,
  isToggled,
  onLike,
  savedMovies,
  onDelete
}) {
  const location = useLocation();

  const movieIsLiked = ({ id }) => {
    return savedMovies.some((m) => m.movieId === id);
  };

  return (
    <>
      <section className="moviesCardList">
        {filterMovies && location.pathname === "/movies"
          ? filterMovies
              .slice(0, mp)
              .map((item) => (
                <MoviesCard item={item} key={item.id} onLike={onLike} movieIsLiked={movieIsLiked} onDelete={onDelete}/>
              ))
          : " "}
        {showMoreMovies
          ? restMoreMovies.map((item) => (
              <MoviesCard item={item} key={item.id} onLike={onLike} />
            ))
          : " "}
        {isToggled
          ? shortMovies.map((item) => (
              <MoviesCard item={item} key={item.id} onLike={onLike} />
            ))
          : " "}

        {savedMovies && location.pathname === "/saved-movies"
          ? savedMovies.map((item) => (
              <MoviesCard item={item} key={item.id} onLike={onLike} movieIsLiked={movieIsLiked} />
            ))
          : " "}
      </section>

      {notFoundMovies ? (
        <h2 className="moviesCardList__notfound">Ничего не найдено</h2>
      ) : (
        ""
      )}
    </>
  );
}

export default MoviesCardList;
