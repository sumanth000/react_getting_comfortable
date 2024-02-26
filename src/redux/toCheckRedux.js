

import { useSelector, useDispatch } from 'react-redux';
import ComponentTemplate from '../templates_of_content/component_template/componentTemplate';

import useRefStyles from '../Hooks/css_folder/useRef.module.css'
import TakeToPage from '../templates_of_content/takeToPage/takeToPage';

import { increment,decrement,setValue } from './reduxSlice';
import store from './store';



let ToCheckRedux=()=>{

    const count=useSelector(state=>{
console.log("react state at check @count",state);
      return state.counter.count});


    const dispatch = useDispatch();

    const incrementFunction = () => {
      store.dispatch(increment());
      };
    
      const decrementFunction = () => {
        store.dispatch(decrement());
      };

      const value=useSelector(state=>
        {
            console.log('React state at check @value',JSON.stringify(state));
            return state.other.value;
        });


      const setDataValue = (value) => {
        store.dispatch(setValue(value));
      };



    return (
        <div>

     <TakeToPage url='/reduxComponent' label='Redux data'></TakeToPage>

     <ComponentTemplate label={`DATA count ${count} \n DATA value ${value} ` }></ComponentTemplate>
           
            <div className={useRefStyles.box}>
                <div className={useRefStyles.changeButton} onClick={incrementFunction}>increase</div>
                <div className={useRefStyles.changeButton} onClick={decrementFunction}>decrease</div>
                <input style={{border:"2px solid black"}} placeholder='ENTER   VALUE' onChange={(e)=>setDataValue(e.target.value)}></input>

            </div>
        </div>
    )
}

export default ToCheckRedux;