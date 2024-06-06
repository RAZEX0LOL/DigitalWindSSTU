import React from "react";
import GR91 from "../../assets/Group 91.png";
import SGTU from "../../assets/SGTULOGO.png";
import INPIT from "../../assets/logo_inpit 1.png";


export default function Authors(props){
    return(
        <div className={"authors"}>
            <img src={GR91} alt="Error"/>
            <div className={"sgtu-authors"}>
                <div className={"sstu"}>
                    <img src={SGTU} alt="Error"/>
                </div>
                <div className={"inpit"}>
                    <img src={INPIT} alt="Error"/>
                </div>
            </div>
            <div className={"all-authors"}>
                <p onClick={()=>props.showAllContacts()}>Подробнее</p>
            </div>
        </div>
    );
}