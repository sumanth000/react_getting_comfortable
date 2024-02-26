

import { useSelector, useDispatch } from 'react-redux';
import ComponentTemplate from '../templates_of_content/component_template/componentTemplate';

import useRefStyles from '../Hooks/css_folder/useRef.module.css'
import TakeToPage from '../templates_of_content/takeToPage/takeToPage';

import { increment ,decrement} from './reduxSlice';

import { setValue } from './reduxSlice';


let ReduxComponent=()=>{

    const count=useSelector(state=>
        {
            console.log('React state @count',JSON.stringify(state));
            return state.mainReducer.counter.count;
        });

   
    const dispatch = useDispatch();

    const incrementFunction = () => {
        dispatch(increment());
      };
    
      const decrementFunction = () => {
        dispatch(decrement());
      };

    //2nd reducer
      const value=useSelector(state=>
        {
            console.log('React state @value',JSON.stringify(state));
            return state.mainReducer.other.value;
        });


      const setDataValue = (value) => {
        dispatch(setValue(value));
      };


    return (
        <div>
            <TakeToPage url='/toCheckRedux' label='check the redux data'></TakeToPage>

            <ComponentTemplate label={`Redux count ${count} \n Redux value ${value} ` }></ComponentTemplate>

            <div className={useRefStyles.box}>

                <div className={useRefStyles.changeButton} onClick={incrementFunction}>increase</div>
                <div className={useRefStyles.changeButton} onClick={decrementFunction}>decrease</div>
                <input style={{border:"2px solid black"}} placeholder='ENTER VALUE' onChange={(e)=>setDataValue(e.target.value)}></input>
            </div>
        </div>
    )
}

export default ReduxComponent;