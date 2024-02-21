import { useState,useEffect } from 'react'
import routingStyles from '../routing_techniques/css_folder/routingTechniques.module.css'



import ComponentTemplate from '../templates_of_content/component_template/componentTemplate'

const Hooks=()=>{

  



   
    let useStateMethod=()=>{
        // setUseStateElement(true);
        window.location.href='/useStateComponent';

        console.log('useStateMethod')

    }
    let useEffectMethod=()=>{
        window.location.href='/useEffectComponent';

        console.log('useEffectMethod')

    }

    let useContextMethod=()=>{
        console.log('useContextMethod')
        window.location.href='/useContextComponent';


    }
    
    let useRefMethod=()=>{
        window.location.href='/useRefComponent';

        console.log('useRefMethod')

    }

    let customHookMethod=()=>{
        window.location.href='/customHookComponent';

        console.log('useRefMethod')

    }




    return (
        <div className={routingStyles.body}>
            <div className={routingStyles.panel}>

                <button className={routingStyles.buttonStyle} onClick={ useStateMethod}>useState</button>
                <button className={routingStyles.buttonStyle} onClick={ useEffectMethod}> useEffect</button>
                <button className={routingStyles.buttonStyle} onClick={useContextMethod}> useContext</button>
                <button className={routingStyles.buttonStyle} onClick={ useRefMethod}> useRef</button>
                <button className={routingStyles.buttonStyle} onClick={ customHookMethod}> customHook</button>



            </div>

            <div className={routingStyles.screen}>
                <div className={routingStyles.waterPrint}>CLICK ABOVE BUTTONS</div>

               




            </div>



        </div>
    )
}

export default Hooks;