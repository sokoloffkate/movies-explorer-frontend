import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Error from '../Error404/Error404';

function App() {
  
 return (
    <div className="page">
      
        <Switch>

         <Route exact path = '/'>
           <Header />
           <Main />
           <Footer />
         </Route> 

         <Route exact path = '/signup' component={Register} />

         <Route exact path = '/signin' component={Login} />

         <Route exact path = '/profile' component={Profile} />

         <Route exact path = '/movies' component={Movies} />

         <Route exact path = '/saved-movies' component={SavedMovies} />

         <Route path = "*" component={Error} />
            
        </Switch>
            
    </div>
  );
}

export default App;
