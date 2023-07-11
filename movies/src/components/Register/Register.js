import React from "react";
import Logo from "../Logo/Logo";
import { Link } from 'react-router-dom';

function Register () {
    return (
        <section className="register">
            <div className="register__content">
              <div className="register__header">
                <Logo />
                <h1 className="register__title">Добро пожаловать!</h1>
             </div>  
            <form className="register__form">

               <fieldset className="register__form-fieldset">
                  <label className="register__form-label">
                     Имя
                    <input
                    type="text"
                    className="register__form-input"
                  />
                 </label>

                 <label className="register__form-label">
                     E-mail
                    <input
                    type="text"
                    className="register__form-input"
                  />
                 </label>

                 <label className="register__form-label">
                    Пароль
                    <input
                    type="text"
                    className="register__form-input"
                  />
                 </label>

                 <button
                   type="submit"
                   className="register__form-button"
                 >
                  Зарегистрироваться
                 </button>
               </fieldset>
               <div className="register__form-go-to-signin">
                 <p className="register__form-text">Уже зарегистрированы?</p>
                  <Link to='/signin' className="register__form-link">Войти</Link>
               </div>
              
              </form> 
           </div>        
        </section>
       
    )
}
export default Register;