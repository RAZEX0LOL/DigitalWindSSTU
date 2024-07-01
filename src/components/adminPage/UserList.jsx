import React, { useState } from "react";
import "../../styles/ListWorksStyle.css";
import WorkAllInfoJury from "../juryPage/WorkAllInfoJury";

const works = [
    {
        name: "Иван",
        lastName: "Иванов",
        patromyc: "Иванович",
        ageGroup: "от 13 до 17",
    },
    {
        name: "Иван",
        lastName: "Иванов",
        patromyc: "Иванович",
        ageGroup: "от 18 до 25",
    },
    {
        name: "Иван",
        lastName: "Иванов",
        patromyc: "Иванович",
        ageGroup: "до 12",
    },
    {
        name: "Иван",
        lastName: "Иванов",
        patromyc: "Иванович",
        ageGroup: "от 13 до 17",
    },
    {
        name: "Иван",
        lastName: "Иванов",
        patromyc: "Иванович",
        ageGroup: "от 18 до 25",
    },
    {
        name: "Иван",
        lastName: "Иванов",
        patromyc: "Иванович",
        ageGroup: "до 12",
    },
    {
        name: "Иван",
        lastName: "Иванов",
        patromyc: "Иванович",
        ageGroup: "от 13 до 17",
    },
    {
        name: "Иван",
        lastName: "Иванов",
        patromyc: "Иванович",
        ageGroup: "от 13 до 17",
    },
    {
        name: "Иван",
        lastName: "Иванов",
        patromyc: "Иванович",
        ageGroup: "от 13 до 17",
    },
];

export default function UserList() {
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
                                <th>Имя</th>
                                <th>Фамилия</th>
                                <th>Отчество</th>
                                <th>Возрастная группа</th>
                            </tr>
                            </thead>
                            <tbody>
                            {currentWorks.map((work, index) => (
                                <tr key={index}>
                                    <td onClick={() => handleWorkClick(work)} style={{cursor:"pointer"}}>{work.name}</td>
                                    <td>{work.lastName}</td>
                                    <td>{work.patromyc}</td>
                                    <td>{work.ageGroup}</td>
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