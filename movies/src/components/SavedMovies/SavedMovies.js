import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import MoreButton from "../MoreButton/MoreButton";

function SavedMovies({
  loggedIn,
  savedMovies,
  inputValue,
  setInputValue,
  filterMovies,
  errors,
  errMessage,
  isToggled,
  onSwitch,
  notFoundMovies,
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
        isToggled={isToggled}
        onSwitch={onSwitch}
      />
      <MoviesCardList
        savedMovies={savedMovies}
        notFoundMovies={notFoundMovies}
        onDelete={onDelete}
       />
      <MoreButton />
      <Footer />
    </main>
  );
}

export default SavedMovies;
