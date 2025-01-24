import React, { useState, useContext } from "react";

import {myloginContext} from "./LoginContext";
const UnAuthApp = () => {

    const [unm, setUnm]= useState("");
    const{Login}= useContext(myloginContext);
  return (
    <>
    <h1> Un Auth App</h1>
    Enter Name  : <input type="text" value={unm} onChange={(e)=>{setUnm(e.target.value)}}/>
    <br />  <br />
    <button onClick={()=>{LoginContext(unm)}}> Login </button>
      
    </>
  )
}

export default UnAuthApp;
