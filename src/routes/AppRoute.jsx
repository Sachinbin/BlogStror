import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layout/MainLayout'
import Home from '../page/Home'
import BlogDetails from '../page/BlogDetails'
import AuthLayout from '../layout/AuthLayout'
import Login from '../components/Login'
import Register from '../components/Register'

const AppRoute = () => {
    let router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path:'/blog/:id',
                    element:<BlogDetails/>
                }
            ]
        },{
            path:"/auth",
            element:<AuthLayout/>,
            children:[
                {
                    path:'',
                    element:<Login/>
                },
                {
                    path:"register",
                    element:<Register/>
                }
            ]
        }
    ])
    return <RouterProvider router={router} />
}

export default AppRoute
