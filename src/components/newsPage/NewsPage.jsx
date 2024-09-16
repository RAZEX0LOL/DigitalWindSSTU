import React from 'react';
import {useParams} from "react-router-dom";
import {news} from "../constants/news";
import Header from "../Header";
import NewsSolo from "./NewsSolo";

const NewsPage = () => {
    const {id} = useParams()
    const newsId = parseInt(id, 10);

    const newsItem = news.find(item => item.id === newsId)

    return (
        <>
            <Header/>
            {
                newsItem ?
                    (
                        <NewsSolo {...newsItem}/>
                    ) :
                    (
                        <div>
                            <p>
                                Не найдена новость
                            </p>
                        </div>
                    )
            }
        </>
    );
};

export default NewsPage;