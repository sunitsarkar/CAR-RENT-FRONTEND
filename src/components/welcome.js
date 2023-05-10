import React, { useState } from "react";
import './welcome.css'
import { useNavigate } from "react-router-dom";

export default function Welcome(){

  const navigate=useNavigate();
  const [f,setF]=useState('');
  const [l,setL]=useState('');
  const nav=()=>{
    if(f && l){navigate('/first')}
    else{
      alert('enter first name and last name')
    }
  }
    
    return <div id="main">
        <h1>First, what is your name?</h1>
      <h3>First Name</h3>
      <input className='detail' onChange={(e)=>{setF(e.target.value)}}/>
      <br/>
      <h3>Last Name</h3>
      <input className='detail' onChange={(e)=>{setL(e.target.value)}}/>
      <br/><br/>
      <button id='next' onClick={nav}>Next</button>
    </div>
}