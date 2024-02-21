import { useState } from "react"
import ComponentTemplate from "../../templates_of_content/component_template/componentTemplate";
import TakeToPage from "../../templates_of_content/takeToPage/takeToPage";
import useRefStyles from '../css_folder/useRef.module.css'


let CustomHookComponent=()=>{
    let [usestateData,setUseStateData]=useState('')

    let [count,increment,decrement]=useCounterHook(0);



    return (
        <div>
             <TakeToPage url='/hooks' label='hooks page'></TakeToPage>
            <div >
               
                <ComponentTemplate label={' data from custom hook functions -->'+count}> </ComponentTemplate>
                <div className={useRefStyles.box}>

                <div className={useRefStyles.changeButton}onClick={increment}>increase</div>
                <div className={useRefStyles.changeButton} onClick={decrement}>decrease</div>

              </div>

              </div>


        </div>
    )
}


let useCounterHook=(intitialValue=0)=>{


    let [count,setCount]=useState(intitialValue);
    let increment=()=>{
        setCount(count+1);
    }
    let decrement=()=>{
        setCount(count-1);
    }
    return [count,increment,decrement];
    
}

export default CustomHookComponent;