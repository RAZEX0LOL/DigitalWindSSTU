import React from "react";
import cart from "./../assets/карта 1.png"
import "./../index.css"

export default function Footer() {
    return (
        <div className={"footer"}>
            <div className="form__container">
                <form action="">
                    <p className="writeToForm">Остались вопросы? Напишите нам</p>
                    <div className="form__data"><input type="text" className="texting" placeholder="Имя*"/></div>
                    <div className="form__data"><input type="text" className="texting" placeholder="Телефон"/></div>
                    <div className="form__data"><input type="text" className="texting" placeholder="E-mail*" /></div>
                    <div className="form__data"><textarea type="text" placeholder="Сообщение"></textarea></div>
                    <button className="send">Отправить</button>
                    <div className="dopinfo__container">
                        <p className="dopinfo">Телефон: (8452) 99-87-34</p>
                        <p className="dopinfo">Email: digitalwind@sstu.ru</p>
                        <p className="dopinfo">© 1998-2022 Институт прикладных информационных технологий и коммуникаций </p>
                    </div>
                </form>
            </div>
            <div className="map">
                <img src={cart} alt="" className="mapimg"/>
            </div>
        </div>
    );
}