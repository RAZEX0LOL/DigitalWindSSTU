// import React from "react";
// import GR115 from "./../assets/Group 115.png";
// import unplash1 from "./../assets/unsplash1.png";
// import info from "./../assets/Описание.png";
//
// export default function WorkAllInfo(props) {
//     return (
//         <div className={"info-work"}>
//             <img src={GR115} alt="Error"/>
//             <div className={"work-block-info"}>
//                 <img src="" className={"img-info"} alt="Error"/>
//                 <img src="" alt="Error"/>
//                 <div>
//                     <h2></h2>
//                     <p></p>
//                 </div>
//             </div>
//         </div>
//     );
// }


import React from "react";
// import GR115 from "./../assets/Group 115.png";
import unplash1 from "../../assets/unsplash1.png";
import "../../index.css";

export default function WorkAllInfo({workData}) {
    return (
        <div className={"info-work"}>
            <div className={"work-block-info"}>
                {/*<img src={workData.img} className={"img-info"} alt="Error" />*/}
                <div>
                    <img src={unplash1} alt="Error"/>
                </div>
                <div className={"text-info"}>
                    {/*<h2>{workData && workData.title}</h2>*/}
                    {/*<p>{workData && workData.description}</p>*/}
                    <h2>Название работы</h2>
                    <p>Описание Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar facilisi adipiscing purus auctor velit, elit aliquet.</p>
                    <p>Номинация</p>
                    <p>Возрастная группа</p>
                    <p>Статус работы</p>
                </div>
            </div>
        </div>
    );
}
