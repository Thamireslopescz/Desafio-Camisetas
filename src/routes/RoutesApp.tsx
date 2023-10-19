import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import React from "react";
import List from "../pages/List";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>NOT FOUND</h1>,
  },
  {
    path: "/list",
    element: <List />,
    errorElement: <h1>NOT FOUND</h1>,
  },
]);

const RoutesApp: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default RoutesApp;
