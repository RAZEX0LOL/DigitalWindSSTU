import React from "react";
import Info from "./Info";
import Nominations from "./Nominations";
import News from "./News";
import Authors from "./Authors";
import Partners from "./Partners";
import AllNews from "./news/AllNews";  // Из ветки news
import { Events } from "./Events";  // Из ветки master

export default function MainPage(props) {
    return (
        <div className={"main-block"}>
            <Events />  {/* Компонент Events */}
            <Info />
            <Nominations />
            <AllNews newsData={props.newsData} showNews={props.showNews} />  {/* Компонент AllNews */}
            <Authors showAllContacts={props.showAllContacts} />
            <Partners showAllOrganizatorsAndPartners={props.showAllOrganizatorsAndPartners} />
        </div>
    );
}