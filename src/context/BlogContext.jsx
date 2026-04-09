import { createContext, useState } from "react";
import blogData from "../api/BlogApi";

export let BlogStore = createContext()

export let BlogProvider = ({children}) => {
    let [blogformData,setBlogFormData] = useState(blogData)
    let[mode,setMode] = useState(false)
    let[loggedOut,setLoggedOut] = useState(false)
    let [user,setUser]=useState(JSON.parse(localStorage.getItem("regUser")) || [])
    let [isLoggedIn,setIsLoggedIn] = useState( JSON.parse(localStorage.getItem("logUr"))||null)
    // console.log(isLoggedIn)
   
    return (
        <BlogStore.Provider value={{
            blogformData,
            setBlogFormData,
            mode,
            setMode,
            user,
            setUser,
            isLoggedIn,
            setIsLoggedIn,
            loggedOut,
            setLoggedOut
        }}>{children}</BlogStore.Provider>
    )
}