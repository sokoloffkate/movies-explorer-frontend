import React from "react";


function AboutProject () {

    return (
       
        <main className="about-project" id="aboutProject">
           <h2 className="about-project__title">О проекте</h2>
            <ul className="about-project__info">
             <li className="about-project__info-item">
                <h3 className="about-project__info-item-title">Дипломный проект включал 5 этапов</h3>
                <p className="about-project__info-item-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
             </li>
             <li className="about-project__info-item">
                <h3 className="about-project__info-item-title">На выполнение диплома ушло 5 недель</h3>
                <p className="about-project__info-item-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </li>
           </ul>
           <ul className="about-project__time">
             <li className="about-project__time-item">
                <h4 className="about-project__time-item-title about-project__time-item_green">1 неделя</h4>
                <p className="about-project__time-item-description">Back-end</p>
             </li>
             <li className="about-project__time-item">
                <h4 className="about-project__time-item-title about-project__time-item_gray">4 недели</h4>
                <p className="about-project__time-item-description">Front-end</p>
             </li>
           </ul>

        </main>
       
       
    )
}

export default AboutProject;