import React from 'react'
import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { BlogStore } from '../context/BlogContext'

const ProtectRoute = () => {
    let {isLoggedIn} =useContext(BlogStore)

    if(!isLoggedIn){
        return <Navigate to={"/auth"}/>
    }
  return <Outlet/>
}

export default ProtectRoute
