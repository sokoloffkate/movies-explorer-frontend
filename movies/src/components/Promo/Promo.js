import React from "react";
import promoLogo from '../../images/promoLogo.svg'
import NavTab from "../NavBar/NavBar";

function Promo () {
    return (
      <>
        <section className="promo">
           <img src={promoLogo} className="promo__logo" alt="pic"></img>
           <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        </section>
        <NavTab />
      </> 
      )
};

export default Promo;