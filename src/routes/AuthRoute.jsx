import React, { useContext } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router'
import { BlogStore } from '../context/BlogContext'


const AuthRoute = () => {
  // let navigate = useNavigate()
    let {isLoggedIn} = useContext(BlogStore)

    if(isLoggedIn){
        return <Navigate to={"/dashboard"}/>
    }
  return <Outlet/>
}

export default AuthRoute
