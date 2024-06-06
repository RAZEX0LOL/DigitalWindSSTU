import React, { useState } from "react";
import "../../styles/ProfileForm.css";

export default function ProfileForm() {
    const [formData, setFormData] = useState({
        login: "",
        password: "",
        email: "",
        lastName: "",
        firstName: "",
        middleName: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="rows">
                    <input
                        type="text"
                        name="login"
                        placeholder="Логин"
                        value={formData.login}
                        onChange={handleChange}
                        className="input"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={formData.password}
                        onChange={handleChange}
                        className="input"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        className="input"
                    />
                </div>
                <div className="row">
                    <label htmlFor="lastName" className="label">*Фамилия</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Фамилия"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="input"
                    />
                </div>
                <div className="row">
                    <label htmlFor="firstName" className="label">*Имя</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Имя"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="input"
                    />
                </div>
                <div className="row">
                    <label htmlFor="middleName" className="label">*Отчество</label>
                    <input
                        type="text"
                        id="middleName"
                        name="middleName"
                        placeholder="Отчество"
                        value={formData.middleName}
                        onChange={handleChange}
                        className="input"
                    />
                </div>
                <button type="submit" className="button">
                    Сохранить изменения
                </button>
            </form>
        </div>
    );
}