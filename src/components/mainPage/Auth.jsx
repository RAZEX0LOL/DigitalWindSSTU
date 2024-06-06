import React from "react";
import "../../index.css";
import {useNavigate} from "react-router-dom";

export default function Auth(props) {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/user');
    };
    return (
        <div className="auth-block">
            <div className="form-block">
                <form onSubmit={handleSubmit}>
                    <div className={"form-div"}>
                        <label className="form-label" htmlFor="login">Логин</label>
                        <input className="form-input" type="text" id="login"/>
                    </div>
                    <div className={"form-div"}>
                        <label className="form-label" htmlFor="password">Пароль</label>
                        <input className="form-input" type="password" id="password"/>
                    </div>
                    <button className="submit-button" type="submit">Войти</button>
                    <div className="links">
                        <a className="link" href="#"  onClick={props.showReturnPassword}>Забыли пароль?</a>
                        <a className="link" href="#" onClick={props.showRegister}>Зарегистрироваться</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
