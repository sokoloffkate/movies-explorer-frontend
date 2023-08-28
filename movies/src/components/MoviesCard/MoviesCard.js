import React from "react";
import { useLocation } from "react-router-dom";
import { movies_url } from "../../utils/constants";

function MoviesCard({ item, onLike, savedMovies, movieIsLiked, onDelete }) {
  const { nameRU, duration } = item;

  const convertMinsToHours = (min) => {
    let hours = Math.floor(min / 60);
    let minutes = min % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}ч:${minutes}мин`;
  };

  function handleLikeClick() {
    onLike({
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
  }

  const location = useLocation();
  const icon =
    !movieIsLiked(item)
      ? "moviesCard__description-button moviesCard__description-button_inactive"
      : " moviesCard__description-button moviesCard__description-button_active";

 const iconDelete = location.pathname==="/saved-movies" ? "moviesCard__description-button moviesCard__description-button_close" : " "; 
console.log(movieIsLiked(item))
  return (
    <article className="moviesCard">
      <img
        className="moviesCard__poster"
        src={
          location.pathname === "/movies"
            ? `${movies_url}${item.image.url}`
            : item.image
        }
        alt="Постер"
      ></img>

      <div className="moviesCard__description">
        <h2 className="moviesCard__description-title">{nameRU}</h2>
        {}
        <button
          type="submit"
          className={location.pathname === "/movies" ? icon : iconDelete}
          onClick={() => (movieIsLiked(item) ? onDelete(item) : handleLikeClick(item))}
        ></button>
      </div>
      <span className="moviesCard__description-duration">
        {convertMinsToHours(duration)}
      </span>
    </article>
  );
}

export default MoviesCard;
