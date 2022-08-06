import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncText = createAsyncThunk('paragraph/getAsyncText', async(number) => {
    const res = axios(`${REACT_APP_API_END_POINT}/?type=all-meat&paras=${number}&format=text`);
    return (await res).data;
});

export const getAsyncHtmlText = createAsyncThunk('paragraph/getAsyncHtmlText', async(number) => {
    const res = axios(`${REACT_APP_API_END_POINT}/?type=all-meat&paras=${number}&format=html`);
    return (await res).data;
});

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        items: [],
        number: 4,
        html: false,
    },
    reducers: {
        setNumber: (state, action) => {
            state.number = action.payload;
        },
        setHtml: (state, action) => {
            state.html = action.payload;
        }
    },
    extraReducers: {
        [getAsyncText.pending]: (state, action) => {
            console.log(action.payload)
        },
        [getAsyncHtmlText.fulfilled]: (state, action) => {
            console.log(action.payload)
        },
        [getAsyncText.rejected]: (state, action) => {
            console.log(action.payload)
        },
        [getAsyncText.pending]: (state, action) => {
            console.log(action.payload)
        },
        [getAsyncHtmlText.fulfilled]: (state, action) => {
            console.log(action.payload)
        },
        [getAsyncHtmlText.rejected]: (state, action) => {
            console.log(action.payload)
        }
    }
});

export const {setHtml, setNumber} = formSlice.actions;
export default formSlice.reducer;