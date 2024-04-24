// import React, {useEffect, useState} from "react";
// import AllNews from "./components/AllNews";
// import Footer from "./components/Footer";
// import AllInfo from "./components/AllInfo";
// import MainPage from "./components/MainPage";
// import Banner from "./components/Banner";
// import Header from "./components/Header";
// import Contacts from "./components/Contacts";
// import OrganizatorsAndPartners from "./components/OrganizatorsAndPartners";
// import Catalog from "./components/Catalog";
// import axios from "axios";
// import NewAllInfo from "./components/WorkAllInfo";
// import WorkAllInfo from "./components/WorkAllInfo";
//
// export default function App() {
//     const [showAllNews, setShowAllNews] = useState(false);
//     const [showAllInfo, setShowAllInfo] = useState(false);
//     const [showContacts, setShowContacts] = useState(false);
//     const [showOrganizatorsAndPartners,setShowOrganizatorsAndPartners]=useState(false);
//     const [showCatalog,setShowCatalog]=useState(false);
//     const [newsData, setNewsData] = useState([]);
//     const [allNewsData,setAllNewsData]=useState([]);
//     const [allNewInfo,setAllNewInfo]=useState(false);
//     const [selectedNewsData, setSelectedNewsData] = useState(null);
//     const [worksData,setWorksData]=useState([]);
//     const [showWork,setShowWork]=useState(false);
//
//
//
//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const newsResponse = await axios.get('http://localhost:8000/api/news/last');
//                 const allNewsResponce=await axios.get('http://localhost:8000/api/news');
//                 const allWorksResponce=await axios.get('http://localhost:8000/api/creations');
//                 setNewsData(newsResponse.data);
//                 setAllNewsData(allNewsResponce.data);
//                 setWorksData(allWorksResponce.data);
//
//             } catch (error) {
//                 alert("Ошибка при загрузке данных! Повторите попытку позже");
//                 console.log(error);
//             }
//         }
//         fetchData();
//     }, []);
//
//
//
//     const showNews = () => {
//         setShowAllNews((prev) => !prev);
//         if (showAllInfo || showContacts || showOrganizatorsAndPartners || showCatalog || allNewInfo || showWork) {
//             setShowAllInfo(false);
//             setShowContacts(false);
//             setShowOrganizatorsAndPartners(false);
//             setShowCatalog(false);
//             setAllNewInfo(false);
//             setShowWork(false);
//         }
//     };
//
//     const showInfo = () => {
//         setShowAllInfo((prev) => !prev);
//         if (showAllNews || showContacts || showOrganizatorsAndPartners || showCatalog || allNewInfo || showWork) {
//             setShowAllNews(false);
//             setShowContacts(false);
//             setShowOrganizatorsAndPartners(false);
//             setShowCatalog(false);
//             setAllNewInfo(false);
//             setShowWork(false);
//         }
//     };
//
//     const showAllContacts = () => {
//         setShowContacts((prev) => !prev);
//         if (showAllNews || showAllInfo || showOrganizatorsAndPartners || showCatalog || allNewInfo || showWork)  {
//             setShowAllNews(false);
//             setShowAllInfo(false);
//             setShowOrganizatorsAndPartners(false);
//             setShowCatalog(false);
//             setAllNewInfo(false);
//             setShowWork(false);
//         }
//     };
//
//     const showAllOrganizatorsAndPartners=()=>{
//         setShowOrganizatorsAndPartners((prev) => !prev);
//         if (showAllNews || showAllInfo || showContacts || showCatalog || allNewInfo || showWork) {
//             setShowAllNews(false);
//             setShowAllInfo(false);
//             setShowContacts(false);
//             setShowCatalog(false);
//             setAllNewInfo(false);
//             setShowWork(false);
//         }
//     }
//     const showAllCatalog=()=>{
//         setShowCatalog((prev) => !prev);
//         if (showAllNews || showAllInfo || showContacts || showOrganizatorsAndPartners || allNewInfo || showWork) {
//             setShowAllNews(false);
//             setShowAllInfo(false);
//             setShowContacts(false);
//             setShowOrganizatorsAndPartners(false);
//             setAllNewInfo(false);
//             setShowWork(false);
//         }
//     }
//
//     const showAllNewInfo = (id) => {
//         const selectedNews = allNewsData.find(newsItem => newsItem.id === id);
//         if (selectedNews) {
//             setSelectedNewsData(selectedNews);
//             setAllNewInfo(true);
//             setShowAllNews(false);
//             setShowAllInfo(false);
//             setShowContacts(false);
//             setShowOrganizatorsAndPartners(false);
//             setShowCatalog(false);
//             setShowWork(false);
//         }
//     }
//
//     const showWorkInfo=()=>{
//         setShowWork((prev) => !prev);
//         if (showAllNews || showAllInfo || showContacts || showOrganizatorsAndPartners || allNewInfo || showCatalog) {
//             setShowAllNews(false);
//             setShowAllInfo(false);
//             setShowContacts(false);
//             setShowOrganizatorsAndPartners(false);
//             setAllNewInfo(false);
//             setShowCatalog(false);
//         }
//     }
//
//
//     return (
//         <div className="App">
//             <Header
//                 showNews={showNews}
//                 showAllInfo={showInfo}
//                 showAllContacts={showAllContacts}
//                 showAllOrganizatorsAndPartners={showAllOrganizatorsAndPartners}
//                 showAllCatalog={showAllCatalog}
//             />
//             <Banner />
//             {!showAllNews && !showAllInfo && !showContacts && !showOrganizatorsAndPartners && !showCatalog && !allNewInfo && !showWork && <MainPage newsData={newsData} showNews={showNews} showAllContacts={showAllContacts} showAllOrganizatorsAndPartners={showAllOrganizatorsAndPartners}/>}
//             {showAllNews && <AllNews allNewsData={allNewsData}/>}
//             {showAllInfo && <AllInfo />}
//             {showContacts && <Contacts />}
//             {showOrganizatorsAndPartners && <OrganizatorsAndPartners/>}
//             {showCatalog && <Catalog worksData={worksData}/>}
//             {allNewInfo && <NewAllInfo newsData={selectedNewsData} />}
//             {showWork && <WorkAllInfo/>}
//             <Footer />
//         </div>
//     );
// }

