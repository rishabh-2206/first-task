import './App.css';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Userbox from './components/Userbox';



  function App() {
    const [data,setData]=useState([])
    useEffect( () => {
       fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res=>res.json())
      .then(data=>{
        console.log("got data",data);
        setData(data);
      })
      .catch(err=>{
      console.log("error:",err);
      })
    },[]);

// console.log("got data",data);
  return (
    <div className="App">
          <h2>Data is: </h2>
          <Userbox data={data}/>
          
         
    </div>
  );
}

export default App;