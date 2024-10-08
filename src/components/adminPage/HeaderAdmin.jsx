import React from "react";
import logo from "../../assets/Group 86.svg";
import Vector from "../../assets/Vector.svg";
import icon2 from "../../assets/icon2.svg";
import exit from "../../assets/exit.svg";
import "../../index.css";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../router.config";

export default function HeaderJury({ handleJuryClick, handleLoginChangeClick, handleUserClick, handleWorksClick }) {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header>
      <img src={logo} alt="Error" className="mainimg" onClick={handleLogoClick} />
      <nav>
        <div className="header_nav_info_2">
          <p className="header__nav__2">(8452) 99-87-34</p>
          <img src={Vector} alt="Error" className="vk" />
          <p className="header__nav__3">EU</p>
          <img src={icon2} alt="Error" className="person" />
          <img src={exit} alt="Error" className="exit" onClick={handleLogoClick} />
        </div>

        <div className="header_nav_info">
          <p className="header__nav" >Туры</p>
          <p className="header__nav" onClick={handleWorksClick}>Работы</p>
          <p className="header__nav" onClick={handleUserClick}>Участники</p>
          <p className="header__nav" onClick={handleJuryClick}>Жюри</p>
          <p className="header__nav" onClick={handleLoginChangeClick}>Мои данные</p>
          <Link to={ROUTES.pages.adminEvents} className="header__nav">{ROUTES.labels.adminEvents}</Link>
          <Link to={ROUTES.pages.adminNews} className="header__nav">{ROUTES.labels.adminNews}</Link>
        </div>
      </nav>
    </header>
  );
}