import React, {useEffect, useState} from "react";
import axios from "axios";
import AllNews from "./components/AllNews";
import Footer from "./components/Footer";
import AllInfo from "./components/AllInfo";
import MainPage from "./components/MainPage";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import OrganizatorsAndPartners from "./components/OrganizatorsAndPartners";
import Catalog from "./components/Catalog";
import WorkAllInfo from "./components/WorkAllInfo";

export default function App() {
    const [showAllNews, setShowAllNews] = useState(false);
    const [showAllInfo, setShowAllInfo] = useState(false);
    const [showContacts, setShowContacts] = useState(false);
    const [showOrganizatorsAndPartners, setShowOrganizatorsAndPartners] =
        useState(false);
    const [showCatalog, setShowCatalog] = useState(false);
    const [newsData, setNewsData] = useState([]);
    const [allNewsData, setAllNewsData] = useState([]);
    const [worksData, setWorksData] = useState([]);
    const [showWork, setShowWork] = useState(false);
    const [selectedWorkData, setSelectedWorkData] = useState(null);
    const [showMainPage, setShowMainPage] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const newsResponse = await axios.get(
                    "http://localhost:8000/api/news/last"
                );
                const allNewsResponse = await axios.get(
                    "http://localhost:8000/api/news"
                );
                const allWorksResponse = await axios.get(
                    "http://localhost:8000/api/creations"
                );
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
        setShowAllNews((prev) => !prev);
        if (
            showAllInfo ||
            showContacts ||
            showOrganizatorsAndPartners ||
            showCatalog ||
            showWork
        ) {
            setShowAllInfo(false);
            setShowContacts(false);
            setShowOrganizatorsAndPartners(false);
            setShowCatalog(false);
            setShowWork(false);
        }
    };

    const showInfo = () => {
        setShowAllInfo((prev) => !prev);
        if (
            showAllNews ||
            showContacts ||
            showOrganizatorsAndPartners ||
            showCatalog ||
            showWork
        ) {
            setShowAllNews(false);
            setShowContacts(false);
            setShowOrganizatorsAndPartners(false);
            setShowCatalog(false);
            setShowWork(false);
        }
    };

    const showAllContacts = () => {
        setShowContacts((prev) => !prev);
        if (
            showAllNews ||
            showAllInfo ||
            showOrganizatorsAndPartners ||
            showCatalog ||
            showWork
        ) {
            setShowAllNews(false);
            setShowAllInfo(false);
            setShowOrganizatorsAndPartners(false);
            setShowCatalog(false);
            setShowWork(false);
        }
    };

    const showAllOrganizatorsAndPartners = () => {
        setShowOrganizatorsAndPartners((prev) => !prev);
        if (
            showAllNews ||
            showAllInfo ||
            showContacts ||
            showCatalog ||
            showWork
        ) {
            setShowAllNews(false);
            setShowAllInfo(false);
            setShowContacts(false);
            setShowCatalog(false);
            setShowWork(false);
        }
    };

    const showAllCatalog = () => {
        setShowCatalog((prev) => !prev);
        if (
            showAllNews ||
            showAllInfo ||
            showContacts ||
            showOrganizatorsAndPartners ||
            showWork
        ) {
            setShowAllNews(false);
            setShowAllInfo(false);
            setShowContacts(false);
            setShowOrganizatorsAndPartners(false);
            setShowWork(false);
        }
    };

    const showWorkInfo = (workData) => {
        setSelectedWorkData(workData);
        setShowWork(true);
        if (
            showAllNews ||
            showAllInfo ||
            showContacts ||
            showOrganizatorsAndPartners ||
            showCatalog
        ) {
            setShowAllNews(false);
            setShowAllInfo(false);
            setShowContacts(false);
            setShowOrganizatorsAndPartners(false);
            setShowCatalog(false);
        }
    };

    const hideAllComponentsExceptMainPage = () => {
        setShowAllNews(false);
        setShowAllInfo(false);
        setShowContacts(false);
        setShowOrganizatorsAndPartners(false);
        setShowCatalog(false);
        setShowWork(false);
        setShowMainPage(true);
    };

    return (
        <div className="App">
            <Header
                showNews={showNews}
                showAllInfo={showInfo}
                showAllContacts={showAllContacts}
                showAllOrganizatorsAndPartners={showAllOrganizatorsAndPartners}
                showAllCatalog={showAllCatalog}
                showMainPage={hideAllComponentsExceptMainPage}
            />
            <Banner/>
            {!showAllNews &&
                !showAllInfo &&
                !showContacts &&
                !showOrganizatorsAndPartners &&
                !showCatalog &&
                !showWork && (
                    <MainPage
                        newsData={newsData}
                        showNews={showNews}
                        showAllContacts={showAllContacts}
                        showAllOrganizatorsAndPartners={showAllOrganizatorsAndPartners}
                    />
                )}
            {showAllNews && <AllNews allNewsData={allNewsData}/>}
            {showAllInfo && <AllInfo/>}
            {showContacts && <Contacts/>}
            {showOrganizatorsAndPartners && <OrganizatorsAndPartners/>}
            {showCatalog && (
                <Catalog worksData={worksData} showWorkInfo={showWorkInfo}/>
            )}
            {showWork && selectedWorkData && (
                <WorkAllInfo workData={selectedWorkData}/>
            )}
            <Footer/>
        </div>
    );
}
