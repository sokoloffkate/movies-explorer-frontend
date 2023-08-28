import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { MoviesContext } from "../../contexts/MoviesContext";
import { Route, Switch, useHistory } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
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
import * as beatfilm from "../../utils/MoviesApi";
import { useState, useEffect } from "react";
import { useViewport } from "../../utils/resize";
import { getFilterMovies, getShortMovies } from "../../utils/search";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [userRegister, setUserRegister] = useState(false);
  const [movies, setMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [inputValue, setInputValue] = useState("");
  const isLogin = JSON.parse(localStorage.getItem("isUserLogin"));
  const [mp, setMp] = useState(0);
  const [mpm, setMpm] = useState(0);
  const [filterMovies, setFilterMovies] = useState(
    JSON.parse(localStorage.getItem("isMovies_Filter_Key")) || []
  );
  const [shortMovies, setShortMovies] = useState(
    JSON.parse(localStorage.getItem("isShortMovies_Filter_Key")) || []
  );
  const [restMoreMovies, setRestMoreMovies] = useState([]);
  const [showMoreMovies, setShowMoreMovies] = useState(false);
  const [savedMovies, setSavedMovies] = useState(
    JSON.parse(localStorage.getItem("isSaved_Movies_Key")) || []
  );
  const { width } = useViewport();

  const [notFoundMovies, setNotFounfMovies] = useState(false);

  const [errors, setErrors] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [isToggled, setIsToggled] = useState(false);

  const handlePopUpClick = () => {
    setPopUpOpen(!isPopUpOpen);
  };

  const history = useHistory();

  const handleRegister = (name, email, password) => {
    api
      .register(name, email, password)
      .then((data) => {
        setUserRegister(true);
        history.push("/signin");
      })
      .catch((err) => {
        setUserRegister(false);
        console.log(`Ошибка - ${err}`);
      });
  };

  const handleAuth = (email, password) => {
    api
      .login(email, password)
      .then((data) => {
        localStorage.setItem("isUserLogin", true);
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        handlePopUpClick();
        console.log(`Ошибка - ${err}`);
      });
  };

  useEffect(() => {
    if (isLogin) {
      api.getUser().then((data) => {
        setCurrentUser({ name: data.name, email: data.email });
        setLoggedIn(true);
      });
    }
  }, [isLogin]);

  useEffect(() => {
    if (loggedIn)
      beatfilm.getMovies().then((data) => {
        //setSavedMovies(data.filter((m) => m.owner_id === currentUser._id));
        setMovies(data);
      });
  }, [loggedIn]);

  const checkIsMoviesNotFound = (m) => {
    if (!m.length) {
      return setNotFounfMovies(true);
    } else {
      return setNotFounfMovies(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    try {
      if (inputValue.trim().length !== 0) {
        const arr = getFilterMovies(movies, inputValue);
        setFilterMovies(arr);
        checkIsMoviesNotFound(arr);
        setErrors(false);
      } else {
        throw "Нужно ввести ключевое слово";
      }
    } catch (e) {
      setErrors(true);
      setErrMessage(e);
    }
  };

  const handleSavedSearch = (e) => {
    e.preventDefault();
    try {
      if (inputValue.trim().length !== 0) {
        const arr = getFilterMovies(savedMovies, inputValue);
        setSavedMovies(arr);
        checkIsMoviesNotFound(arr);
        setErrors(false);
      } else {
        throw "Нужно ввести ключевое слово";
      }
    } catch (e) {
      setErrors(true);
      setErrMessage(e);
    }
  };

  useEffect(() => {
    localStorage.setItem("isMovies_Filter_Key", JSON.stringify(filterMovies));
  }, [filterMovies]);

  const handleSearchShortMovies = (e) => {
    const shortArr = getShortMovies(movies);
    setShortMovies(shortArr);
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    localStorage.setItem(
      "isShortMovies_Filter_Key",
      JSON.stringify(shortMovies)
    );
  }, [shortMovies]);

  useEffect(() => {
    if (width > 1279) {
      setMp(12);
      setMpm(4);
    } else if (width > 768 && width < 1279) {
      setMp(8);
      setMpm(3);
    } else {
      setMp(5);
      setMpm(2);
    }
  }, [width]);

  useEffect(() => {
    setRestMoreMovies(filterMovies.slice(mp));
  }, [filterMovies, mp]);

  const getMoreMovies = () => {
    setShowMoreMovies(true);
  };
  const handleUpdateUserProfile = ({ name, email }) => {
    api.updateUserProfile({ name, email }).then((newDataUser) => {
      setCurrentUser({
        ...newDataUser,
        name: newDataUser.name,
        email: newDataUser.email,
      });
    });
  };

  const handleSavedMovie = (newMovie) => {
    api
      .addNewMovie(newMovie)
      .then((movie) => {
        const newSavedMovies = [movie, ...savedMovies];
        setSavedMovies(newSavedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteMovies = (m) => {
    console.log(m);
    const movie = savedMovies.find((i) => i.movieId === m.id);
    api.deleteMovie(movie._id).then((n) => {
      setSavedMovies([...savedMovies.filter((m) => m._id !== movie._id)]);
    });
  };

  const handleSavedDeleteMovies = (m) => {
    api.deleteMovie(m._id).then((n) => {
      console.log(n);
      setSavedMovies([...savedMovies.filter((s) => s._id !== m._id)]);
      console.log(savedMovies);
    });
  };
  console.log(savedMovies);

  useEffect(() => {
    localStorage.setItem("isSaved_Movies_Key", JSON.stringify(savedMovies));
  }, [savedMovies]);

  const handleLogOut = () => {
    api.logOut().then(() => {
      localStorage.clear();
      setCurrentUser({ name: " ", email: " " });
      setLoggedIn(false);
      history.push("/");
    });
  };

  console.log(savedMovies);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <MoviesContext.Provider value={movies}>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Header loggedIn={loggedIn} />
              <Main />
              <Footer />
            </Route>

            <Route exact path="/signup">
              <Register onRegister={handleRegister} />
            </Route>

            <Route exact path="/signin">
              <Login onLogin={handleAuth} />
            </Route>

            <ProtectedRoute
              path="/profile"
              component={Profile}
              loggedIn={loggedIn}
              onUpdateUser={handleUpdateUserProfile}
              onLogOut={handleLogOut}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/movies"
              component={Movies}
              loggedIn={loggedIn}
              inputValue={inputValue}
              setInputValue={setInputValue}
              errors={errors}
              errMessage={errMessage}
              onSearch={handleSearch}
              onSwitch={handleSearchShortMovies}
              isToggled={isToggled}
              filterMovies={filterMovies}
              notFoundMovies={notFoundMovies}
              restMoreMovies={restMoreMovies}
              mp={mp}
              mpm={mpm}
              showMoreMovies={showMoreMovies}
              getMoreMovies={getMoreMovies}
              shortMovies={shortMovies}
              onSaved={handleSavedMovie}
              savedMovies={savedMovies}
              onDelete={handleDeleteMovies}
            ></ProtectedRoute>

            <ProtectedRoute
              path="/saved-movies"
              component={SavedMovies}
              loggedIn={loggedIn}
              savedMovies={savedMovies}
              inputValue={inputValue}
              setInputValue={setInputValue}
              errors={errors}
              errMessage={errMessage}
              onSearch={handleSavedSearch}
              onDelete={handleSavedDeleteMovies}
            ></ProtectedRoute>

            <Route path="*" component={Error} />
          </Switch>

          {/* <InfoPopUp
          name={"popup_info"}
          isOpen={isPopUpOpen}
          onClose={closeAllPopups}
          images={userRegister ? Success : Failure}
          text={
            userRegister
              ? "Вы успешно зарегистрировались"
              : "Что-то пошло не так! Попробуйте ещё раз."
          }
        ></InfoPopUp>*/}
        </div>
      </MoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
