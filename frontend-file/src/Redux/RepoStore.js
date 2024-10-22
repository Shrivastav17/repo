import { configureStore } from '@reduxjs/toolkit';
import storageReducer from './Reducers/tokenStorageSlice.js';

const store = configureStore({
    reducer: {
        storage:storageReducer

    },
  })
  
  export default store;