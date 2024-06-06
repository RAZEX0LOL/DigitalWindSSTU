import React from "react";
import "../../index.css";
import GR20 from "../../assets/Group 20.png";
import GR21 from "../../assets/Group 21.png";
import GR99 from "../../assets/Group 99.png";
import F5 from "../../assets/Frame 5.svg";
import GR23 from "../../assets/Group 23.svg";
import F7 from "../../assets/Frame 7.svg";

export default function Nominations(){
    return(
        <div className={"nominations"}>
            <div className={"theme-nomination"}>
                <img src={GR20} alt="Error"/>
                <p>Тематический сайт</p>
            </div>
            <div className={"theme-nomination"}>
                <img src={GR21} alt="Error"/>
                <p>Двумерная статичная
                    графика
                </p>
            </div>
            <div className={"theme-nomination"}>
                <img src={GR99} alt="Error"/>
                <p>Двумерная анимация</p>
            </div>
            <div className={"theme-nomination"}>
                <img src={F5} alt="Error"/>
                <p>Трехмерная статичная
                    графика</p>
            </div>
            <div className={"theme-nomination"}>
                <img src={GR23} alt="Error"/>
                <p>Компьютерные
                    игры</p>
            </div>
            <div className={"theme-nomination"}>
                <img src={F7} alt="Error"/>
                <p>Специальная номинация
                    «Фотозарисовка»</p>
            </div>
        </div>
    );
}