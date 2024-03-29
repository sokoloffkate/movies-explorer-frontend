import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import hamburger from "../../images/hamburger.svg";
import Hamburger from "../Hamburger/Hamburger";

function Navigation({ loggedIn }) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav className="navigation">
      <Route exact path="/">
        {loggedIn ? (
          <div className="navigation__main">
            <Link to="/movies" className="navigation__nomain-movie navigation__nomain-movie_weight">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="navigation__nomain-movie">
              Сохранённые фильмы
            </Link>
            <Link to="/profile" className="navigation__nomain-profile-link">
              Аккаунт
            </Link>
          </div>
        ) : (
          <div className="navigation__main">
            <Link to="/signup" className="navigation__main-link">
              Регистрация
            </Link>
            <Link to="/signin" className="navigation__main-link">
              <button className="navigation__main-button">Войти</button>
            </Link>
          </div>
        )}
      </Route>

      <Route exact path={["/profile", "/movies", "/saved-movies"]}>
        <div className="navigation__nomain">
          <div className="navigation__nomain-movies">
            <Link
              to="/movies"
              className="navigation__nomain-movie navigation__nomain-movie_weight"
            >
              Фильмы
            </Link>
            <Link to="/saved-movies" className="navigation__nomain-movie">
              Сохранённые фильмы
            </Link>
          </div>
          <div className="navigation__nomain-profile">
            <Link to="/profile" className="navigation__nomain-profile-link">
              Аккаунт
            </Link>
            <Link
              to="/profile"
              className="navigation__nomain-profile-icon"
              alt="аватар"
            />
          </div>
        </div>
        <div className="navigation__hamburger">
          <img
            src={hamburger}
            className="navigation__hamburger-icon"
            onClick={toggleHamburger}
            alt="меню ссылок"
          ></img>
          {hamburgerOpen ? (
            <Hamburger
              hamburgerOpen={hamburgerOpen}
              setHamburgerOpen={setHamburgerOpen}
            />
          ) : (
            ""
          )}
        </div>
      </Route>
    </nav>
  );
}

export default Navigation;
