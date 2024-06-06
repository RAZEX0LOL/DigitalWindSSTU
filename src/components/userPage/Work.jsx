import React from "react";
import WorkImg from "../../assets/workImg.svg";
import "../../styles/UserPageStyle.css";

export default function Work({onViewClick}){
    return(

        <div className={"work-block"}>
            <img src={WorkImg} alt="WorkImg"/>
            <div className={"work-text"}>
                <p>Название работы</p>
                <p>Фамилия Имя Отчество</p>
            </div>
            <button onClick={onViewClick}>Посмотреть работу</button>
        </div>
    );
}