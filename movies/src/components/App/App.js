import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Error from "../Error404/Error404";
import * as api from "../../utils/MainApi";
import { useState, useEffect } from "react";
import { InfoPopUp } from "../InfoPopUp/InfoPopUp";
import Success from "../../images/Success.svg";
import Failure from "../../images/Failure.svg";
//import { TOKEN_KEY } from "../../utils/constants";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [userRegister, setUserRegister] = useState(false);
 
  const [currentUser, setCurrentUser] = useState({});
  

  const history = useHistory();

  const isLogin = JSON.parse(localStorage.getItem('isUserLogin'));

  const handlePopUpClick = () => {
    setPopUpOpen(!isPopUpOpen);
  };

  const closeAllPopups = () => {
    setPopUpOpen(false);
  };

  const handleAuth = (email, password) => {
    api
      .login(email, password)
      .then((data) => {
        localStorage.setItem('isUserLogin', true)
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        handlePopUpClick();
        console.log(`Ошибка - ${err}`);
      });
  };

  console.log(isLogin)

  const handleRegister = (name, email, password) => {
    api
      .register(name, email, password)
      .then((data) => {
        handlePopUpClick();
        setUserRegister(true);
        history.push("/signin");
      })
      .catch((err) => {
        handlePopUpClick();
        setUserRegister(false);
        console.log(`Ошибка - ${err}`);
      });
  };

  useEffect(() => {
    if (isLogin) {
      console.log('All is worked');
      api.getUser()
    }
  }, [isLogin])

  /*useEffect(() => {
    if (isLogin) {
      console.log(isLogin);
      api
        .getUser()
        .then((userData) => {
          console.log(userData);
          setCurrentUser(userData.data);
        })
        .catch((err) => {
          console.log(`Ошибка - ${err}`);
        });
    }
  }, [isLogin]);*/

  console.log(currentUser)

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Main />
            <Footer />
          </Route>

          <Route exact path="/signup">
            <Register onRegister={handleRegister} />
          </Route>

          <Route exact path="/signin">
            <Login onLogin={handleAuth} />
          </Route>

          <Route exact path="/profile" component={Profile} />

          <Route exact path="/movies" component={Movies} />

          <Route exact path="/saved-movies" component={SavedMovies} />

          <Route path="*" component={Error} />
        </Switch>

        <InfoPopUp
          name={"popup_info"}
          isOpen={isPopUpOpen}
          onClose={closeAllPopups}
          images={userRegister ? Success : Failure}
          text={
            userRegister
              ? "Вы успешно зарегистрировались"
              : "Что-то пошло не так! Попробуйте ещё раз."
          }
        ></InfoPopUp>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
