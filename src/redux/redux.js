

import { useSelector, useDispatch } from 'react-redux';
import ComponentTemplate from '../templates_of_content/component_template/componentTemplate';

import useRefStyles from '../Hooks/css_folder/useRef.module.css'
import TakeToPage from '../templates_of_content/takeToPage/takeToPage';

import { increment ,decrement,resetCount,resetValue} from './reduxSlice';

import { setValue } from './reduxSlice';
import { persistor } from './store';



let ReduxComponent=()=>{

    const count=useSelector(state=>
        {
            console.log('React state @count',JSON.stringify(state));
            return state.counter.count;
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
            return state.other.value;
        });


      const setDataValue = (value) => {
        dispatch(setValue(value));
      };


      const resetCountFunction=()=>{
        dispatch(resetCount());
        
      }
      const resetValueFunction=()=>{
        dispatch(resetValue());
        
      }
      const persistPurgefunction=()=>{
        persistor.purge() .then(() => {
          console.log('Persisted data purged successfully');
        })
        .catch((error) => {
          console.error('Error purging persisted data:', error);
        });
      }

    return (
        <div>
            <TakeToPage url='/toCheckRedux' label='check the redux data'></TakeToPage>

            <ComponentTemplate label={`Redux count ${count}  Redux value ${value} ` }></ComponentTemplate>

            <div className={useRefStyles.box}>
            <div className={useRefStyles.changeButton} onClick={incrementFunction}>increment</div>

                <div className={useRefStyles.changeButton} onClick={decrementFunction}>decrease</div>
                <div className={useRefStyles.changeButton} onClick={resetCountFunction}>reset count</div>
                <div className={useRefStyles.changeButton} onClick={resetValueFunction}>reset value</div>
                <div className={useRefStyles.changeButton} onClick={persistPurgefunction}>persist purge</div>

                <input style={{border:"2px solid black"}} placeholder='ENTER VALUE' onChange={(e)=>setDataValue(e.target.value)}></input>
           
            </div>
        </div>
    )
}

export default ReduxComponent;