import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './common.css'


export default function Third(){

    const location=useLocation();
    const [arr,setArr]=useState();
    const navigate=useNavigate();

    console.log(location.state.value);
    const val=location.state.value;
    const url = "http://localhost:8000/getcar"

    axios.get(url).then((res) => {
        setArr(res.data)
      });

    if(arr){
        return <div id="third">
        {
        arr.map((ele) => {
          if (ele.type == val) {
            const model = ele.model;
            return <div>
              <input value={model} type="radio" onChange={()=>{
                navigate('/four',{
                    state:{
                        value: model
                    }
                })
              }}/>
              <lable>{model}</lable>
            </div>
          }
        })
      }
    </div>
    }
}