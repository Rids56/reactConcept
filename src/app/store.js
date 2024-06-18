import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Redux/CounterSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
    }
})