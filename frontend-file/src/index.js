import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import App from "./Components/App";
import Home from "./Components/Home";
import 'react-toastify/dist/ReactToastify.css';
import Register from "./Components/Register";
import Login from "./Components/Login";
import EditForm from "./Components/EditForm";
import Table from "./Components/Table";
import { Provider } from "react-redux";
// import Logout from "./Components/Logout";
import store from "./Redux/RepoStore";
import Admin from "./Components/Admin";
import Repo from "./Components/Repo";




const router = createBrowserRouter([
  {
    path: "",
    element: <App/>,
    children: [
        // {
        //   path: "/",
        //   element: <Home/>,
        // },
        {
          path: "/register",
          element: <Register/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/editForm/:id",
          element: <EditForm/>,
        },
        {
          path:"/table",
          element:<Table/>
      },
      {
        path:"/repo",
        element:<Repo></Repo>
    },
    {
      path:"/admin",
      element:<Admin/>
  },
      ],
  },  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />   
  </Provider>
);