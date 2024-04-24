import React, { useState } from "react";
import GR109 from "./../assets/Group 109.png";
import GR20 from "../assets/Group 20.png";
import GR21 from "../assets/Group 21.png";
import GR99 from "../assets/Group 99.png";
import F5 from "../assets/Frame 5.svg";
import GR23 from "../assets/Group 23.svg";
import F7 from "../assets/Frame 7.svg";
import F6 from "./../assets/Frame 6.png";
import unplash from "./../assets/unsplash_tZc3vjPCk-Q.png";
import WorkAllInfo from "./WorkAllInfo";
import F1 from "./../assets/Frame 1.png";
import F2 from "./../assets/Frame 37.png"
import F3 from "./../assets/Frame 38.png";
import F4 from "./../assets/Frame 35.png";
import F8 from "./../assets/Frame 11.png";
import F9 from "./../assets/Frame 36.png";
import F10 from "../assets/Frame 13.png";
import ErrorIMG from "./../assets/Vector.png";

export default function Catalog(props) {
    const [selectedNomination, setSelectedNomination] = useState(null);
    const [selectedAgeGroup, setSelectedAgeGroup] = useState(null);
    const [selectedWork, setSelectedWork] = useState(null);
    const [originalSrc, setOriginalSrc] = useState({}); // Используем состояние для хранения исходных путей к изображениям

    const handleNominationClick = (nominationId) => {
        if (selectedNomination === nominationId) {
            setSelectedNomination(null);
            // Восстанавливаем исходные пути к изображениям при повторном нажатии
            Object.entries(originalSrc).forEach(([nominationNumber, src]) => {
                const imgElement = document.querySelector(`.theme-nomination:nth-child(${nominationNumber}) img`);
                if (imgElement) {
                    imgElement.src = src;
                }
            });
            setOriginalSrc({}); // Сбрасываем исходные пути
        } else {
            setSelectedNomination(nominationId);
            handleNominationClickImage(nominationId);
        }
    };

    const handleAgeGroupClick = (ageGroupId) => {
        setSelectedAgeGroup(ageGroupId);
    };

    const filteredWorks = props.worksData.filter((work) => {
        if (selectedNomination && work.nomination_id !== selectedNomination) {
            return false;
        }
        if (selectedAgeGroup && work.age_group_id !== selectedAgeGroup) {
            return false;
        }
        return true;
    });

    const handleWorkClick = (work) => {
        setSelectedWork(work);
    };

    const handleNominationClickImage = (nominationNumber) => {
        const imgElement = document.querySelector(`.theme-nomination:nth-child(${nominationNumber}) img`);
        if (imgElement) {
            const src = imgElement.src;
            if (!originalSrc[nominationNumber]) {
                setOriginalSrc({ ...originalSrc, [nominationNumber]: src });
            }

            let newSrc;
            switch (nominationNumber) {
                case 1:
                    newSrc = F1;
                    break;
                case 2:
                    newSrc = F2;
                    break;
                case 3:
                    newSrc = F3;
                    break;
                case 4:
                    newSrc = F4;
                    break;
                case 5:
                    newSrc = F8;
                    break;
                case 6:
                    newSrc = F9;
                    break;
                case 7:
                    newSrc = F10;
                    break;
                default:
                    newSrc = ErrorIMG;
                    break;
            }
            imgElement.src = newSrc;
        }
    };

    return (
        <div className={"catalog"}>
            <img src={GR109} alt="Error" />
            <div className={"nominations-catalog"}>
                <div className={"theme-nomination"} onClick={() => handleNominationClick(1)}>
                    <img src={GR20} alt="Error" />
                    <p>Тематический сайт</p>
                </div>
                <div className={"theme-nomination"} onClick={() => handleNominationClick(2)}>
                    <img src={GR21} alt="Error" />
                    <p>Двумерная статичная графика</p>
                </div>
                <div className={"theme-nomination"} onClick={() => handleNominationClick(3)}>
                    <img src={GR99} alt="Error" />
                    <p>Двумерная анимация</p>
                </div>
                <div className={"theme-nomination"} onClick={() => handleNominationClick(4)}>
                    <img src={F5} alt="Error" />
                    <p>Трехмерная статичная графика</p>
                </div>
                <div className={"theme-nomination"} onClick={() => handleNominationClick(5)}>
                    <img src={GR23} alt="Error" />
                    <p>Компьютерные игры</p>
                </div>
                <div className={"theme-nomination"} onClick={() => handleNominationClick(6)}>
                    <img src={F7} alt="Error" />
                    <p>Специальная номинация «Фотозарисовка»</p>
                </div>
                <div className={"theme-nomination"} onClick={() => handleNominationClick(7)}>
                    <img src={F6} alt="Error" />
                    <p>Специальная номинация «Data Science»</p>
                </div>
            </div>
            <div className={"age-nominations"}>
                <p onClick={() => handleAgeGroupClick(1)}>до 12 лет</p>
                <p onClick={() => handleAgeGroupClick(2)}>13-17 лет</p>
                <p onClick={() => handleAgeGroupClick(3)}>18-25 лет</p>
                <p onClick={() => setSelectedAgeGroup(null)}>Все возраста</p>
            </div>
            <div className={"works-block"}>
                {filteredWorks.map((work) => (
                    <div className={"work"} key={work.id} onClick={() => handleWorkClick(work)}>
                        <img src={unplash} alt="Error" />
                        <p className={"work-name"}>{work.title}</p>
                        <div className={"footer-work"}>
                            <p>{work.attendee_surname} {work.attendee_name} {work.attendee_pathronymic}</p>
                            <p>Возраст: {work.age} лет</p>
                        </div>
                    </div>
                ))}
            </div>
            {selectedWork && <WorkAllInfo work={selectedWork} />}
        </div>
    );
}
