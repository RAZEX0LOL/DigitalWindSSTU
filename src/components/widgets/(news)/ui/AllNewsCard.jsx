import React from 'react';
import cl from './style.module.css'
import {Link} from "react-router-dom";
import {convertDate} from "../../../constants/convertDate";

const AllNewsCard = ({id, img, text, tittle, date}) => {
    return (
        // <div className={cl.main_card}>
        //     <img className={cl.main_img} src={img} alt={"not found"}/>
        //     <div className={cl.card_tittle}>
        //         <h2>{tittle}</h2>
        //     </div>
        //     <div className={cl.card_tittle}>
        //         <p>{text}</p>
        //     </div>
        // </div>
        <div className={cl.news_card}>
            <Link to={`/news/${id}`}>
                <img className={cl.card_img} src={img} alt={'not found'} width={406} height={270}/>
            </Link>
            <div className={cl.news_text_container}>
                <div className={cl.date_container}>
                    <p className={cl.card_date}>
                        {convertDate(date)}
                    </p>
                </div>
                <Link to={`/news/${id}`} className={cl.card_link}>
                    <div>
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

export default AllNewsCard;