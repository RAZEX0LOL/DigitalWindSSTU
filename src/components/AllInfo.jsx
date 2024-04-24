import React from "react";
import GR94 from "../assets/Group 111.png";
import "./../index.css";

export default function AllInfo(){
    return(
        <div className={"all-info-block"}>
            <img src={GR94} alt="Error"/>
            <div className={"info-url-block"}>
                <a href={""}>Положение Цифровой ветер 2024.pdf</a>
                <br/>
                <br/>
                <a href={""}>Результаты Цифровой ветер 2024.pdf</a>
            </div>
        </div>
    );
}