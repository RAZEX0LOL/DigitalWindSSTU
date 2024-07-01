import React, { useState } from "react";
import "../../styles/ListWorksStyle.css";
import WorkAllInfoJury from "../juryPage/WorkAllInfoJury";

const works = [
    {
        id:1,
        dateReg:"05.05.2024",
        name: "Белые лебеди",
        user:"Иванов Иван Иванович",
        ageGroup: "от 18 до 25",
        stage:1,
        status:"одобрена",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
        point1:1,
        point2:1,
        boss:"Расул",
        otherUsers:"Иван Ивано Иванович"
    },
    {
        id:2,
        dateReg:"05.05.2024",
        name: "Белые лебеди",
        user:"Иванов Иван Иванович",
        ageGroup: "от 13 до 17",
        stage:1,
        status:"одобрена",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
        point1:1,
        point2:1,
        boss:"Расул",
        otherUsers:"Иван Ивано Иванович"
    },
    {
        id:3,
        dateReg:"05.05.2024",
        name: "Белые лебеди",
        user:"Иванов Иван Иванович",
        ageGroup: "до 12",
        stage:1,
        status:"одобрена",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
        point1:1,
        point2:1,
        boss:"Расул",
        otherUsers:"Иван Ивано Иванович"
    },
    {
        id:4,
        dateReg:"05.05.2024",
        name: "Белые лебеди",
        user:"Иванов Иван Иванович",
        ageGroup: "до 12",
        stage:1,
        status:"одобрена",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
        point1:1,
        point2:1,
        boss:"Расул",
        otherUsers:"Иван Ивано Иванович"
    },
    {
        id:5,
        dateReg:"05.05.2024",
        name: "Белые лебеди",
        user:"Иванов Иван Иванович",
        ageGroup: "от 13 до 17",
        stage:1,
        status:"одобрена",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
        point1:1,
        point2:1,
        boss:"Расул",
        otherUsers:"Иван Ивано Иванович"
    },
    {
        id:6,
        dateReg:"05.05.2024",
        name: "Белые лебеди",
        user:"Иванов Иван Иванович",
        ageGroup: "от 13 до 17",
        stage:1,
        status:"одобрена",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
        point1:1,
        point2:1,
        boss:"Расул",
        otherUsers:"Иван Ивано Иванович"
    },
    {
        id:8,
        dateReg:"05.05.2024",
        name: "Белые лебеди",
        user:"Иванов Иван Иванович",
        ageGroup: "от 18 до 25",
        stage:1,
        status:"одобрена",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
        point1:1,
        point2:1,
        boss:"Расул",
        otherUsers:"Иван Ивано Иванович"
    },
    {
        id:9,
        dateReg:"05.05.2024",
        name: "Белые лебеди",
        user:"Иванов Иван Иванович",
        ageGroup: "от 13 до 17",
        stage:1,
        status:"одобрена",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
        point1:1,
        point2:1,
        boss:"Расул",
        otherUsers:"Иван Ивано Иванович"
    },
];

export default function WorkList() {
    const [currentPage, setCurrentPage] = useState(1);
    const [worksPerPage] = useState(10);
    const [showWorkInfo, setShowWorkInfo] = useState(false);
    const [selectedWork, setSelectedWork] = useState(null);
    const [showWorks,setShowWorks]=useState(false);

    const lastWorkIndex = currentPage * worksPerPage;
    const firstWorkIndex = lastWorkIndex - worksPerPage;
    const currentWorks = works.slice(firstWorkIndex, lastWorkIndex);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const previousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleWorkClick = (work) => {
        setSelectedWork(work);
        setShowWorkInfo(true);
    };



    return (
        <div>
            {showWorkInfo ? (
                <WorkAllInfoJury work={selectedWork} onClose={() => setShowWorkInfo(false)} />
            ) : (
                <div className={"works-block-jury"}>
                    <div className="filter-section">
                        <select id="age-group-select">
                            <option value="">Возрастная группа</option>
                            {/* Add options here */}
                        </select>
                    </div>
                    <div className="container-works-list">
                        <table className="data-table">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Дата регистрации</th>
                                <th>Название</th>
                                <th>Автор</th>
                                <th>Возрастная группа</th>
                                <th>Этап</th>
                                <th>статус</th>
                                <th>Исходный файл</th>
                                <th>URL проекта</th>
                                <th>Сумарный балл за 1 этап</th>
                                <th>Сумарный балл за 2 этап</th>
                                <th>Руководитель</th>
                                <th>Другие участники</th>
                            </tr>
                            </thead>
                            <tbody>
                            {currentWorks.map((work, index) => (
                                <tr key={index}>
                                    <td>{work.id}</td>
                                    <th>{work.dateReg}</th>
                                    <td onClick={() => handleWorkClick(work)} style={{cursor:"pointer"}}>{work.name}</td>
                                    <td>{work.user}</td>
                                    <td>{work.ageGroup}</td>
                                    <td>{work.stage}</td>
                                    <td>{work.status}</td>
                                    <td>
                                        <a href={work.fileUrl} download>
                                            Скачать
                                        </a>
                                    </td>
                                    <td>
                                        <a href={work.projectUrl}>{work.projectUrl}</a>
                                    </td>
                                    <td>{work.point1}</td>
                                    <td>{work.point2}</td>
                                    <td>{work.boss}</td>
                                    <td>{work.otherUsers}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="pagination">
                        <button onClick={previousPage}>◀</button>
                        {[...Array(Math.ceil(works.length / worksPerPage))].map((_, index) => (
                            <button key={index} onClick={() => paginate(index + 1)}>
                                {index + 1}
                            </button>
                        ))}
                        <button onClick={nextPage}>▶</button>
                    </div>
                </div>
            )}
        </div>
    );
}