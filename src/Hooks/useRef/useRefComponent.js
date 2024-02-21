import { useState ,useRef} from "react"
import ComponentTemplate from "../../templates_of_content/component_template/componentTemplate";
import TakeToPage from "../../templates_of_content/takeToPage/takeToPage";

import useRefStyles from '../css_folder/useRef.module.css'
let UseRefComponent=()=>{

    
    let [usestateData,setUseStateData]=useState('');
    let colors=['red','black','orange','yellow','blue'];
    let myRefElement=useRef();

    let colorChange=()=>{
        let colorBoxDivElement=myRefElement.current;
       colorBoxDivElement.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];


    }

    return (
        <div>
             <TakeToPage url='/hooks' label='hooks page'></TakeToPage>
            <div >
                <ComponentTemplate label='USE REF COMPONENT' ref={myRefElement}> </ComponentTemplate>
                
                <div className={useRefStyles.box}>
                <div className={useRefStyles.colorBox} ref={myRefElement}>COLOR BOX</div>
                <div className={useRefStyles.changeButton} onClick={colorChange}>CHANGE COLOR</div>
           
                </div>
                 </div>


        </div>
    )
}

export default UseRefComponent;