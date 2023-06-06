import React from 'react';
import { Outlet, Link,Routes,Route } from "react-router-dom";
import './App.css';
import Course from './components/Course';
import Request from './components/Request';


function App() {

 

  return (

   
    <>


<nav class="navbar navbar-light bg-light">
        <ul className='d-flex flex-row'>
          <button className='btn btn-primary m-2'>
            <Link className='navbar-brand text-light' to="/">Course Email</Link>
          </button>
         
          <button className='btn btn-primary m-2'>
            <Link  className='navbar-brand text-light' to="/contact">Request Email</Link>
          </button>
        </ul>
      </nav>


    <div className="mt-5 container d-flex justify-content-center align-items-center outer-container-size">

    
    <div className="container">

    <Routes>
        <Route exact path='/' element={<Course/>} />
        <Route path='/contact' element={<Request/>} />
        
        <Route path='/*' element={<Course/>} />
 </Routes>




   
    </div></div>
    </>
  )
}

export default App
