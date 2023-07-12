import React from "react";
import Header from '../Header/Header';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import MoreButton from "../MoreButton/MoreButton";

function Movies () {

    return (
        <section className="movies">
            
            <Header />
            <SearchForm />
            <MoviesCardList />
            <MoreButton />
            <Footer />

        </section>   

  )  
}

export default Movies;
