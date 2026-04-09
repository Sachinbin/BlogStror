import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import { BlogStore } from '../context/BlogContext'
import { Navigate } from 'react-router'

const AuthRoute = () => {
    let {isLoggedIn} = useContext(BlogStore)

    if(isLoggedIn){
        return <Navigate to={"/dashboard"}/>
    }
  return <Outlet/>
}

export default AuthRoute
