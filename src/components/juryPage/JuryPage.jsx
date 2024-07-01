import React, { useState } from "react";
import HeaderJury from "./HeaderJury";
import ListWorks from "./ListWorks";
import ProfileForm from "./ProfileFormJury";

export default function JuryPage() {
    const [view, setView] = useState("works");

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
