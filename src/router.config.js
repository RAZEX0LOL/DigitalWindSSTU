import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import {EventsPage} from "./pages/events";
import {EventPage} from "./pages/event";
import AdminPage from "./components/adminPage/AdminPage";
import JuryPage from "./components/juryPage/JuryPage";
import UserPage from "./components/userPage/UserPage";
import React from "react";

const PAGES = {
    home: '/',
    events: '/events',
    admin: '/admin',
    jury: '/jury',
    user: '/user'
}

export const ROUTES = {
    pages: PAGES,
    redirect: {
        event: (id) => `${PAGES.events}/${id}`
    }
}

export const routerConfig = createBrowserRouter([
    {
        path: PAGES.home,
        element: <App/>
    },
    {
        path: PAGES.events,
        element: <EventsPage/>
    },
    {
        path: `${PAGES.events}/:id`,
        element: <EventPage/>
    },
    {
        path: PAGES.admin,
        element: <AdminPage/>,
    },
    {
        path: PAGES.jury,
        element: <JuryPage/>,
    },
    {
        path: PAGES.jury,
        element: <UserPage/>
    }
])