import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layout/MainLayout'
import Home from '../page/Home'
import BlogDetails from '../page/BlogDetails'

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
        }
    ])
    return <RouterProvider router={router} />
}

export default AppRoute
