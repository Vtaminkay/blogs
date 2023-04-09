import { useState } from "react";
import { useNavigate } from "react-router";


const Create = () => {
  const [title, changeTitle] = useState(" ");
  const [body, setContent] = useState(" ");
  const [author, setAuthor] = useState(" ");
  const [array, setArray]= useState([]);
  const navigate = useNavigate();
  


  const handleSubmit = (e) => {
    e.preventDefault();
    const blogs = { title, body, author };
    console.log("blogs", blogs);
    fetch(
      "http://localhost:8000/blogs",
      {
        body: JSON.stringify(blogs),
        headers: { "Content-Type": "application/json" },
        method: "post",
      }
   
    )
      .then(() =>{ console.log("Created Successfully")
      navigate("/")
      console.log(navigate);
    
      }
      )
      .catch((err) => {
        console.log(err);
      });
    
  };

  /* const [changeValue,setChangeValue] = useState(null)
  const [SetchangeValue,setSetChangeValue] = useState(null)

  const handleMultiValueChange = (e) => {
    console.log(e.target.value);
    
    setChangeValue(e.target.value)
    console.log(changeValue);
  };

  console.log('SetchangeValue',SetchangeValue); */

 /*  const handleEnter = (e) => {
    if(e.key === 'Enter'){
        setSetChangeValue(changeValue)
        setArray(oldArray=>[...oldArray,{id:SetchangeValue}])
        console.log(array);

    }
  } */

/*   const blurHandle = () => {
    setArray(oldArray => [...oldArray, {id: changeValue}] );
    console.log('array',array)
  }; */

  return (
    <div>
      <h1 className=" text-xl font-bold"> Add a new Blog</h1>
      <form>
        <label>Blog title: </label>
        <input
          type="text"
          required
          className="border mr-6 mt-6"
          onChange={(e) => changeTitle(e.target.value)}
        />{" "}
        <br/>
        <label className=" ">Blog body: </label>
        <textarea 
          required
          className=" border mr-6 mt-6"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
       {/*  {[{id:1},{id:2},{id:3},{id:4}].map((data) => <input key={data.id} onChange={handleMultiValueChange} onKeyDown={handleEnter} className="border mr-6 mt-6" />)}
        <button >Button Click</button> */}
        <br /> <label className="mt-6">Author: </label>
        <select className="mt-8" onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>{" "} 
        <br />
        <button
          onClick={handleSubmit}
          className=" mt-8 rounded-3xl border-2 p-2 border-black"
        >
          Add blogs
        </button>{" "}
        <br />
      </form> 
    </div>
  );
}; 

export default Create;
