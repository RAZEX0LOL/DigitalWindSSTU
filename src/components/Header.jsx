import React from "react";
import logo from "../assets/Group 86.svg";
import Vector from "../assets/Vector.svg";
import icon2 from "../assets/icon2.svg";
import exit from "../assets/exit.svg";
import "../index.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../router.config";

export default function Header(props) {
  const handleLogoClick = () => {
    props.showMainPage();
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
          <img src={exit} alt="Error" className="exit" onClick={props.handleLogout} />
        </div>

        <div className="header_nav_info_main">
          <p className="header__nav" onClick={props.showNews}>Новости</p>
          <p className="header__nav" onClick={props.showAllCatalog}>Каталог работ</p>
          <p className="header__nav" onClick={props.showAllInfo}>Информация</p>
          <p className="header__nav" onClick={props.showAllContacts}>Контакты</p>
          {/* TODO: после рефакторинга недороутинга, вынести все в конфиг роутинга */}
          <Link className="header__nav" to={ROUTES.pages.events}>{ROUTES.labels.events}</Link>
          <p className="header__nav" onClick={props.showAllOrganizatorsAndPartners}>Организаторы и партнеры</p>
        </div>
      </nav>
    </header>
  );
}
