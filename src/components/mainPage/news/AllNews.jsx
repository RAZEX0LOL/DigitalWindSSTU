import React from "react";
import GR103 from "../../../assets/Group 103.png";
import cl from './style.module.css';
import unplash from "../../../assets/unsplash_g1Kr4Ozfoac.png";
import NewsCard from "../../widgets/(news)/NewsCard";
import NewsScroll from "../../widgets/(news)/NewsScroll";
import {Link} from "react-router-dom";


const news = [
    {
        id: 1,
        img: unplash,
        tittle: 'СГТУ и реготделение Федерации фиджитал-спорта заключили соглашение о сотрудничестве',
        text: 'Ректор отметил, что сегодня фиджитал-спорт стал одним из быстроразвивающихся в России',
        date: '01.01.2001'
    },
    {
        id: 2,
        img: unplash,
        tittle: 'СГТУ и реготделение Федерации фиджитал-спорта заключили соглашение о сотрудничестве',
        text: 'Ректор отметил, что сегодня фиджитал-спорт стал одним из быстроразвивающихся в России',
        date: '01.01.2001'
    },
]

const scrollNews = [
    {
        id: 1,
        img: unplash,
        tittle: 'Студент СГТУ стал победителем Всероссийского инженерного конкурса от Минобрнауки РФ',
        text: 'В финале сразились 100 студентов и аспирантов из 48 вузов 28 регионов страны',
        date: '01.01.2001'
    },
    {
        id: 2,
        img: unplash,
        tittle: 'СГТУ и реготделение Федерации фиджитал-спорта заключили соглашение о сотрудничестве',
        text: 'Ректор отметил, что сегодня фиджитал-спорт стал одним из быстроразвивающихся в России',
        date: '01.01.2001'
    },
    {
        id: 3,
        img: unplash,
        tittle: 'СГТУ и реготделение Федерации фиджитал-спорта заключили соглашение о сотрудничестве',
        text: 'Ректор отметил, что сегодня фиджитал-спорт стал одним из быстроразвивающихся в России',
        date: '01.01.2001'
    },
    {
        id: 4,
        img: unplash,
        tittle: 'СГТУ и реготделение Федерации фиджитал-спорта заключили соглашение о сотрудничестве',
        text: 'Ректор отметил, что сегодня фиджитал-спорт стал одним из быстроразвивающихся в России',
        date: '01.01.2001'
    },
    {
        id: 6,
        img: unplash,
        tittle: 'СГТУ и реготделение Федерации фиджитал-спорта заключили соглашение о сотрудничестве',
        text: 'Ректор отметил, что сегодня фиджитал-спорт стал одним из быстроразвивающихся в России',
        date: '01.01.2001'
    },
    {
        id: 7,
        img: unplash,
        tittle: 'СГТУ и реготделение Федерации фиджитал-спорта заключили соглашение о сотрудничестве',
        text: 'Ректор отметил, что сегодня фиджитал-спорт стал одним из быстроразвивающихся в России',
        date: '01.01.2001'
    },
    {
        id: 8,
        img: unplash,
        tittle: 'СГТУ и реготделение Федерации фиджитал-спорта заключили соглашение о сотрудничестве',
        text: 'Ректор отметил, что сегодня фиджитал-спорт стал одним из быстроразвивающихся в России',
        date: '01.01.2001'
    },
    {
        id: 9,
        img: unplash,
        tittle: 'СГТУ и реготделение Федерации фиджитал-спорта заключили соглашение о сотрудничестве',
        text: 'Ректор отметил, что сегодня фиджитал-спорт стал одним из быстроразвивающихся в России',
        date: '01.01.2001'
    },

]

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
                    ALLNEWS
                    <div className={cl.allScrollBlock}>
                        {
                            scrollNews.map((item) => (
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
