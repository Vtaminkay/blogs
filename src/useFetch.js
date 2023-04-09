import { useState, useEffect } from "react";
//🧁- Creating a custom hook. 
//👉 - It is defined as a function 
//👉- It has to start with the word 'use'
//👉- It has to return a value
const useFetch = (url) => {

const [isPending, updatePending]= useState(true) 
const [error, updateError]= useState(null)
const[blogs, setBlogs]= useState(null)

    //🧁useEffect - Using the useEffect hook inside our custom hook

useEffect(()=>{
    setTimeout(()=>{ 
        fetch(url)
    .then(res=>{
      
        if(!res.ok){
            updatePending(false)
            throw Error('Could not fetch the data for that resource')
        }
        return res.json()  
    })
    .then(data =>{
        updatePending(false)
        setBlogs(data)
        updateError(null)
        
    })
    .catch((err)=>{
        updatePending(false)
     updateError(err.message)
   
    })
},1000)
     
},[url]) //👉- Passing url as dependency so it re-runs to get the data for that end point everytime the url changes.

    return {blogs, error,  isPending}; //👉- returning these values as an object
}
 
export default useFetch;