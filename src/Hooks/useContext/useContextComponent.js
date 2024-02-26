import { useState,useEffect,useContext,createContext } from "react"
import ComponentTemplate from "../../templates_of_content/component_template/componentTemplate";
import TakeToPage from "../../templates_of_content/takeToPage/takeToPage";
import contextStyles from '../css_folder/useContext.module.css'



const SumanthContext = createContext();
export const useSumanthContext = () => useContext(SumanthContext);//this is custom hoook that must start with prefix 'use'

export const SumanthProvider = ({ children }) => {
  const [contextCount, setContextCount] = useState(100);//values passing thorugh context , not by props
  let multiplyBy2=()=>{
    setContextCount(contextCount*2);
  }
  return (
    <SumanthContext.Provider value={{ contextCount, setContextCount,multiplyBy2 }}>
      {children}    
    </SumanthContext.Provider>
  );
};

let SumanthConsumer=()=>{

  let {contextCount, setContextCount}=useSumanthContext();
  let [count,setCount]=useState(0);

 
  let increaseCounter=()=>{
    setCount(count+1);
    setContextCount(contextCount+1)

  }
  return (
      <div>
           <TakeToPage url='/hooks' label='hooks page'></TakeToPage>
           <TakeToPage url='/useContextToCheck' label='check context'></TakeToPage>
          <div >

          <ComponentTemplate label={'useState Data '+count+' <--> '+ ' context data '+contextCount}> </ComponentTemplate>
          <div  className={contextStyles.counter} onClick={increaseCounter}>counter</div>
            </div>
      </div>
  )
}



let UseContextComponent=()=>{

  return (
  <SumanthProvider>
    <SumanthConsumer></SumanthConsumer>
  </SumanthProvider>
  )
  
  
    
}



  
export default UseContextComponent;