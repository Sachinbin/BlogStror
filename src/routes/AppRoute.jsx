import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layout/MainLayout'
import Home from '../page/Home'
import BlogDetails from '../page/BlogDetails'
import AuthLayout from '../layout/AuthLayout'
import Login from '../components/Login'
import Register from '../components/Register'
import Admin from '../page/Admin'
import NewBlogCard from '../components/NewBlogCard'
import DashboardLayout from '../layout/DashboardLayout'
import { ToastContainer, toast } from 'react-toastify';
import AuthRoute from './AuthRoute'

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
                    path: '/blog/:id',
                    element: <BlogDetails />
                }
            ]
        }, {
            path: "/auth",
            element: <AuthRoute />,
            children: [
                {
                    element: <AuthLayout />,
                    children: [
                        {
                            path: '',
                            element: <Login />
                        },
                        {
                            path: "register",
                            element: <Register />
                        }
                    ]
                }
            ]
        },
        {
            path: "/dashboard",
            element: <DashboardLayout />,
            children: [
                {
                    path: "",
                    element: <Admin />
                }
                , {
                    path: "new",
                    element: <NewBlogCard />
                }
            ]
        }
    ])
    return (<>
        <RouterProvider router={router} />
        <ToastContainer />
    </>)
}

export default AppRoute
