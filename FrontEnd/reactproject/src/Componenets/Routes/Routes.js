import Main from "../../layouts/Main";
import Home from "../Home/Home";

const { createBrowserRouter, RouterProvider } = require("react-router-dom");

export const router=createBrowserRouter([
{
    path:'/',element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/home',
            element:<Home></Home>
        }
    ]
}]
);

