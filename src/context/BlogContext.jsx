import { createContext, useState } from "react";
import blogData from "../api/BlogApi";

export let BlogStore = createContext()

export let BlogProvider = ({children}) => {
    let [blogformData,setBlogFormData] = useState(blogData)
    let[mode,setMode] = useState(false)
    let [user,setUser]=useState(JSON.parse(localStorage.getItem("regUser")) || [])
    let [isLoggedIn,setIsLoggedIn] = useState( null)
    console.log(isLoggedIn)
   
    return (
        <BlogStore.Provider value={{
            blogformData,
            setBlogFormData,
            mode,
            setMode,
            user,
            setUser,
            isLoggedIn,
            setIsLoggedIn
        }}>{children}</BlogStore.Provider>
    )
}