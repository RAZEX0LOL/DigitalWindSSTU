import React from "react";
import "../../index.css";

export default function LoginChange({ handleWorksClick }) {
    return (
        <div className="change-block">
            <div className="form-change-block">
                <form onSubmit={handleWorksClick}>
                    <h1>Изменение логина</h1>
                    <div className={"form-div"}>
                        <label className="form-label" htmlFor="newlogin">Старый логин</label>
                        <input className="form-input" type="text" id="newlogin"/>
                    </div>
                    <div className={"form-div"}>
                        <label className="form-label" htmlFor="password">Новый логин</label>
                        <input className="form-input" type="password" id="password"/>
                    </div>
                    <div className={"buttons"}>
                        <button className={"reset-button"} type="button" onClick={handleWorksClick}>Отменить</button>
                        <button className="submit-change-button" type="submit">Изменить</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
