import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AdminPage from "./components/adminPage/AdminPage";
import { RouterProvider, createHashRouter } from "react-router-dom";
import JuryPage from "./components/juryPage/JuryPage";
import UserPage from "./components/userPage/UserPage";


const router = createHashRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path:"/admin",
        element: <AdminPage/>,
    },
    {
        path:"/jury",
        element: <JuryPage/>,
    },
    {
        path:"/user",
        element:<UserPage/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

