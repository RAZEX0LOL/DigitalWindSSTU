import React from "react";
import GR95 from "./../assets/Group 95.png";
import SGTU from "../assets/SGTULOGO.png";
import INPIT from "../assets/logo_inpit 1.png";
import organizations from "../assets/Организаторы.png";
import organizers from "./../assets/ОТветственные.png";
import organizator1 from "./../assets/Ellipse 3.png";
import organizator2 from "./../assets/Ellipse 4.png";

export default function Contacts() {
    return (
        <div className={"contacts-block"}>
            <img src={GR95} alt="Error"/>
            <div className={"all-contacts"}>
                <div className={"contacts"}>
                    <div>
                        <p>
                            Все вопросы по участию в конкурсе ждем по e-mail: digitalwind@sstu.ru.
                        </p>
                        <p>
                            Россия, 410054, г. Саратов, ул. Политехническая 77
                        </p>
                        <p>
                            Тел.: +7 (8452) 99-87-34
                        </p>
                        <p>
                            E-mail: digitalwind@sstu.ru
                        </p>
                        <p>
                            Сайт: www.sstu.ru
                        </p>
                    </div>
                </div>
                <div className={"contacts-organizations"}>
                    <div className={"contacts-organizations-img"}>
                        <img src={organizations} alt="Error"/>
                    </div>

                    <div className={"sgtu-authors"}>
                        <div className={"sstu"}>
                            <img src={SGTU} alt="Error"/>
                        </div>
                        <div className={"inpit"}>
                            <img src={INPIT} alt="Error"/>
                        </div>
                    </div>
                </div>
                <div className={"contacts-authors"}>
                    <div className={"contacts-organizations-img"}>
                        <img src={organizers} alt="Error"/>
                    </div>
                    <div className={"sgtu-authors"}>
                        <div className={"sstu"}>
                            <img src={organizator1} alt="Error"/>
                            <p className={"worker"}>Ответственный за регистрацию и прием работ на Международный тур:</p>
                            <p className={"organizator-name"}>Кулакова Екатерина Михайловна</p>
                        </div>
                        <div className={"inpit"}>
                            <img src={organizator2} alt="Error"/>
                            <p className={"worker"}>Председатель Оргкомитета и Экспертного совета</p>
                            <p className={"organizator-name"}>Кумова Светлана Валентиновна</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}