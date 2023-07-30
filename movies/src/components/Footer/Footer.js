import React from "react";

function Footer() {
    return (
        <footer className="footer">
           <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
           <div className="footer__info">
            <p className="footer__info-text">© 2020</p>
            <div className="footer__info-links">
            <a className="footer__info-link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
            <a className="footer__info-link" href="https://github.com/sokoloffkate" target="_blank" rel="noreferrer">Github</a>
           </div>
           </div>
        </footer>
     )
}

export default Footer;