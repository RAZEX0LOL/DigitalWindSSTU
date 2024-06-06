import React, { useEffect, useState } from "react";
import axios from "axios";
import AllNews from "./components/mainPage/AllNews";
import Footer from "./components/Footer";
import AllInfo from "./components/mainPage/AllInfo";
import MainPage from "./components/mainPage/MainPage";
import Banner from "./components/mainPage/Banner";
import Header from "./components/Header";
import Contacts from "./components/mainPage/Contacts";
import OrganizatorsAndPartners from "./components/mainPage/OrganizatorsAndPartners";
import Catalog from "./components/mainPage/Catalog";
import WorkAllInfo from "./components/userPage/WorkAllInfo";
import Auth from "./components/mainPage/Auth";
import Register from "./components/mainPage/Register";
import ReturnPassword from "./components/mainPage/ReturnPassword"; // Import the new component

export default function App() {
    const [showAllNews, setShowAllNews] = useState(false);
    const [showAllInfo, setShowAllInfo] = useState(false);
    const [showContacts, setShowContacts] = useState(false);
    const [showOrganizatorsAndPartners, setShowOrganizatorsAndPartners] = useState(false);
    const [showCatalog, setShowCatalog] = useState(false);
    const [newsData, setNewsData] = useState([]);
    const [allNewsData, setAllNewsData] = useState([]);
    const [worksData, setWorksData] = useState([]);
    const [showWork, setShowWork] = useState(false);
    const [selectedWorkData, setSelectedWorkData] = useState(null);
    const [showMainPage, setShowMainPage] = useState(true);
    const [showAuth, setShowAuth] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showReturnPassword, setShowReturnPassword] = useState(false); // New state

    useEffect(() => {
        async function fetchData() {
            try {
                const newsResponse = await axios.get("http://localhost:8000/api/news/last");
                const allNewsResponse = await axios.get("http://localhost:8000/api/news");
                const allWorksResponse = await axios.get("http://localhost:8000/api/creations");
                setNewsData(newsResponse.data);
                setAllNewsData(allNewsResponse.data);
                setWorksData(allWorksResponse.data);
            } catch (error) {
                alert("Ошибка при загрузке данных! Повторите попытку позже");
                console.log(error);
            }
        }

        fetchData();
    }, []);

    const showNews = () => {
        resetOtherViews();
        setShowAllNews(true);
    };

    const showInfo = () => {
        resetOtherViews();
        setShowAllInfo(true);
    };

    const showAllContacts = () => {
        resetOtherViews();
        setShowContacts(true);
    };

    const showAllOrganizatorsAndPartners = () => {
        resetOtherViews();
        setShowOrganizatorsAndPartners(true);
    };

    const showAllCatalog = () => {
        resetOtherViews();
        setShowCatalog(true);
    };

    const showWorkInfo = (workData) => {
        resetOtherViews();
        setSelectedWorkData(workData);
        setShowWork(true);
    };

    const resetOtherViews = () => {
        setShowAllNews(false);
        setShowAllInfo(false);
        setShowContacts(false);
        setShowOrganizatorsAndPartners(false);
        setShowCatalog(false);
        setShowWork(false);
        setShowMainPage(false);
    };

    const handleLogout = () => {
        setShowAuth(true);
        resetOtherViews();
    };

    const showMainPageHandler = () => {
        setShowMainPage(true);
        setShowAuth(false);
        setShowRegister(false);
        setShowReturnPassword(false);
    };

    const showRegisterHandler = () => {
        setShowRegister(true);
        setShowAuth(false);
    };

    const showAuthHandler = () => {
        setShowAuth(true);
        setShowRegister(false);
        setShowReturnPassword(false); // Hide return password view
    };

    const showReturnPasswordHandler = () => {
        setShowReturnPassword(true);
        setShowAuth(false);
    };

    return (
        <div className="App">
            <Header
                showNews={showNews}
                showAllInfo={showInfo}
                showAllContacts={showAllContacts}
                showAllOrganizatorsAndPartners={showAllOrganizatorsAndPartners}
                showAllCatalog={showAllCatalog}
                showMainPage={showMainPageHandler}
                handleLogout={handleLogout}
            />
            {!showAuth && !showRegister && !showReturnPassword && <Banner />}
            {!showAuth && !showRegister && !showReturnPassword && showMainPage && !showAllNews && !showAllInfo && !showContacts && !showOrganizatorsAndPartners && !showCatalog && !showWork && (
                <MainPage
                    newsData={newsData}
                    showNews={showNews}
                    showAllContacts={showAllContacts}
                    showAllOrganizatorsAndPartners={showAllOrganizatorsAndPartners}
                />
            )}
            {!showAuth && !showRegister && !showReturnPassword && showAllNews && <AllNews allNewsData={allNewsData} />}
            {!showAuth && !showRegister && !showReturnPassword && showAllInfo && <AllInfo />}
            {!showAuth && !showRegister && !showReturnPassword && showContacts && <Contacts />}
            {!showAuth && !showRegister && !showReturnPassword && showOrganizatorsAndPartners && <OrganizatorsAndPartners />}
            {!showAuth && !showRegister && !showReturnPassword && showCatalog && <Catalog worksData={worksData} showWorkInfo={showWorkInfo} />}
            {!showAuth && !showRegister && !showReturnPassword && showWork && selectedWorkData && <WorkAllInfo workData={selectedWorkData} />}
            {showAuth && <Auth showRegister={showRegisterHandler} showReturnPassword={showReturnPasswordHandler} />} {/* Pass handler */}
            {showRegister && <Register showAuth={showAuthHandler} />}
            {showReturnPassword && <ReturnPassword showAuth={showAuthHandler} />}
            {!showAuth && !showRegister && !showReturnPassword && <Footer />}
        </div>
    );
}
