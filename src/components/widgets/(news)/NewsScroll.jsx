import React from 'react';
import cl from './style.module.css'
import {Link} from "react-router-dom";

const NewsScroll = ({id, img, tittle, text, date}) => {
    return (
        <div className={cl.scrollMain}>
            <div className={cl.scrollDate}>
                {date}
            </div>
            <Link to={`/news/${id}`} className={cl.card_link}>
                <div className={cl.scrollText}>
                    {text}
                </div>
            </Link>
        </div>
    );
};

export default NewsScroll;