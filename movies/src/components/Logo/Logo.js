import React from "react";
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';


function Logo () {
    return (
        <section className="logo">
         <Link to='/' className="logo__link">  
           <img src={logo} className="logo__link-img" alt="Логотип"></img>
         </Link>  
       </section>
       
    )
}
export default Logo;