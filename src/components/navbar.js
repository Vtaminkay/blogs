import { Link } from "react-router-dom";
const Navbar = () => {
    return (  
    <nav className=" font-['Oswald'] h-20 bg-red-100 p-5 flex items-center border-b-2 border-neutral-400">
      
            <h1 className="text-5xl font-bold text-gray-800 text-center"> Caesar's Salad </h1>
            
            <div className=" ml-auto  "> 
            <Link className=" ml-4 no-underline p-2 text-purple-400 hover:text-red-800 " to="/">Home</Link>
            <Link to="/create" className=" ml-4 no-underline p-2 text-purple-400  hover:text-red-800">Blog</Link>
            <Link to= "/newblogs" className=" ml-4 no-underline p-2 text-purple-400  hover:text-red-800 " href="">New Blogs</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
