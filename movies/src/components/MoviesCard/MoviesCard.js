import React from "react";
import picMovie1 from '../../images/picMovie1.jpg'
import { useLocation } from "react-router-dom";

function MoviesCard () {
  
    const location = useLocation();
    const icon = location.pathname === '/movies' ? 
    ' moviesCard__description-button moviesCard__description-button_active' 
    : 'moviesCard__description-button moviesCard__description-button_close'; 

    return (

        <article className="moviesCard">

            {/* <div className="moviesCard__poster">*/}
                <img className="moviesCard__poster" src={picMovie1} alt="Постер"></img>
           {/* </div>*/}
             <div className="moviesCard__description">
               <h2 className="moviesCard__description-title">33 слова о дизайggggggggggнеиииииииииииииииииииииииииииииьььььььььььььььььььььььььььььььььььььььььььььььььььььььььььььь</h2>
               <button className={icon}></button>
             </div>
            <span className="moviesCard__description-duration">1ч 42м</span>
                                    
        </article>   

  )  
}

export default MoviesCard;