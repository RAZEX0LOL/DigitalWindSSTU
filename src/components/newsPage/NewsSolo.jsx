import React from 'react';
import cl from '../../styles/NewsPageStyle.module.css'
import NewsScroll from "../widgets/(news)/NewsScroll";
import {news} from "../constants/news";
import {Link} from "react-router-dom";

const NewsSolo = ({id, tittle, text, img, date}) => {
    return (
        <div className={cl.flex_container}>
            <div className={cl.main_container}>
                <div className={cl.news_tittle}>
                    {tittle}
                </div>
                <div>
                    <img className={cl.news_img} src={img} alt="not gfound" width={708} height={377}/>
                </div>
                <div>
                    {text}
                </div>
            </div>
            <div className={cl.assistiant}>
                <p className={cl.p_news}>Новости СГТУ</p>
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
    );
};

export default NewsSolo;