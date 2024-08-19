import React, { useState } from "react";
import HeaderJury from "./HeaderJury";
import ListWorks from "./ListWorks";
import ProfileForm from "./ProfileFormJury";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../router.config";

export default function JuryPage() {
    const [view, setView] = useState("works");
    const navigate = useNavigate()

    const handleWorksClick = () => {
        navigate(ROUTES.pages.admin);
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
