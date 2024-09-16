import React from 'react';
import cl from './style.module.css'
import {Link} from "react-router-dom";
import {convertDate} from "../../constants/convertDate";

const NewsCard = ({id, img, tittle, text, date}) => {
    return (
        <div className={cl.main_card}>
            <Link to={`/news/${id}`}>
                <img style={{objectFit: 'cover'}} src={img} alt={'not found'} width={406} height={270}/>
            </Link>
            <div className={cl.card_text_container}>
                <div className={cl.card_date}>
                    {convertDate(date)}
                </div>
                <Link to={`/news/${id}`} className={cl.card_link}>
                    <div className={cl.card_tittle}>
                        {tittle}
                    </div>
                </Link>
                <div className={cl.card_text}>
                    {text}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;