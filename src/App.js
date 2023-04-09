
//import './App.css';
import Navbar from './components/navbar';
import Home from './components/homepage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom' ;
import Create from './components/create';

import Blogsdisplay from './components/Blogsbody';
import NotFound from './components/NotFound';



function App() {
  return (
   <Router>
    <div className=" h-screen bg-white">
      <div className=''>
        <Navbar/>
    </div>
    <div className=" my-10 mx-auto p-5  max-w-2xl">
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/create' element={<Create/>}/>  
       <Route path='/blogs/:id' element={<Blogsdisplay/>}/>
       <Route path='/*' element={<NotFound/>}/>
       

        </Routes>
    </div>
    </div>
    </Router>
  ); 
}

export default App;

