import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import MoreButton from "../MoreButton/MoreButton";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Movies() {
  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser);

  return (
    <main className="movies">
      <Header />
      <SearchForm />
      <MoviesCardList />
      <MoreButton />
      <Footer />
    </main>
  );
}

export default Movies;
