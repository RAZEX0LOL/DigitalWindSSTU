import React from "react";
import logo from "../../assets/Group 86.svg";
import Vector from "../../assets/Vector.svg";
import icon2 from "../../assets/icon2.svg";
import exit from "../../assets/exit.svg";
import "../../index.css";
import { useNavigate } from "react-router-dom";

export default function HeaderJury({ handleWorksClick, handleLoginChangeClick }) {
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
                    <p className="header__nav" onClick={handleWorksClick}>Список работ</p>
                    <p className="header__nav" onClick={handleLoginChangeClick}>Мои данные</p>
                </div>
            </nav>
        </header>
    );
}
