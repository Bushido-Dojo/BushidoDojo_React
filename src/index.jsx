import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Register from "./pages/Register/Register";
import Login from "./pages/login/login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Matricula from "./pages/Matricula/Matricula";
import { DeleteConta, DeleteContaPage } from "./pages/DeleteConta/DeleteConta";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/bushido-dashboard",
    element: <Dashboard/>,
  },
  {
    path: "bushido-dashboard/matricula",
    element:<Matricula/>
  },
  {
    path:"bushido-dashboard/delete-account",
    element:<DeleteContaPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
