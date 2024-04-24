import React from "react";
import GR199 from "../assets/Group 199.png";
import sib from "./../assets/1.png";
import neo from "./../assets/2.png";
import museum from "./../assets/museum 1.png";
import ssl from "./../assets/7.png";

export default function Partners(props){
    return(
        <div className={"partners-block"}>
            <img src={GR199} alt="Error"/>
            <div className={"partners"}>
                <div className={"partner"}>
                    <img src={sib} alt="Error"/>
                </div>
                <div className={"partner"}>
                    <img src={neo} alt="Error"/>
                </div>
                <div className={"partner"}>
                    <img src={museum} alt="Error"/>
                </div>
                <div className={"partner"}>
                    <img src={ssl} alt="Error"/>
                </div>
            </div>
            <div className={"button-all-partners"}>
                <p onClick={()=>props.showAllOrganizatorsAndPartners()}>Подробнее</p>
            </div>
        </div>
    );
}