import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import MoreButton from "../MoreButton/MoreButton";

function Movies({
  inputValue,
  setInputValue,
  errors,
  errMessage,
  onSearch,
  filterMovies,
  notFoundMovies,
  restMoreMovies,
  mp,
  mpm,
  showMoreMovies,
  getMoreMovies,
  shortMovies,
  isToggled,
  onSwitch,
  onLike,
  savedMovies,
  onDelete
}) {
  return (
    <main className="movies">
      <Header />
      <SearchForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        errors={errors}
        errMessage={errMessage}
        onSearch={onSearch}
        showMoreMovies={showMoreMovies}
        isToggled={isToggled}
        onSwitch={onSwitch}
      />
      <MoviesCardList
        filterMovies={filterMovies}
        notFoundMovies={notFoundMovies}
        restMoreMovies={restMoreMovies}
        mp={mp}
        mpm={mpm}
        showMoreMovies={showMoreMovies}
        shortMovies={shortMovies}
        isToggled={isToggled}
        onLike={onLike}
        savedMovies={savedMovies}
        onDelete={onDelete}
      />
      <MoreButton getMoreMovies={getMoreMovies} />
      <Footer />
    </main>
  );
}

export default Movies;
