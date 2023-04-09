import { useNavigate, useParams } from "react-router";
import useFetch from "../useFetch";
import { useState } from "react";


//👉- will be using the route param hook and grabbing the blog for that ID. 
const Blogsdisplay = () => {
    const {id}= useParams(); // grabbing the id from the router. The const name should be same as what we give in route
    const { blogs}= useFetch('http://localhost:8000/blogs/'+id)
    const{ blogs: data}= useFetch('http://localhost:8000/blogs')
    //console.log(data); 
    const [updateblogs, setUpdateblogs]= useState(null);

    const navigate= useNavigate();
    
    const handleDelete=()=>{
        
     /*    fetch('http://localhost:8000/blogs/'+id,{
            method:'Delete'
        }).then(()=>{
            navigate("/")
        })   */ 
        
        const d= data.filter((i)=>i.id!= id)
        setUpdateblogs(d);
        console.log(updateblogs);
    }

    return (
      
          <>
    <div>{ 
    blogs&& (
        <article>
             <h2 className=" text-xl font-bold">{blogs.title}</h2>
             <p>{blogs.body}</p>
             <p  className=" font-bold">{blogs.author}</p>
             <button className="font-bold py-2 px-4 rounded  bg-yellow-300" onClick={handleDelete}>Delete</button>
        </article>
    )
    }
        
    </div>
    </>);
}
 
export default Blogsdisplay;
