import React, { useEffect, useState } from "react";
import './common.css'
import { useNavigate } from "react-router-dom";

export default function First(){

    const navigate=useNavigate();


    return <div className="middle">
        <input type="radio" onChange={()=>{
        navigate("/second", {
            state: {
                value: 2,
            },
        })}}/>
        <leble>2</leble>
        <br/>
        <input type="radio" onChange={()=>{
        navigate("/second", {
            state: {
                value:4,
            },
        })}}/>
        <leble>4</leble>
    </div>
}