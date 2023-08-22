import React from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

function Header() {
  const location = useLocation();

  const header =
    location.pathname === "/" ? "header" : "header header_profile-background";

  return (
    <header className={header}>
      <Logo />
      <Navigation />
    </header>
  );
}
export default Header;
