import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import MainPage from "./components/MainPage/MainPage";
import ResumeViewer from "./components/ResumeViewer/ResumeViewer";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // This renders at "/"
        element: <MainPage />,
      },
      {
        path: "resume", // This renders at "/resume"
        element: <ResumeViewer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
