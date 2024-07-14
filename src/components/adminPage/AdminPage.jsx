import React,{useState} from "react";
import HeaderAdmin from "./HeaderAdmin";
import ProfileForm from "./ProfileFormAdmin";
import JuryList from "./JuryList";
import UserList from "./UserList";
import WorkList from "./WorkList";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../router.config";


export default function AdminPage(){
    const navigate = useNavigate()
    const [view, setView] = useState("jury");

    const handleJuryClick = () => {
        navigate(ROUTES.pages.admin);
        setView("jury");
    };

    const handleLoginChangeClick = () => {
        navigate(ROUTES.pages.admin);
        setView("profile");
    };
    const handleUserClick = () => {
        navigate(ROUTES.pages.admin);
        setView("user");
    };

    const handleWorksClick = () => {
        navigate(ROUTES.pages.admin);
        setView("works");
    };

    return(
        <>
            <HeaderAdmin handleJuryClick={handleJuryClick} handleLoginChangeClick={handleLoginChangeClick} handleUserClick={handleUserClick} handleWorksClick={handleWorksClick}/>
            {view === "jury" && <JuryList />}
            {view === "profile" && <ProfileForm />}
            {view === "user" && <UserList />}
            {view === "works" && <WorkList />}
        </>
    );
}