import React from "react";
import Logo from "../Logo/Logo";
import { Link } from 'react-router-dom';

function Login () {
    return (
        <section className="login">
            <div className="login__content">
              <div className="login__header">
                <Logo />
                <h1 className="login__title">Рады видеть!</h1>
             </div>  
            <form className="login__form">

               <fieldset className="login__form-fieldset">
                  
                 <label className="login__form-label">
                     E-mail
                    <input
                    type="text"
                    className="login__form-input"
                  />
                 </label>

                 <label className="login__form-label">
                    Пароль
                    <input
                    type="text"
                    className="login__form-input"
                  />
                 </label>

                 <button
                   type="submit"
                   className="login__form-button"
                 >
                  Войти
                 </button>
               </fieldset>
               <div className="login__form-go-to-signin">
                 <p className="login__form-text">Ещё не зарегистрированы?</p>
                  <Link to='/signup' className="login__form-link">Регистрация</Link>
               </div>
              
              </form> 
           </div>        
        </section>
       
    )
}
export default Login;