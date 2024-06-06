import React, { useState } from 'react';
import '../../styles/UserPageStyle.css';

const AddWork = () => {
    const [form, setForm] = useState({
        title: '',
        section: '',
        ageGroup: '',
        tour: '',
        detailImage: null,
        sourceFile: null,
        url: '',
        participants: [{ name: '', dob: '' }],
        projectManager: '',
        announcementDescription: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setForm({ ...form, [name]: files[0] });
    };

    const handleParticipantChange = (index, e) => {
        const { name, value } = e.target;
        const newParticipants = [...form.participants];
        newParticipants[index][name] = value;
        setForm({ ...form, participants: newParticipants });
    };

    const addParticipant = () => {
        setForm({ ...form, participants: [...form.participants, { name: '', dob: '' }] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>*Название работы</label>
                    <input type="text" name="title" value={form.title} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>*Раздел</label>
                    <select name="section" value={form.section} onChange={handleChange} required>
                        <option value="" disabled>Выберите раздел</option>
                        {/* Add options here */}
                    </select>
                </div>
                <div className="form-group">
                    <label>*Возрастная группа</label>
                    <select name="ageGroup" value={form.ageGroup} onChange={handleChange} required>
                        <option value="" disabled>Выберите возрастную группу</option>
                        {/* Add options here */}
                    </select>
                </div>
                <div className="form-group">
                    <label>*Тур</label>
                    <select name="tour" value={form.tour} onChange={handleChange} required>
                        <option value="" disabled>Выберите тур</option>
                        {/* Add options here */}
                    </select>
                </div>
                <div className="form-group">
                    <label>*Детальная картинка</label>
                    <input type="file" name="detailImage" onChange={handleFileChange} accept="image/jpeg" required />
                </div>
                <div className="form-group">
                    <label>Исходники</label>
                    <div className={"file-container"}>
                        <input type="file" name="sourceFile" onChange={handleFileChange} />
                        <p className="warning-text">Если объем исходных и запускаемых файлов проекта превышает 100 Мб,
                            то разместите ссылку на исходник проекта в "URL проекта"</p>
                    </div>
                </div>
                <div className="form-group">
                    <label>URL</label>
                    <input type="url" name="url" value={form.url} onChange={handleChange}/>
                </div>
                <div className="form-group-extra">
                    <label>Другие участники</label>
                    <div className={"extra-participants"}>
                        <div className="participant-inputs">
                            <input type="text" name="name" placeholder="ФИО"/>
                            <input type="date" name="dob" placeholder="Дата рождения"/>
                        </div>
                        <div className="participant-inputs">
                            <input type="text" name="name" placeholder="ФИО"/>
                            <input type="date" name="dob" placeholder="Дата рождения"/>
                        </div>
                    </div>

                </div>
                <div className="form-group">
                    <label>Руководитель проекта</label>
                    <input type="text" name="projectManager" value={form.projectManager} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>*Описание для анонса</label>
                    <textarea name="announcementDescription" value={form.announcementDescription} onChange={handleChange} required></textarea>
                </div>
                <button type="submit">Зарегистрировать</button>
            </form>
        </div>
    );
};

export default AddWork;
