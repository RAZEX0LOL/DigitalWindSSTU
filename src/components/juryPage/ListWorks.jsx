import React, { useState } from "react";
import "../../styles/ListWorksStyle.css";
import WorkAllInfo from "./WorkAllInfoJury";
import WorkAllInfoJury from "./WorkAllInfoJury";

const works = [
    {
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },
    {
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },
    {
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },
    {
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },{
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },
    {
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },{
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },{
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },{
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },{
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },{
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },{
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },{
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },{
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },{
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },{
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },{
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },{
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },{
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },{
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },{
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },{
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },{
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },{
        name: "Белые лебеди",
        score1: 0,
        score2: 1,
        ageGroup: "от 18 до 25",
        fileUrl: "https://example.com/file1",
        projectUrl: "https://yandex.ru",
    },
]; // your work data

export default function ListWorks() {
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
                        <select id="section-select">
                            <option value="">Раздел</option>
                            {/* Add options here */}
                        </select>
                        <select id="age-group-select">
                            <option value="">Возрастная группа</option>
                            {/* Add options here */}
                        </select>
                    </div>
                    <div className="container-works-list">
                        <table className="data-table">
                            <thead>
                            <tr>
                                <th>Название</th>
                                <th>Ваша оценка за 1 этап</th>
                                <th>Ваша оценка за 2 этап</th>
                                <th>Возрастная группа</th>
                                <th>Исходный файл</th>
                                <th>URL проекта</th>
                            </tr>
                            </thead>
                            <tbody>
                            {currentWorks.map((work, index) => (
                                <tr key={index}>
                                    <td onClick={() => handleWorkClick(work)} style={{cursor:"pointer"}}>{work.name}</td>
                                    <td>{work.score1}</td>
                                    <td>{work.score2}</td>
                                    <td>{work.ageGroup}</td>
                                    <td>
                                        <a href={work.fileUrl} download>
                                            Скачать
                                        </a>
                                    </td>
                                    <td>
                                        <a href={work.projectUrl}>{work.projectUrl}</a>
                                    </td>
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