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
  initialRender,
  step,
  notFoundMovies,
  initialMovies,
  loadMore,
  shortMovies,
  isToggled,
  onSwitch,
  onSaved,
  savedMovies,
  onDelete,
  clickMoreBtn,
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
        isToggled={isToggled}
        onSwitch={onSwitch}
      />
      <MoviesCardList
        filterMovies={filterMovies}
        initialRender={initialRender}
        step={step}
        notFoundMovies={notFoundMovies}
        initialMovies={initialMovies}
        loadMore={loadMore}
        shortMovies={shortMovies}
        isToggled={isToggled}
        onSaved={onSaved}
        savedMovies={savedMovies}
        onDelete={onDelete}
        clickMoreBtn={clickMoreBtn}
      />
     {/* <MoreButton />*/}
      <Footer />
    </main>
  );
}

export default Movies;
