import React from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";

export default function Register() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/user');
    };

    return (
        <div className="register-block">
            <div className="form-registrate-block">
                <form onSubmit={handleSubmit}>
                    <div className="register-inputs-block">
                        <div className="form-div-register">
                            <label className="form-label">*Группа</label>
                            <div className="radio-group">
                                <label className="radio-container">
                                    Участники
                                    <input className="form-input-radio" type="radio" name="group" value="participants"
                                           required/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="radio-container">
                                    Гости
                                    <input className="form-input-radio" type="radio" name="group" value="guests"
                                           required/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className="form-div-register">
                            <label className="form-label" htmlFor="login">*Логин (мин. 3 символа)</label>
                            <input className="form-input" minLength={3} type="text" id="login" required/>
                        </div>
                        <div className="form-div-register">
                            <label className="form-label" htmlFor="password">*Пароль (мин. 6 символов)</label>
                            <input className="form-input" minLength={6} type="password" id="password" required/>
                        </div>
                        <div className="form-div-register">
                            <label className="form-label" htmlFor="password-again">*Подтверждение пароля</label>
                            <input className="form-input" type="password" id="password-again" required/>
                        </div>
                        <div className="form-div-register">
                            <label className="form-label" htmlFor="email">*Адрес e-mail</label>
                            <input className="form-input" type="email" id="email" required/>
                        </div>
                        <label className="radio-container">
                            *Я соглашаюсь на обработку персональных данных
                            <input className="form-input-radio" type="radio" name="dataProcessingConsent" value="yes"
                                   required/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="register-inputs-block">
                        <div className="form-div-register">
                            <label className="form-label" htmlFor="lastname">*Фамилия</label>
                            <input className="form-input" type="text" id="lastname" required/>
                        </div>
                        <div className="form-div-register">
                            <label className="form-label" htmlFor="firstname">*Имя</label>
                            <input className="form-input" type="text" id="firstname" required/>
                        </div>
                        <div className="form-div-register">
                            <label className="form-label" htmlFor="patronymic">*Отчество</label>
                            <input className="form-input" type="text" id="patronymic" required/>
                        </div>
                        <div className="form-div-register">
                            <label className="form-label" htmlFor="date">*Дата рождения</label>
                            <input className="form-input" type="date" id="date" required/>
                        </div>
                        <div className="form-div-register">
                            <label className="form-label" htmlFor="phone">*Мобильный</label>
                            <input className="form-input" type="tel" id="phone" required/>
                        </div>
                        <button className="submit-button" type="submit">Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
