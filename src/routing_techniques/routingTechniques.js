import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import routingStyles from './css_folder/routingTechniques.module.css'
import { useLocation } from 'react-router-dom';
import ComponentTemplate from "../templates_of_content/component_template/componentTemplate";
const RoutingTechniques=()=>{

    

  
  //conditional rendering
    const [conditionalRender,setConditionalRender]=useState(false);
let conditionalRenderFunction=()=>{
    setConditionalRender(true);
}
 //window location 
const windowFunction = () => {
    window.location.href = '/windowMethodComponent';
  };



let navigate=useNavigate();
const navigateFunction = () => {
    navigate('/useNavigateComponent', { 
        state: { 
          id: 123,
          name: 'John Doe',
          isAdmin: true
        } 
      });
    }
    return (

        <div className={routingStyles.body}>
            <div className={routingStyles.panel}> 
            
            <button className={routingStyles.buttonStyle} onClick={conditionalRenderFunction}> conditional Rendering</button>
            <button className={routingStyles.buttonStyle} onClick={()=>{windowFunction()}}> window Component</button>
            <button className={routingStyles.buttonStyle} onClick={()=>{navigateFunction()}}> navigate Component</button>

            
            </div>

            <div className={routingStyles.screen}>
                <div className={routingStyles.waterPrint}>CLICK ABOVE BUTTONS</div>
            
            {/* <ComponentTemplate label="CLICK ABOVE BUTTONS"></ComponentTemplate> */}
            {
               conditionalRender &&  <ComponentTemplate label="CONDITIONAL RENDERING"></ComponentTemplate>
            }

            </div>
            


        </div>
    )
}

export default RoutingTechniques;