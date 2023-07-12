import React from "react";
import { Link } from "react-router-dom";

function Hamburger () {
    return (
        <section className="hamburger">
            <div className="hamburger__content">
                <button type="button" className="hamburger__content-btn-close"/>
             <div className="hamburger__content-movies">
               <Link to="/" className="hamburger__content-movies-item">Главная</Link>
               <Link to="/movies" className="hamburger__content-movies-item">Фильмы</Link>
               <Link to="/saved-movies" className="hamburger__content-movies-item">Сохранённые фильмы</Link>
              </div>  
             <div className="hamburger__content-profile"> 
                 <Link to="/profile" className="hamburger__content-profile-link">Аккаунт</Link>
                 <button type="button" className="hamburger__content-profile-icon" />
              </div>  
             </div>   
        </section>
       
       
    )
}

export default Hamburger;