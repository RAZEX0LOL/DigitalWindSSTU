// import React from "react";
// import GR100 from "./../assets/Group 100.png";
// import unplash1 from "./../assets/unsplash_g1Kr4Ozfoac.png"
// import "./../index.css"
//
// export default function News(props){
//     return(
//         <div className={"news-block"}>
//             <img src={GR100} alt="Error"/>
//             <div className={"news"}>
//                 <div className={"big-new"}>
//                     <img src={unplash1} alt="Error"/>
//                     <p>{props.newsData[0].title}</p>
//                     <p>{props.newsData[0].text}</p>
//                     <div className={"new-footer"}>
//                         <div className={"new-date"}>
//                             <p>{props.newsData[0].date}</p>
//                         </div>
//                         <div>
//                             <p className={"new-all-info"}>Подробнее</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={"small-news"}>
//                     <div>
//                         <h2>{props.newsData[1].title}</h2>
//                         <p>{props.newsData[1].text}</p>
//                         <div className={"new-footer"}>
//                             <div className={"new-date"}>
//                                 <p>{props.newsData[1].date}</p>
//                             </div>
//                             <div>
//                                 <p className={"new-all-info"}>Подробнее</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <h2>{props.newsData[2].title}</h2>
//                         <p>{props.newsData[2].text}</p>
//                         <div className={"new-footer"}>
//                             <div className={"new-date"}>
//                                 <p>{props.newsData[1].date}</p>
//                             </div>
//                             <div>
//                                 <p className={"new-all-info"}>Подробнее</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className={"text-button-all-news"}>
//                 <p onClick={()=>props.showNews()}>Все новости</p>
//             </div>
//         </div>
//     );
// }

import React from "react";
import GR100 from "./../assets/Group 100.png";
import unplash1 from "./../assets/unsplash_g1Kr4Ozfoac.png";
import "./../index.css";

export default function News(props){
    if (!props.newsData || props.newsData.length === 0) {
        return <div className={"no-news"}>Новости отсутствуют</div>;
    }

    return (
        <div className={"news-block"}>
            <img src={GR100} alt="Ошибка" />
            <div className={"news-bl"}>
                <div className={"big-new"}>
                    <img src={unplash1} alt="Ошибка" />
                    <p>{props.newsData[0].title}</p>
                    <p>{props.newsData[0].text}</p>
                    <div className={"new-footer"}>
                        <div className={"new-date"}>
                            <p>{props.newsData[0].date}</p>
                        </div>
                        <div>
                            <p className={"new-all-info"}>Подробнее</p>
                        </div>
                    </div>
                </div>
                <div className={"small-news"}>
                    {props.newsData.slice(1, 3).map((news, index) => (
                        <div key={index}>
                            <h2>{news.title}</h2>
                            <p>{news.text}</p>
                            <div className={"new-footer"}>
                                <div className={"new-date"}>
                                    <p>{news.date}</p>
                                </div>
                                <div>
                                    <p className={"new-all-info"}>Подробнее</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={"text-button-all-news"}>
                <p onClick={() => props.showNews()}>Все новости</p>
            </div>
        </div>
    );
}

