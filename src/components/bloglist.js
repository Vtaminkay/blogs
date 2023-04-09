import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
//🧁 const BlogList =(props)- can pass props as arg


/* 🧁  const changeN= props.blogzz //👊- changeN now acess and stores the value of blogzz(changeN= blogzz)
const atitle= props.title (or) the pass directly in args
 */ 


const BlogList =({blogs,title}) => {
/*   const navigate= useNavigate();
  const handleNavigate=()=>{
    navigate("/blogs/:id")
  } */
    return ( 
        <div className=" ">
          <h1 className=" text-xl font-bold text-teal-900">{title}</h1>
          {blogs.map((i)=>(
            <div  className=" shadow-md  m-3 p-2 cursor-pointer" key={i.id}  > 
            <Link to= {`/blogs/${i.id}`}>
              <h2 className=" text-xl text-green-800 font-semibold my-2"> {i.title} </h2>
             <p className=" text-base mb-1"> Written by {i.author}</p>
             </Link>
              {/* <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> handleDelete(i.id)}>Delete</button> */}
              
            </div>
          ))    } 
        </div>
     );
}
 
export default BlogList; 
