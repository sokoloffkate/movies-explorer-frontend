import React from "react";
import Logo from "../Logo/Logo";
import { Link, useLocation } from 'react-router-dom';


function FormInputs ({ title, children, btnName, text, link, linkTitle }) {

    const location = useLocation();
    const btnClass = location.pathname === '/signup' ? 
    'formInputs__content-form-fieldset-button formInputs__content-form-fieldset-button_margin-register' 
    : 'formInputs__content-form-fieldset-button'; 

      return (
        <section className="formInputs">
            <div className="formInputs__content">
              <div className="formInputs__content-header">
                <Logo />
                <h1 className="formInputs__content-title">{`${title}`}</h1>
             </div>  
            <form action="submit" className="formInputs__content-form">
              <fieldset className="formInputs__content-form-fieldset">
                {children}
                <button
                  type="submit"
                  className={btnClass}
                 >
                {`${btnName}`}
                 </button>
             </fieldset>

               <div className="formInputs__content-form-go-to-sign">
                 <p className="formInputs__content-form-text">{`${text}`}</p>
                 <Link to={`${link}`} className="formInputs__content-form-link">{`${linkTitle}`}</Link>
               </div>
              
              </form> 
           </div>        
        </section>
       
    )
}
export default FormInputs;
