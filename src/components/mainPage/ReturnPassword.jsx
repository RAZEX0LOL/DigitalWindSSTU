import React from "react";

export default function ReturnPassword(props) {
    return (
        <div className="return-password-block">
            <div className="form-block">
                <form>
                    <div className={"form-div"}>
                        <label className="form-label" htmlFor="password-return">Логин или E-mail</label>
                        <input className="form-input" type="text" id="password-return"/>
                    </div>
                    <button className="submit-button" type="submit">Отправить</button>
                    <div className="links">
                        <a className="link" href="#" onClick={props.showReturnPassword}>Забыли пароль?</a>
                        <a className="link" href="#" onClick={props.showRegister}>Зарегистрироваться</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
