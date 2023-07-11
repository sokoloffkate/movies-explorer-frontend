import React from "react";


function Techs () {

    return (
       
        <section className="tech" id="techs">
           <h2 className="tech__title">Технологии</h2>
            <div className="tech__info">
              <h3 className="tech__info-title">7 технологий</h3>
              <p className="tech__info-description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
           </div>
           <ul className="tech__list">
             <li className="tech__item">HTML</li>
             <li className="tech__item">CSS</li>
             <li className="tech__item">JS</li>
             <li className="tech__item">React</li>
             <li className="tech__item">Git</li>
             <li className="tech__item">Express.js</li>
             <li className="tech__item">mongoDB</li>
           </ul>

        </section>
         
    )
}

export default Techs;