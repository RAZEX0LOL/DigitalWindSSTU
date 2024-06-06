import React, { useState } from "react";
import HeaderJury from "./HeaderJury";
import ListWorks from "./ListWorks";
import ProfileForm from "./ProfileForm";  // Import the ProfileForm component

export default function JuryPage() {
    const [view, setView] = useState("works"); // Default to showing works

    const handleWorksClick = () => {
        setView("works");
    };

    const handleLoginChangeClick = () => {
        setView("profile");
    };

    return (
        <>
            <HeaderJury
                handleWorksClick={handleWorksClick}
                handleLoginChangeClick={handleLoginChangeClick}
            />
            {view === "works" && <ListWorks />}
            {view === "profile" && <ProfileForm />}
        </>
    );
}
