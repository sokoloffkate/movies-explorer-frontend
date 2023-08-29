import React from "react";
import { useLocation } from "react-router-dom";
import { movies_url } from "../../utils/constants";

function MoviesCard({ item, onSaved, savedMovies, onDelete, movieIsLiked }) {
  movieIsLiked(item);
  const { nameRU, duration } = item;

  const handleClickPage = () => {

  };

  const convertMinsToHours = (min) => {
    let hours = Math.floor(min / 60);
    let minutes = min % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}ч:${minutes}мин`;
  };

  const onSavedMovies = () => {
    onSaved({
      country: item.country,
      director: item.director,
      duration: item.duration,
      year: item.year,
      description: item.description,
      image: `${movies_url}${item.image.url}`,
      trailerLink: item.trailerLink,
      nameRU: item.nameRU,
      nameEN: item.nameEN,
      thumbnail: `${movies_url}${item.image.previewUrl}`,
      movieId: item.id,
    });
  };

  const onDeleteMovies = () => {
    onDelete(item);
  };

  const location = useLocation();
  const moviesLocation = location.pathname === "/movies";

  const icon = movieIsLiked(item)
    ? "moviesCard__description-button moviesCard__description-button_active"
    : "moviesCard__description-button moviesCard__description-button_inactive";

  const iconDelete =
    location.pathname === "/saved-movies"
      ? "moviesCard__description-button moviesCard__description-button_close"
      : " ";

  return (
    <article className="moviesCard">
      <img
        className="moviesCard__poster"
        src={moviesLocation ? `${movies_url}${item.image.url}` : item.image}
        alt="Постер"
        onClick={handleClickPage}
      ></img>

      <div className="moviesCard__description">
        <h2 className="moviesCard__description-title">{nameRU}</h2>
        {}
        {moviesLocation ? (
          <button
            type="submit"
            className={icon}
            onClick={() =>
              movieIsLiked(item) ? onDeleteMovies() : onSavedMovies()
            }
          ></button>
        ) : (
          <button
            type="submit"
            className={iconDelete}
            onClick={() => onDeleteMovies()}
          ></button>
        )}
      </div>
      <span className="moviesCard__description-duration">
        {convertMinsToHours(duration)}
      </span>
    </article>
  );
}

export default MoviesCard;
