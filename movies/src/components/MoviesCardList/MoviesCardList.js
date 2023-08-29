import MoviesCard from "../MoviesCard/MoviesCard";
import MoreButton from "../MoreButton/MoreButton";
import { useLocation } from "react-router-dom";
import { slice } from "lodash";
import { useState } from "react";

function MoviesCardList({
  filterMovies,
  initialRender,
  step,
  notFoundMovies,
  //initialMovies,
  // loadMore,
  shortMovies,
  isToggled,
  onSaved,
  savedMovies,
  onDelete,
}) {
  const location = useLocation();
  const [click, setClick] = useState(false);
  const moreFilterMovies = filterMovies.slice(initialRender);
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(0);
  const showMoreMovies = slice(moreFilterMovies, 0, index);

  const loadMore = () => {
    setIndex(index + step);
    if (index >= moreFilterMovies.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
    setClick(true);
  };

  console.log(filterMovies);
  console.log(moreFilterMovies);
  console.log(showMoreMovies);

  const movieIsLiked = ({ id }) => {
    return savedMovies.some((m) => m.movieId === id);
  };

  return (
    <>
      <section className="moviesCardList">
        {location.pathname === "/movies"
          ? filterMovies
              .slice(0, initialRender)
              .map((item) => (
                <MoviesCard
                  item={item}
                  key={item.id}
                  onSaved={onSaved}
                  onDelete={onDelete}
                  movieIsLiked={movieIsLiked}
                />
              ))
          : " "}
        {location.pathname === "/movies" && click
          ? showMoreMovies.map((item) => (
              <MoviesCard
                item={item}
                key={item.id}
                onSaved={onSaved}
                onDelete={onDelete}
                movieIsLiked={movieIsLiked}
              />
            ))
          : " "}

        {isToggled
          ? shortMovies.map((item) => (
              <MoviesCard
                item={item}
                key={item.id}
                movieIsLiked={movieIsLiked}
                onSaved={onSaved}
                onDelete={onDelete}
              />
            ))
          : " "}

        {savedMovies && location.pathname === "/saved-movies"
          ? savedMovies.map((item) => (
              <MoviesCard
                item={item}
                key={item.id}
                onDelete={onDelete}
                movieIsLiked={movieIsLiked}
              />
            ))
          : " "}
      </section>
      <MoreButton onClick={loadMore} />

      {notFoundMovies ? (
        <h2 className="moviesCardList__notfound">Ничего не найдено</h2>
      ) : (
        ""
      )}
    </>
  );
}

export default MoviesCardList;
