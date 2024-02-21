import { useState,useEffect } from "react"
import ComponentTemplate from "../../templates_of_content/component_template/componentTemplate";
import TakeToPage from "../../templates_of_content/takeToPage/takeToPage";


let UseEffectComponent=()=>{
    let [usestateData,setUseStateData]=useState('')

    let [useEffectData,setUseEffectData]=useState(0)

    useEffect(()=>{
        setUseEffectData(useEffectData+1)
    },[usestateData])

    return (
        <div>
             <TakeToPage url='/hooks' label='hooks page'></TakeToPage>

            <div >

            <ComponentTemplate label={'Rendered times'+useEffectData}> </ComponentTemplate>
                        <input  style={{border:'2px solid black'}}type='text' placeholder="ENTER TEXT HERE" onChange={(e) => { setUseStateData(e.target.value) }}></input>


                
            </div>


        </div>
    )
}

export default UseEffectComponent;