import React from "react";
import photo from "../../images/photo.jpg"


function AboutMe () {

    return (
      <>
        <main className="aboutMe" id="aboutMe">
           <h2 className="aboutMe__title">Студент</h2>
            <div className="aboutMe__info">
                <h3 className="aboutMe__info-name">Виталий</h3>
                <p className="aboutMe__info-job">Фронтенд-разработчик, 30 лет</p>
                <p className="aboutMe__info-description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <a className="aboutMe__info-link" href="https://github.com/sokoloffkate">Github</a>
                <img src={photo} className="aboutMe__photo" alt="Фото студента"></img>
                </div>
        </main>
       
      </>
    )
}

export default AboutMe;