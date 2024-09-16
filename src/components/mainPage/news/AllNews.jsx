import React from "react";
import GR103 from "../../../assets/Group 103.png";
import cl from './style.module.css';
import unplash from "../../../assets/unsplash_g1Kr4Ozfoac.png";
import NewsCard from "../../widgets/(news)/NewsCard";
import NewsScroll from "../../widgets/(news)/NewsScroll";
import {Link} from "react-router-dom";
import {news} from "../../constants/news";


export default function AllNews(props) {
    // if (!props.newsData || props.newsData.length === 0) {
    //     return <div className={"no-news"}>Новости отсутствуют</div>;
    // }
    return (
        <div className={cl.allNewsBlock}>
            <img src={GR103} alt="Error" className={cl.newsImage}/>
            <div className={cl.allMainBlock}>
                <div className={cl.cardItems}>
                    {
                        news.slice(-2).map((item) => (
                            <NewsCard {...item}/>
                        ))
                    }
                </div>
                <div className={cl.assistiant}>
                    <p className={cl.p_news}>НОВОСТИ</p>
                    <div className={cl.allScrollBlock}>
                        {
                            news.map((item) => (
                                <NewsScroll {...item}/>
                            ))
                        }
                        <Link to={'/news'} className={cl.allNewsLinkText}>
                            все новости
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
