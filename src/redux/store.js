import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist';


    const persistConfig = {
      key: 'root',
      storage:storageSession,
    }
    
    const persistedReducer = persistReducer(persistConfig, rootReducer)
    
    export const store = configureStore({
      reducer: persistedReducer,
      devTools: process.env.NODE_ENV !== 'production',
    })

export const persistor = persistStore(store)
export default store;
