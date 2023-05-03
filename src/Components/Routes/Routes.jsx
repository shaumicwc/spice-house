import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ChefRecipe from "../Pages/ChefRecipe/ChefRecipe/ChefRecipe";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorElement from "../Pages/errorElement/ErrorElement";

import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blogs/Blog";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'chefRecipe/:id',
                element: <PrivateRoute><ChefRecipe/></PrivateRoute>,
                loader: ({params}) => fetch(`https://ai-10-spice-house-server-shaumicwc.vercel.app/recipe/${params.id}`)
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'blog',
                element: <Blog/>
            },
            {
                path: '*',
                element: <ErrorElement/>
            }
        ]
    },
    
])

export default route;