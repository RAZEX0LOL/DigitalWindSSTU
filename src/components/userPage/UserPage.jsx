import React, { useState } from "react";
import HeaderUser from "./HeaderUser";
import "../../styles/UserPageStyle.css";
import UserWorks from "./UserWorks";
import LoginChange from "../mainPage/LoginChange";
import AddWork from "./AddWork";

export default function UserPage() {
    const [viewingWork, setViewingWork] = useState(false);
    const [viewingLoginChange, setViewingLoginChange] = useState(false);
    const [viewingAddWork, setViewingAddWork] = useState(false);

    const handleViewClick = () => {
        setViewingWork(true);
        setViewingLoginChange(false);
        setViewingAddWork(false);
    };

    const handleWorksClick = () => {
        setViewingWork(false);
        setViewingLoginChange(false);
        setViewingAddWork(false);
    };

    const handleLoginChangeClick = () => {
        setViewingLoginChange(true);
        setViewingWork(false);
        setViewingAddWork(false);
    };

    const handleAddWorkClick = () => {
        setViewingAddWork(true);
        setViewingWork(false);
        setViewingLoginChange(false);
    };

    return (
        <div className={"wrapper"}>
            <HeaderUser
                handleWorksClick={handleWorksClick}
                handleLoginChangeClick={handleLoginChangeClick}
                handleAddWorkClick={handleAddWorkClick}
            />
            {viewingAddWork ? (
                <AddWork />
            ) : viewingLoginChange ? (
                <LoginChange />
            ) : (
                <UserWorks viewingWork={viewingWork} handleViewClick={handleViewClick} />
            )}
        </div>
    );
}
