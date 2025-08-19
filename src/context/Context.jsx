import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"



const NewsContext  = createContext();
export const  useNewsContext = ()  =>  useContext(NewsContext)

export const NewsProvider = ({children})=>{
const API_KEY = "2f98bf2903e240699d11b3b7031c8049"
const BASE_URL = "https://newsapi.org/v2"
const [articles , setArticles] = useState([])
const [loading , setloading] = useState(true)
const [error , seterror] = useState(null)

const fetchNews = async () => {
  setloading(true)
  seterror(null)
try {
const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params :{
      apikey : API_KEY,
      country :"us",
    }
  } )
  console.log(response.data.articles)
  setArticles(response.data.articles)
} catch (err) {
  seterror("could not fetch")
}
finally{
  setloading(false)
}
  
}
useEffect(()=>{
  fetchNews()
},[])

return <NewsContext.Provider value={{articles,error,loading,fetchNews }} >
  {children}
</NewsContext.Provider>
}