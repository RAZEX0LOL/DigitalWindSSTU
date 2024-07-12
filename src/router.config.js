import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { EventsPage } from "./pages/events";
import { EventPage } from "./pages/event";
import AdminPage from "./components/adminPage/AdminPage";
import JuryPage from "./components/juryPage/JuryPage";
import UserPage from "./components/userPage/UserPage";
import React from "react";
import { AdminEventsPage } from "./pages/admin/events";
import { AdminEventPage } from "./pages/admin/event";

const PAGES = {
  home: '/',
  events: '/events',
  admin: '/admin',
  jury: '/jury',
  user: '/user',
  adminEvents: '/admin/events',
}

const LABELS = {
  home: '',
  events: 'Мероприятия',
  admin: '',
  jury: '',
  user: '',
  adminEvents: 'Мероприятия',
}

export const ROUTES = {
  pages: PAGES,
  labels: LABELS,
  redirect: {
    event: (id) => `${PAGES.events}/${id}`,
    eventRegister: `${PAGES.events}/register/`,
    adminEventEdit: (id) => `${PAGES.adminEvents}/${id}`
  }
}

export const routerConfig = createBrowserRouter([
  {
    path: PAGES.home,
    element: <App />
  },
  {
    path: PAGES.events,
    element: <EventsPage />
  },
  {
    path: `${PAGES.events}/:id`,
    element: <EventPage />
  },
  {
    path: PAGES.admin,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
      {
        path: ROUTES.pages.adminEvents,
        element: <AdminEventsPage />
      },
      {
        path: `${ROUTES.pages.adminEvents}/:id`,
        element: <AdminEventPage />
      }
    ]
  },
  {
    path: PAGES.jury,
    element: <JuryPage />,
  },
  {
    path: PAGES.jury,
    element: <UserPage />
  }
])
