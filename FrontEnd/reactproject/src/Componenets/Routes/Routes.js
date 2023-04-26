import Main from "../../layouts/Main";
import Appointment from "../AppointmentRouter/Appointment";
import DashBoard from "../DashBoard/DashBoard";
import Home from "../Home/Home";
import Login from "../Login/Login";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import SignUp from "../SignUp/SignUp";

const { createBrowserRouter, RouterProvider } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRouter>
            <DashBoard></DashBoard>
          </PrivateRouter>
        )
      }
    ]
  }
]);
