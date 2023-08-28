import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import MoreButton from "../MoreButton/MoreButton";

function SavedMovies({
  filterMovies,
  savedMovies,
  inputValue,
  setInputValue,
  errors,
  errMessage,
  onSearch,
  onDelete,
}) {
  return (
    <main className="savedMovies">
      <Header />
      <SearchForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        errors={errors}
        errMessage={errMessage}
        onSearch={onSearch}
      />
      <MoviesCardList savedMovies={savedMovies} onDelete={onDelete} />
      <MoreButton />
      <Footer />
    </main>
  );
}

export default SavedMovies;
