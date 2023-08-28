import React from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

function Header({loggedIn}) {
  const location = useLocation();

  const header =
    location.pathname === "/" ? "header" : "header header_profile-background";

  return (
    <header className={header}>
      <Logo />
      <Navigation 
      loggedIn={loggedIn}
      />
    </header>
  );
}
export default Header;
