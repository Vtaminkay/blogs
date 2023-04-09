
import { useState} from "react"
import useFetch from "../useFetch";
import BlogList from "./bloglist";

const Home = () => {
//🌸useState 
//const [name,setName]= useState('Khatija')   

const { blogs, error,isPending}= useFetch(' http://localhost:8000/blogs')


/* const handleDelete=(id)=>{
    const newBlogs= blogs.filter(i=>i.id !== id )
    setBlogs(newBlogs)
   
}  */

    return (  
        <div>
             { error && <div> {error}</div>}
            {isPending && <div>Loading...</div>}
           
        { blogs && <BlogList blogs= {blogs} title="My Blogs!"  /> }
        {/*  <button className="font-bold py-2 px-4 rounded  bg-yellow-300" onClick={()=> setName('Vitamin Kay')}> {name} </button> */} 
       
          
         
        </div>
        //  <BlogList blogs= {blogs} title="My Blogs!"/> 👊-  blogzz now stores the blogs object(blogzz=blogs) and will be passed onto props.  
        
     );
}
 
export default Home;
//<BlogList blogs={blogs.filter(i=>i.author=='BillyG')} title="Bill Gates's Blogs"/>
 