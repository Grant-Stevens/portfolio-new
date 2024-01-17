import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/pages/landingPage";
import IntroPage from "./components/pages/introPage";
import ProjectsPage from "./components/pages/projectsPage";
import ExperiencePage from "./components/pages/experiencePage";
import ContactMePage from "./components/pages/contactMePage";
import EducationPage from "./components/pages/educationPage";

const themes = {
  light: "public/light.css",
  dark: "public/dark.css",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/intro",
    element: <IntroPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/experience",
    element: <ExperiencePage />,
  },
  {
    path: "/contactme",
    element: <ContactMePage />,
  },
  {
    path: "/education",
    element: <EducationPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <React.StrictMode>
    <ThemeSwitcherProvider defaultTheme="light" themeMap={themes}>
      <RouterProvider router={router} />
    </ThemeSwitcherProvider>
  </React.StrictMode>
);
