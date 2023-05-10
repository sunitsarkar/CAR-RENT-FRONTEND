import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import './common.css'


export default function Four(){

    const location=useLocation();
    const val=location.state.value;
    const [min,setMin]=useState();
    const [max,setMax]=useState();
    const navigate=useNavigate();

    const url="http://localhost:8000/book"
    const booking=()=>{
        const date=`${min} - ${max}`
        if(max>min){
            axios.post(url,{
                model:val,
                date:date
              }).then((res)=>{
                console.log(res);
                alert('booking done');
                navigate('/')
              });
        }
        else{
            alert('choose a valid date');
        }
    }

    return <div id="four">
        <h1>{val}</h1>
        <input type="date"  onChange={(e)=>{setMin(e.target.value)}} />
        <h3>to</h3>
        <input type="date"  onChange={(e)=>{setMax(e.target.value)}} />
        <br></br>
        <button onClick={booking}>book</button>
    </div>
}