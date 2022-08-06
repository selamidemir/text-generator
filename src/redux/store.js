import { configureStore } from "@reduxjs/toolkit";
import FromReducer from './formSlice';

export const store = configureStore({
    reducer: {
        form: FromReducer,
    }
});