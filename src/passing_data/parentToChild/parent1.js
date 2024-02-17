import { useState } from "react";
import Child1 from "./child1";


import parent1styles from './css_folders/parent1.module.css'

const  Parent1 =()=>{

    const [name,setName]=new useState('');

    return(
        <div className={parent1styles.body}>
            <div className={parent1styles.parent}>
                parent1 component
                <input  className={parent1styles.input}onChange={(e)=>setName(e.target.value)} placeholder="ENTER HI"> 
                </input>
                <div className={parent1styles.child}>
                <Child1 data={name} ></Child1>

                </div>

            </div>

        </div>
    ) 
}

export default Parent1;