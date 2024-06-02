import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SmallProj,Home} from "./components";
import {SmallProjWrapper} from "./hoc"
import "./index.css";
import { BgChanger,PasswordGenerator} from './components/Small Projects'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/SmallProjects",
        element: <SmallProj />,
      },
      {
        path: "/BgChanger",
        element: <BgChanger/>,
      },
      {
        path: "/PassWordGen",
        element:<SmallProjWrapper Proj={PasswordGenerator}/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
