import React from 'react';
import {useParams} from "react-router-dom";
import {news} from "../constants/news";
import Header from "../Header";

const NewsPage = () => {
    const {id} = useParams()
    const newsId = parseInt(id, 10);

    const newsItem = news.find(item => item.id === newsId)

    return (
        <div>
            <img src={newsItem.img} alt={"not found"}/>
            {newsItem.text}
            {newsItem.tittle}
        </div>
    );
};

export default NewsPage;