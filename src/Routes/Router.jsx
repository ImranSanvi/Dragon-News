import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "./Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path: '',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch('/news.json')
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/news-details/:id',
        element: <NewsDetails></NewsDetails>,
        loader: () => fetch('/news.json'),
    },
    {
        path: '/*',
        element: <h1>Error - 404</h1>
    }
]);

export default router;