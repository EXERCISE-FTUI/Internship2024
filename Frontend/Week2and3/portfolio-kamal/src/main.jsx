import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"

import App from "./App"
import "./index.css"

import LandingPage from "./pages/Landing.jsx"
import ProjectsPage from "./pages/Projects.jsx"
import ProjectsDetail from "./pages/ProjectDetail.jsx"

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/projects/:projectName",
        element: <ProjectsDetail />,
      }
    ],
  },
  {
    path: "/",
    element: <Navigate to="/" />,
  },
])

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}