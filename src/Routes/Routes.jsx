import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Shared/Home";
import Main from "../Layout/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <>404 Error</>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/a",
        element: <></>,
      },
    ],
  },
]);

export default routes;
