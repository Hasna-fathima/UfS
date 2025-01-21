import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css"; 
import UserLayout from "./layout/userLayout.jsx";
import NotFound from "./components/Notfound.jsx";
import Home from "./components/home.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout/>,
    errorElement: <NotFound />,
    children: [
    
   
      {
        path:'/',
        element:<Home/>
      },
      
     
   
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);