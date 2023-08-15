import { Route, Switch, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Error from '../Error404/Error404';
import * as auth from "../../utils/Auth";
import { useCallback, useState } from 'react';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("")
  const [userRegister, setUserRegister] = useState(false);
  const history = useHistory();
  const [isPopUpOpen, setPopUpOpen] = useState(false);

  const handlePopUpClick = () => {
    setPopUpOpen(!isPopUpOpen);
  };

  const handleAuth = useCallback(
    (email, password) => {
      auth
        .login(email, password)
        .then((data) => {
          setLoggedIn(true);
          setUserEmail(email);
          localStorage.setItem("jwt", data.token)
           })
        .catch((err) => {
          
          handlePopUpClick();
          console.log(`Ошибка - ${err}`);
        });
    },
    [handlePopUpClick]
  );

  const handleRegister = useCallback(
    (name, email, password) => {
      auth
        .register(name, email, password)
        .then((data) => {
          console.log(data);
          handlePopUpClick();
          setUserName(data.name);
          setUserEmail(data.email);
        })
        .catch((err) => {
          
          handlePopUpClick();
          console.log(`Ошибка - ${err}`);
        })
        .finally(() => history.push("/signin"));
    },
    [history, handlePopUpClick]
  );

  
   return (
    <div className="app">
      
        <Switch>

         <Route exact path = '/'>
           <Header />
           <Main />
           <Footer />
         </Route> 

         <Route exact path = '/signup'>
           <Register
             isLoggedIn={loggedIn}
             onRegister={handleRegister}
          /> 
        </Route> 

         <Route exact path = '/signin' component={Login} isLoggedIn={loggedIn} onLogin={handleAuth} />

         <Route exact path = '/profile' component={Profile} />

         <Route exact path = '/movies' component={Movies}   />

         <Route exact path = '/saved-movies' component={SavedMovies} />

         <Route path = "*" component={Error} />
            
        </Switch>
            
    </div>
  );
}

export default App;
