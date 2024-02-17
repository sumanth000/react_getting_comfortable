
import { useState } from "react";
import comstyles from './css_folder/first&secondComp.module.css'

export default function FirstComponent(){

   let [counter,setCounter]=useState(0);

   const increment=()=>{
    let newvalue=counter+1;
    setCounter(newvalue);
   }
    return (
        <div>
            <div className={comstyles.container} >  
                <h2>FUNCTION COMPONENT</h2>
                <p>counter:{counter}</p>
                <button onClick={increment}>increment</button>
            </div>
        </div>
    )
}