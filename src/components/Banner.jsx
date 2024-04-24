import React from "react";
import "./../index.css";
import unplash from "./../assets/unsplash_-uHVRvDr7pg.svg";
import vector from "./../assets/Vector 18.png";
import rectangle from "./../assets/Rectangle 61.png";
import g22 from "./../assets/Group 22.svg";
import g13 from "./../assets/Group 13.svg";
import wire from "./../assets/wire.svg";

export default function Banner() {
    return (
    <div className={"main"}>
        <div className="main__container">
            <h4 className="main__text">Международный конкурс компьютерных работ для детей, юношества и студенческой молодежи
                "Цифровой ветер"</h4>
            <img src={unplash} alt="Error" className="main__img"/>
            <img src={vector} alt="Error" className="background"/>
            <img src={rectangle} alt="Error" className="background2"/>

            <img src={g22} alt="Error" className="background__thing1"/>
            <img src={g13} alt="Error" className="background__thing2"/>
            <img src={g13} alt="Error" className="background__thing3"/>
            <img src={g13} alt="Error" className="background__thing4"/>
            <img src={g13} alt="Error" className="background__thing5"/>
            <img src={g13} alt="Error" className="background__thing6"/>
            <img src={g13} alt="Error" className="background__thing7"/>
            <img src={g22} alt="Error" className="background__thing8"/>
            <img src={g22} alt="Error" className="background__thing9"/>
            <button className="participate">Стать участником</button>
            <img src={wire} alt="Error" className="main__element"/>
        </div>
    </div>
    );
}