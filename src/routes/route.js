import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CheckOut from "../pages/CheckOut";
import CourseDetails from "../pages/CourseDetails";
import Courses from "../pages/Courses";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const route = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<Error/>,
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
                loader:({params}) =>fetch(`https://b610-lerning-platform-server-side-ismailhossendev-main.vercel.app/course/${params.id}`),
                element:<CourseDetails/>
            },
            {
                path:'/checkout/:id',
                loader:({params}) =>fetch(`https://b610-lerning-platform-server-side-ismailhossendev-main.vercel.app/course/${params.id}`),
                element:<CheckOut/>
            },
            
            
        ])
    }
])