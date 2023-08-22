import React from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";

function Profile() {
  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser);
  return (
    <section className="profile">
      <Header />

      <div className="profile__content">
        <h1 className="profile__title">Привет, Виталий!</h1>

        <form className="profile__form">
          <div className="profile__form-inputs">
            <label className="profile__form-input-label">Имя</label>
            <input
              type="text"
              className="profile__form-input"
              value="Виталий"
              disabled
            />
          </div>

          <div className="profile__form-inputs">
            <label className="profile__form-input-label">E-mail</label>
            <input
              type="text"
              className="profile__form-input"
              value="pochta@yandex.ru"
              disabled
            />
          </div>

          <div className="profile__form-buttons">
            <button type="submit" className="profile__form-button">
              Редактировать
            </button>
            <button type="button" className="profile__form-button">
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Profile;
