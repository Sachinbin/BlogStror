import { createContext, useState } from "react";
import blogData from "../api/BlogApi";

export let BlogStore = createContext()

export let BlogProvider = ({children}) => {
    let [blogformData,setBlogFormData] = useState(blogData)
    let[mode,setMode] = useState(false)
    // console.log(blogformData)
   
    return (
        <BlogStore.Provider value={{
            blogformData,
            setBlogFormData,
            mode,
            setMode
        }}>{children}</BlogStore.Provider>
    )
}