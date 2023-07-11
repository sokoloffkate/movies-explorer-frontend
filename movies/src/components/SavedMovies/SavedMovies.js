import React from "react";
import Header from '../Header/Header';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import MoreButton from "../MoreButton/MoreButton";

function SavedMovies () {

    return (
        <section className="savedMovies">
            
            <Header />
            <SearchForm />
            <MoviesCardList />
            <MoreButton />
            <Footer />

        </section>   

  )  
}

export default SavedMovies;