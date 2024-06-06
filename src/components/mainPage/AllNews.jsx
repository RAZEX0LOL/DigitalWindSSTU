import React from "react";
import GR103 from "../../assets/Group 103.png";
import "../../index.css";
import unplash from "../../assets/unsplash_g1Kr4Ozfoac.png";

export default function AllNews(props) {
    return (
        <div className={"all-news-block"}>
            <img src={GR103} alt="Error" />
            <div className={"news"}>
                {props.allNewsData.map((newsItem, index) => (
                    <div key={index} className={"new"}>
                        <div className={"new-text-img"}>
                            <img src={unplash} alt="Error" />
                            <p>{newsItem.title}</p>
                            <p>{newsItem.text}</p>
                        </div>
                        <div className={"footer-new"}>
                            <div className={"footer-new-date"}>
                                <p>{newsItem.date}</p>
                            </div>
                            <div className={"new-info"}>
                                <p>Подробнее</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
