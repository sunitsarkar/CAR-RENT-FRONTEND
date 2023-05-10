import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import './common.css'

export default function Second() {

  const [arr, setArr] = useState();
  const navigate = useNavigate()

  const location = useLocation();
  const val = location.state.value;
  const url = "http://localhost:8000/getcar"

  axios.get(url).then((res) => {
    setArr(res.data)
  });


  console.log(arr)

  if (arr) {
    return <div id="second">
      {
        arr.map((ele) => {
          if (ele.wheel == val) {
            const type = ele.type;
            return <div>
              <input value={type} type="radio" onChange={() => {
                navigate('/third', {
                  state: {
                    value: type
                  }
                })
              }} />
              <lable>{ele.type}</lable>
            </div>
          }
        })
      }
    </div>
  }
}