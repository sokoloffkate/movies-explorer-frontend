import React from "react";
import { useLocation } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import Logo from '../Logo/Logo';

function Header () {

    const location = useLocation();
    console.log(location.pathname);

    const header = location.pathname === '/' ? 'header' : 'header header_profile-background';

    console.log(location);
            
    return (
        <header className={header}>
           <Logo />
           <Navigation />                 
        </header>
       
    )
}
export default Header;