import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CourseDetails from "../pages/CourseDetails";
import Courses from "../pages/Courses";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const route = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:([
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/courses',
                element:<Courses/>
            },
            {
                path:'/course/:id',
                loader:() =>fetch(''),
                element:<CourseDetails/>
            }
        ])
    }
])