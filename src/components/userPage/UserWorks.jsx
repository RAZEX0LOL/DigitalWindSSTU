import React, { useState } from "react";
import "../../styles/UserPageStyle.css";
import Work from "./Work";
import WorkAllInfo from "./WorkAllInfo";

export default function UserWorks({ viewingWork, handleViewClick }) {
    const worksPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const allWorks = [
        <Work onViewClick={handleViewClick} />,
        <Work onViewClick={handleViewClick} />,
        <Work onViewClick={handleViewClick} />,
        <Work onViewClick={handleViewClick} />,
        <Work onViewClick={handleViewClick} />,
        <Work onViewClick={handleViewClick} />,
        <Work onViewClick={handleViewClick} />,
        <Work onViewClick={handleViewClick} />,
        <Work onViewClick={handleViewClick} />
    ];

    const indexOfLastWork = currentPage * worksPerPage;
    const indexOfFirstWork = indexOfLastWork - worksPerPage;
    const currentWorks = allWorks.slice(indexOfFirstWork, indexOfLastWork);

    const totalPages = Math.ceil(allWorks.length / worksPerPage);

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className={"works-block"}>
            {!viewingWork ? (
                <>
                    <div className={"container-works"}>
                        {currentWorks.map((work, index) => (
                            React.cloneElement(work, { key: index })
                        ))}
                    </div>
                    <div className="pagination">
                        <button onClick={handlePrevious} disabled={currentPage === 1}>&lt;</button>
                        <span>Страница {currentPage} из {totalPages}</span>
                        <button onClick={handleNext} disabled={currentPage === totalPages}>&gt;</button>
                    </div>
                </>
            ) : (
                <WorkAllInfo />
            )}
        </div>
    );
}
