import { useState,useEffect,useContext,createContext } from "react"
import ComponentTemplate from "../../templates_of_content/component_template/componentTemplate";
import TakeToPage from "../../templates_of_content/takeToPage/takeToPage";
import contextStyles from '../css_folder/useContext.module.css'
const SumanthContext = createContext();
const useSumanthContext = () => useContext(SumanthContext);//this is custom hoook that must start with prefix 'use'

const SumanthProvider = ({ children }) => {
  const [contextCount, setContextCount] = useState(100);//values passing thorugh context , not by props

  return (
    <SumanthContext.Provider value={{ contextCount, setContextCount }}>
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