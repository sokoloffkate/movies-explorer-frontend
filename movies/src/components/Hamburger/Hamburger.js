import React from "react";
import { Link } from "react-router-dom";

function Hamburger ({ hamburgerOpen, setHamburgerOpen }) {


function onCloseMenu () {
    setHamburgerOpen(!hamburgerOpen);
}

    return (
        <section className="hamburger">
            <div className="hamburger__overlay"></div>
            <div className="hamburger__content">
                <button type="button" className="hamburger__content-btn-close" onClick={onCloseMenu}/>
                <div className="hamburger__content-block">
                  <nav className="hamburger__content-movies">
                    <Link to="/" className="hamburger__content-movies-item" target="_blank">Главная</Link>
                    <Link to="/movies" className="hamburger__content-movies-item hamburger__content-movies-item_decoration" target="_blank">Фильмы</Link>
                    <Link to="/saved-movies" className="hamburger__content-movies-item" target="_blank" >Сохранённые фильмы</Link>
             </nav>  
             <div className="hamburger__content-profile"> 
                 <Link to="/profile" className="hamburger__content-profile-link" target="_blank">Аккаунт</Link>
                 <button type="button" className="hamburger__content-profile-icon" />
              </div>  
              </div>
             </div>   
        </section>
       
       
    )
}

export default Hamburger;