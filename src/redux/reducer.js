
import { configureStore } from '@reduxjs/toolkit';

import  {counterReducer,otherReducer}  from './reduxSlice';
import { combineReducers } from 'redux';
import { useActionData } from 'react-router-dom';
import { useEffect } from 'react';

import { applyMiddleware } from 'redux'; // Import applyMiddleware from redux
import { thunk } from 'redux-thunk';
// Combine reducers
export const rootReducer = combineReducers({
  counter: counterReducer,
  other: otherReducer
});


export const storeFunction=()=>{
console.log(' storeFunction changed')
}


  //  const  store=configureStore({
  //     reducer: {
  //         mainReducer:rootReducer ,
  //       }
  //     })

  // const middleware = [thunk]; // Initialize middleware array with thunk middleware

  // const store = configureStore({
  //   reducer: {
  //     mainReducer:rootReducer ,
  //   }
  //   });
  // export const selectCount = state => state.mainReducer.counter.count;



// export default store;
