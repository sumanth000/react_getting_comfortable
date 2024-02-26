// reducers.js
import { createSlice } from '@reduxjs/toolkit';

// Define initial state for counter
const initialCounterState = {
  count: 0
};

// Define initial state for other
const initialOtherState = {
  value: ''
};

// Create counter slice
const counterSlice = createSlice({
  name: 'firstSlice',
  initialState: initialCounterState,
  devTools: true, // Enable Redux DevTools

  reducers: {
    increment: (state,action) => {
      state.count += 1;
    },
    decrement: (state,action) => {
      state.count -= 1;
    }
  }
});

// Create other slice
const otherSlice = createSlice({
  name: 'secondSlice',
  initialState: initialOtherState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    }
  }
});

// Export actions and reducer for counter
export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

// Export action and reducer for other
export const { setValue } = otherSlice.actions;
export const otherReducer = otherSlice.reducer;

export default counterSlice.reducer;
