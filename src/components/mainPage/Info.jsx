import React from "react";
import "../../index.css";
import GR from "../../assets/Group 87.svg";

export default function Info(){
    return(
        <div className={"info"}>
            <div className={"info-year"}>
                <div className={"text-div"}>
                    <p className={"year"}>
                        21
                    </p>
                    <p>
                        ГОД
                    </p>
                </div>
                <div className={"text-ul"}>
                    <ul>
                        <li>предоставляем школьникам и студентам возможность:</li>
                        <li>развить навыки работы с современными информационными технологиями</li>
                        <li>раскрыть творческие способности, интеллектуальный потенциал</li>
                        <li>заявить о себе в мире профессиональных IT</li>
                    </ul>
                </div>

            </div>
            <img src={GR} alt={"Error"}/>
            <div className={"stages"}>
                <div className={"stage"}>
                    <p className={"p-stage"}>
                        Региональные этапы
                    </p>
                    <p>
                        до 31 марта 2024
                    </p>
                </div>
                <div className={"stage"}>
                    <p className={"p-stage"}>
                        Международный этап
                    </p>
                    <p>
                        до 17 апреля 2024
                    </p>
                </div>

            </div>
            <div className={"wrapper-text-info-stages"}>
                <div className={"text-info-stages"}>
                    <p>
                        Участие в региональном этапе <b>не является обязательным</b> для участия в международном
                        конкурсе.
                    </p>
                    <br/>
                    <p>
                        Если в вашем регионе региональный этап не проводится, то нужно сразу регистрировать работы на
                        международный этап.
                    </p>
                </div>
            </div>
        </div>
    );
}