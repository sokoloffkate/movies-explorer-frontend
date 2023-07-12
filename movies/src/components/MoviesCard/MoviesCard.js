import React from "react";
import picMovie from '../../images/picMovie.svg'
import { useLocation } from "react-router-dom";

function MoviesCard () {
  
    const location = useLocation();
    const icon = location.pathname === '/movies' ? 
    ' moviesCard__description-button moviesCard__description-button_active' 
    : 'moviesCard__description-button moviesCard__description-button_close'; 

    return (
        <section className="moviesCard">
             <div className="moviesCard__poster">
                <img className="moviesCard__poster-img" src={picMovie} alt="Постер"></img>
            </div>
             <div className="moviesCard__description">
               <h2 className="moviesCard__description-title">33 слова о дизайне</h2>
               <button className={icon}></button>
             </div>
            <span className="moviesCard__description-duration">1ч 42м</span>
                       
        </section>   

  )  
}

export default MoviesCard;