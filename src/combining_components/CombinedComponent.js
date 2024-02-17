import FirstComponent from "./FirstComponent"
import SecondComponent from "./SecondComponent"
import { useState } from "react"
export default function CombinedComponent(){
    
    return (
        <div className="rightdiv">
                <div className="rightboxes">
                    <FirstComponent ></FirstComponent>

                </div>
                <div className="rightboxes">
                    <SecondComponent ></SecondComponent>

                </div>
            </div> 
    )
}