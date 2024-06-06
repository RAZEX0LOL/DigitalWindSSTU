import React from "react";
import Info from "./Info";
import Nominations from "./Nominations";
import News from "./News";
import Authors from "./Authors";
import Partners from "./Partners";

export default function MainPage(props){
    return(
        <div className={"main-block"}>
            <Info/>
            <Nominations/>
            <News newsData={props.newsData} showNews={props.showNews}/>
            <Authors showAllContacts={props.showAllContacts}/>
            <Partners showAllOrganizatorsAndPartners={props.showAllOrganizatorsAndPartners}/>
        </div>
    );
}