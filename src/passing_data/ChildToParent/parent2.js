import { useState } from "react";
import Child2 from "./child2";


import parent2styles from './css_folders/parent2.module.css'

const  Parent2 =()=>{

    const [name,setName]=new useState('');

    return(
        <div className={parent2styles.body}>
            <div className={parent2styles.parent}>
                parent2 component: {name}
                <div className={parent2styles.child}>
                <Child2 setName={setName} ></Child2>

                </div>

            </div>

        </div>
    ) 
}

export default Parent2;