import React from "react";

function Portfolio() {
    return (
       
        <main className="portfolio">
          <h3 className="portfolio__title">Портфолио</h3>
          <ul className="portfolio__info">
             <li className="portfolio__info-item">
                <a className="portfolio__info-item-link" href="https://github.com/sokoloffkate/how-to-learn" target="_blank" rel="noreferrer">
                  <p className="portfolio__info-item-title">Статичный сайт</p>
                  <span className="portfolio__info-link-arrow">↗</span>
                </a>
             </li>
             <li className="portfolio__info-item">
                <a className="portfolio__info-item-link" href="https://github.com/sokoloffkate/russian-travel" target="_blank" rel="noreferrer">
                  <p className="portfolio__info-item-title">Адаптивный сайт</p>
                  <span className="portfolio__info-link-arrow">↗</span>
                </a>
             </li>
             <li className="portfolio__info-item">
                <a className="portfolio__info-item-link" href="https://github.com/sokoloffkate/react-mesto-api-full-gha" target="_blank" rel="noreferrer">
                  <p className="portfolio__info-item-title">Одностраничное приложение</p>
                  <span className="portfolio__info-link-arrow">↗</span>
                </a>
             </li>
           </ul>
        </main> 
       
    )
}

export default Portfolio;