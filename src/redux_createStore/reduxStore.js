


import { configureStore } from '@reduxjs/toolkit';
import { counterReducer, otherReducer } from './reduxSlice';
import { combineReducers } from 'redux';
import { useActionData } from 'react-router-dom';
import { useEffect } from 'react';


// Combine reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  other: otherReducer
});

let store =null;
export const storeFunction=()=>{
  console.log('configstore started');
  store=configureStore({
    reducer: {
        mainReducer:rootReducer ,
      }
    })
}
 


export default store;
