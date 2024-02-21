import { useState } from "react"
import ComponentTemplate from "../../templates_of_content/component_template/componentTemplate";
import TakeToPage from "../../templates_of_content/takeToPage/takeToPage";


let UseStateComponent=()=>{
    let [usestateData,setUseStateData]=useState('')

    return (
        <div>
             <TakeToPage url='/hooks' label='hooks page'></TakeToPage>
            <div >
                <ComponentTemplate label={usestateData}> </ComponentTemplate>
                <input style={{border:'2px solid black'}}type='text' placeholder="ENTER TEXT HERE" onChange={(e) => { setUseStateData(e.target.value) }}></input>
            </div>


        </div>
    )
}

export default UseStateComponent;