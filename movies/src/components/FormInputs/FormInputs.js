import React from "react";
import Logo from "../Logo/Logo";
import { Link, useLocation } from 'react-router-dom';


function FormInputs ({ title, children, btnName, text, link, linkTitle }) {

    const location = useLocation();
    const btnClass = location.pathname === '/signup' ? 
    'formInputs__form-button formInputs__form-button-margin-register' 
    : 'formInputs__form-button'; 

      return (
        <section className="formInputs">
            <div className="formInputs__content">
              <div className="formInputs__header">
                <Logo />
                <h1 className="formInputs__title">{`${title}`}</h1>
             </div>  
            <form className="formInputs__form">
              <fieldset className="formInputs__form-fieldset">
                {children}
                <button
                  type="submit"
                  className={btnClass}
                 >
                {`${btnName}`}
                 </button>
             </fieldset>

               <div className="formInputs__form-go-to-sign">
                 <p className="formInputs__form-text">{`${text}`}</p>
                 <Link to={`${link}`} className="formInputs__form-link">{`${linkTitle}`}</Link>
               </div>
              
              </form> 
           </div>        
        </section>
       
    )
}
export default FormInputs;
