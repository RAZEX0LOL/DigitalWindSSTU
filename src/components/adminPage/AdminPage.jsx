import React,{useState} from "react";
import HeaderAdmin from "./HeaderAdmin";
import ProfileForm from "./ProfileFormAdmin";
import JuryList from "./JuryList";
import UserList from "./UserList";
import WorkList from "./WorkList";


export default function AdminPage(){
    
    const [view, setView] = useState("jury");

    const handleJuryClick = () => {
        setView("jury");
    };

    const handleLoginChangeClick = () => {
        setView("profile");
    };
    const handleUserClick = () => {
        setView("user");
    };

    const handleWorksClick = () => {
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