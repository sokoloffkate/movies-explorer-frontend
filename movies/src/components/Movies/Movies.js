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
  onSaved,
  savedMovies,
  onDelete,
  clickMoreBtn
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
        onSaved={onSaved}
        savedMovies={savedMovies}
        onDelete={onDelete}
        clickMoreBtn={clickMoreBtn}
      />
      <MoreButton getMoreMovies={getMoreMovies} clickMoreBtn={clickMoreBtn} />
      <Footer />
    </main>
  );
}

export default Movies;
